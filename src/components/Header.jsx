import {useEffect} from "react";
import {initTypewriter} from "../App.jsx";
import logo from "../assets/logo.png";
import github from "../assets/github-64px.png";

export default function Header(props) {


    useEffect(() => {
        initTypewriter("desc")
    }, [])



    return <>
        <a className={"absolute top-0 left-0 p-3 bg-gray-700 hover:ring-[#5243ac] hover:ring-2 drop-shadow-xl rounded-lg justify-center place-items-center transition-all duration-300   mb-4 w-fit m-4 "} href={"https://andromeda.jesuitnotes.com/docs/index.html"}><p className={"font-bold text-xs"}>Instructions</p></a>
        <a className="absolute top-0 right-0 m-4 hover:cursor-pointer" href={"https://github.com/darrinhaase/Andromeda"} target={"_blank"} rel="noreferrer"><img src={github} alt="" style={{
            filter: "invert(1)"
        }} className={"w-6"}/></a>
    <div className={"w-full bg-gradient-to-b from-[#5243ac] p-10 pb-20 flex justify-center place-items-center flex-col"}>
        <div>
            <img src={logo} className={"w-60"}/>
        </div>
        <p className={"font-bold text-5xl"}>Andromeda</p>
        <a data-period="3000" data-type={JSON.stringify([ "a Geometric Sketching Tool", "The New Geometers' Sketchpad", "Made by Students" ])} className={"typewrite text-lg"} id={"desc"}></a>
    </div></>

}
