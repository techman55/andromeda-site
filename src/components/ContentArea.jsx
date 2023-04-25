export default function ContentArea(props) {

    const { body, image, title, header } = props


    return <div className={"flex flex-row justify-evenly border-2 border-[#5243ac] rounded-xl bg-gradient-to-r from-[#333333] to-[#5243ac] p-6 m-5 mt-20 flex-wrap drop-shadow-xl"}>

        <div className={"flex sm:w-1/2 flex-col  justify-start"}>

            <div className={"bg-gradient-to-r from-[#333333] to-[#5243ac] m-4 w-fit p-4 rounded-md border-2 border-[#5243ac] "}>
                <p className={"font-bold body-text"}>{header}</p>
            </div>

            <p className={"sm:w-full body-text text-lg p-4"}>{body}</p>

        </div>


        <div className={"flex flex-col sm:w-1/2 justify-end"}>

            <div className={""}>
                <img src={image} className={"border-4 border-[#5243ac] m-6 rounded-lg sm:w-full  drop-shadow-lg"}/>
            </div>

        </div>

    </div>

}
