import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState } from "react";

const Admin = () => {
    // this boolean logic should only affect mobile
    const [navActive, setNavActive] = useState(false)

    return (
        <div className="flex flex-col w-full h-screen overflow-y-scroll md:flex-row">
            <Navbar setNavActive={setNavActive} navActive={navActive} />
            <button
                className={`${navActive? "hidden" : "relative" } md:hidden`}
                onClick={() => setNavActive(!navActive)}
            >
                <img className="p-2 bg-[#FD4F13] rounded-full w-fit h-fit " src="/admin/menu.svg" alt="menu" />
            </button>
            <Outlet />
        </div>
    )
}

export default Admin