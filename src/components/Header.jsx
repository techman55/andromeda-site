import {useEffect} from "react";
import {initTypewriter} from "../App.jsx";

export default function Header(props) {


    useEffect(() => {
        initTypewriter("desc")
    }, [])



    return <div className={"w-full h-1/2 bg-gradient-to-b from-[#5243ac] p-10 pb-60 flex justify-center place-items-center flex-col"}>
        <p className={"font-bold text-5xl"}>Andromeda</p>
        <a data-period="3000" data-type={JSON.stringify([ "a Geometric Sketching Tool", "The New Geometers' Sketchpad", "Made by Students" ])} className={"typewrite text-lg"} id={"desc"}></a>
    </div>

}
