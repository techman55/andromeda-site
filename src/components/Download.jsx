import {useEffect, useRef, useState} from "react";
import {osCheck} from "../utils/osCheck.js";
import windowsIcon from "../assets/windows.svg";
import macosIcon from "../assets/macos.svg";
import linuxIcon from "../assets/linux.svg";
import {initTypewriter} from "../App.jsx";

const icons = {
    windows: windowsIcon,
    macos: macosIcon,
    linux: linuxIcon
}

export default function Download(props) {

    let data = useRef(null)
    const [loading, setLoading] = useState(true)
    const [showAllOSes, setShowAllOSes] = useState(false)
    const [latestVersion, setLatestVersion] = useState(null)
    const [downloadUrl, setDownloadUrl] = useState(null)
    const [activeOSes, setActiveOSes] = useState([])
    const [OS, setOS] = useState(null)

    useEffect(() => {async function _() {

        setOS(await osCheck());

        data.current = await fetch("https://f.techman.dev/d/andromeda/version.json")
        data.current = await data.current.json()

        const { latest, versions } = data.current
        console.log(versions)

        setLatestVersion(latest.release)
        setDownloadUrl(versions[latest.release]["binary"])

        setActiveOSes([OS])


    }; _().then(() => setLoading(false))}, [])

    useEffect( () => {
        if (!loading) {
            if (showAllOSes) {
                for (const OS of Object.keys(downloadUrl)) {
                    initTypewriter(OS)
                }
            } else {
                initTypewriter(OS)
            }
        }
    }, [showAllOSes, loading])

    if (loading) {
        return <>
            <p>Loading...</p>
        </>
    }

    return <div className={"w-full flex flex-col justify-center place-items-center"}>
        {!showAllOSes ?

        /*If only showing recommended os*/
        <><a href={downloadUrl[OS]} download className={"p-4 bg-gradient-to-r from-[#333333] to-[#5243ac] hover:ring-[#5243ac] hover:ring-2 drop-shadow-xl rounded-lg transition-all duration-300 flex flex-row justify-center place-items-center mb-4 w-[20em]"} >
            <img src={icons[OS]} alt="" className={"pr-4 w-10 "} style={{
                filter: "invert(1)"
            }}/>
            <div className={"flex flex-col"}>
                <p>Download for <span data-period="100000" data-type={`[ "${OS}" ]`} className={"typewrite text-lg "} id={OS}></span></p>
                <p className={"text-xs"}>latest: {latestVersion}</p>
            </div>

        </a>
        <a className={"text-xs text-left "} onClick={() => {setShowAllOSes(true)}}>Show All OSes</a>
        </>:

        /*If showing all oses*/

         <>
         {Object.keys(downloadUrl).map((OS) => {

             return <a href={downloadUrl[OS]} download={"Andromeda.jpg"} className={"p-4 bg-gradient-to-r from-[#333333] to-[#5243ac] hover:ring-[#5243ac] hover:ring-2 drop-shadow-xl rounded-lg transition-all duration-300 flex flex-row justify-center place-items-center mb-4 w-[20em]"} >
                 <img src={icons[OS]} alt="" className={"pr-4 w-10 "} style={{
                     filter: "invert(1)"
                 }}/>
                 <div className={"flex flex-col"}>
                     <p>Download for <span data-period="100000" data-type={`[ "${OS}" ]`} className={"typewrite text-lg "} id={OS}></span></p>
                     <p className={"text-xs"}>latest: {latestVersion}</p>
                 </div>
             </a>

         })}

         <a className={"text-xs text-left "} onClick={() => setShowAllOSes(false)}>Show only my OS</a>
         </>
        }
    </div>

}
