import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const Admin = () => {
    return (
        <div className="flex flex-row w-full h-fit">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Admin