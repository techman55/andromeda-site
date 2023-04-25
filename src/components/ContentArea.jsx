export default function ContentArea(props) {

    const { body, image, title, header, style } = props


    const sections = [

        <div className={"flex w-full md:w-2/5 flex-col justify-start"}>

            <div className={"bg-gradient-to-r from-[#333333] to-[#5243ac] m-4 w-fit p-4 rounded-md border-2 border-[#5243ac] "}>
                <p className={"font-bold body-text"}>{header}</p>
            </div>

            <p className={"md:w-full body-text text-xl p-4"}>{body}</p>

        </div>,


        <div className={"flex flex-col w-full md:w-3/5 md:justify-end"}>

            <div className={"md:w-full justify-center "}>
                <img src={image} className={"border-4 border-[#5243ac] m-6 rounded-lg w-3/4 drop-shadow-lg"}/>
            </div>

        </div>

    ]


    return <div className={`flex flex-row justify-evenly border-2 border-[#5243ac] rounded-xl from-[#333333] to-[#5243ac] p-6 m-5 mt-20 flex-wrap drop-shadow-xl ${style === 1 ? "bg-gradient-to-r" : "bg-gradient-to-l"}`}>

        {style === 1 ? <>{sections[0]}{sections[1]}</> : <>{sections[1]}{sections[0]}</>}

    </div>

}