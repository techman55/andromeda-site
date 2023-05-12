import {useEffect, useRef, useState} from "react";
import {osCheck} from "../utils/osCheck.js";
import windowsIcon from "../assets/windows.svg";
import macosIcon from "../assets/macos.svg";
import linuxIcon from "../assets/linux.svg";
import {initTypewriter} from "../App.jsx";

const icons = {
    Windows: windowsIcon,
    macOS: macosIcon,
    Linux: linuxIcon
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
            try {
                if (showAllOSes) {
                    for (const OS of Object.keys(downloadUrl)) {
                        initTypewriter(OS)
                    }
                } else {
                    initTypewriter(OS)
                }
            } catch (err) {
                console.log(err)
                setShowAllOSes(true)
            }
        }
    }, [showAllOSes, loading])

    if (loading) {
        return <div className={"w-full flex flex-col justify-center place-items-center"}>

                <a className={"p-4 bg-gradient-to-r from-[#333333] to-[#5243ac] hover:ring-[#5243ac] hover:ring-2 drop-shadow-xl rounded-lg justify-center place-items-center transition-all duration-300   mb-4 w-[20em]"} >
                    <div className={"flex w-full "}>
                        <div className={"flex-1/4 flex justify-center w-1/4"}>
                            <div className={"w-10"}></div>
                        </div>
                        <div className={"flex-row justify-center  flex-3/4 w-3/4"}>
                            <div className={"flex flex-col"}>
                                <p>loading...</p>
                                <p className={"text-xs"}>latest: loading...</p>
                            </div>
                        </div>
                    </div>
                </a>
        </div>
    }

    return <div className={"w-full flex flex-col justify-center place-items-center"}>

        {!OS && <p className={"text-red-400 text-xs mb-4 p-6 font-bold"}>Your operating system could not be determined automatically.</p>}

        {!showAllOSes ?

        /*If only showing recommended os*/
        <><a href={downloadUrl[OS]} download className={"p-4 bg-gradient-to-r from-[#333333] to-[#5243ac] hover:ring-[#5243ac] hover:ring-2 drop-shadow-xl rounded-lg justify-center place-items-center transition-all duration-300   mb-4 w-[20em]"} >
            <div className={"flex w-full "}>
                <div className={"flex-1/4 flex justify-center w-1/4"}>
                    <img src={icons[OS]} alt="" className={"pr-4 w-10 "} style={{
                        filter: "invert(1)"
                    }}/>
                </div>
                <div className={"flex-row justify-center  flex-3/4 w-3/4"}>
                    <div className={"flex flex-col"}>
                        <p>Download for <span data-period="100000" data-type={`[ "${OS}" ]`} className={"typewrite"} id={OS}></span></p>
                        <p className={"text-xs"}>latest: {latestVersion}</p>
                    </div>
                </div>
            </div>
        </a>
        <a className={"text-xs text-left hover:cursor-pointer"} onClick={() => {setShowAllOSes(true)}}>Show All OSes</a>
        </>:

        /*If showing all oses*/

         <>
         {Object.keys(downloadUrl).map((OS) => {

             return <a href={downloadUrl[OS]} download className={"p-4 bg-gradient-to-r from-[#333333] to-[#5243ac] hover:ring-[#5243ac] hover:ring-2 drop-shadow-xl rounded-lg justify-center place-items-center transition-all duration-300   mb-4 w-[20em]"} >
                 <div className={"flex w-full "}>
                     <div className={"flex-1/4 flex justify-center w-1/4"}>
                         <img src={icons[OS]} alt="" className={"pr-4 w-10 "} style={{
                             filter: "invert(1)"
                         }}/>
                     </div>
                     <div className={"flex-row justify-center  flex-3/4 w-3/4"}>
                         <div className={"flex flex-col"}>
                             <p>Download for <span data-period="100000" data-type={`[ "${OS}" ]`} className={"typewrite"} id={OS}></span></p>
                             <p className={"text-xs"}>latest: {latestVersion}</p>
                         </div>
                     </div>
                 </div>
             </a>

         })}

         <a className={"text-xs text-left hover:cursor-pointer"} onClick={() => setShowAllOSes(false)}>Show only my OS</a>
         </>
        }
    </div>

}
