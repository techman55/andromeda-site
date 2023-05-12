export default function ContentArea(props) {

    const { body, image, title, header, style } = props


    const sections = [

        <div className={"flex w-full md:w-2/5 flex-col justify-start"}>

            <div className={"m-4"}>
                <div className={` w-max mb-4  border-b-2 pb-2`}>
                    <p className={"font-bold body-text text-2xl"}>{header}</p>
                </div>

                <div className={"m-4"}>
                    {body}
                </div>
            </div>

        </div>,


        <div className={"flex flex-col w-full md:w-3/5 md:justify-end"}>

            <div className={"md:w-full justify-center "}>
                <img src={image} className={"border-4 border-[#5243ac] m-6 rounded-lg w-3/4 drop-shadow-lg"}/>
            </div>

        </div>

    ]


    return <div className={`flex flex-row justify-evenly border-2 border-[#5243ac] rounded-xl from-[#333333] to-[#341569] p-6 m-5 mt-20 flex-wrap drop-shadow-xl bg-gradient-to-r ${style === 1 ? "md:bg-gradient-to-r" : "md:bg-gradient-to-l"}`}>

        {style === 1 ? <>{sections[0]}{sections[1]}</> : <>{sections[1]}{sections[0]}</>}

    </div>

}
