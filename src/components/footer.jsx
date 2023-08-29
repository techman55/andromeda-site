import React from 'react'

function footer() {
  return (
    <div>
        <footer className={"absolute bottom-0 bg-[#5243ac] p-10 w-full"}>
            <div className={"flex flex-col md:flex-row justify-between"}>
                <div className={"flex flex-col"}>
                    <span className={"text-white font-bold text-2xl"}>Andromeda</span>
                    <span className={"text-white text-sm"}>© 2023 <a href={"https://jackhubbard.com"}>Jack Hubbard</a> and <a href={"https://github.com/darrinhaase"}>Darrin Haase</a></span>
                    </div>
                    </div>
                    </footer>
    </div>
  )
}

export default footer