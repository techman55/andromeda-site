import {useEffect} from "react";
import {initTypewriter} from "../App.jsx";
import logo from "../assets/logo.png";

export default function Header(props) {


    useEffect(() => {
        initTypewriter("desc")
    }, [])



    return <div className={"w-full flex place-items-center m-10 "}>
        <div>
            <img src={logo} className={"w-16 mr-4"}/>
        </div>
        <div className={"flex-col place-items-center"}>
            <p className={"font-bold text-3xl"}>Andromeda</p>
            <a data-period="90000000" data-type={JSON.stringify([ "Documentation" ])} className={"typewrite text-lg"} id={"desc"}></a>
        </div>
    </div>

}
