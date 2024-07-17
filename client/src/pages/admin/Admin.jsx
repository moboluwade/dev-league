import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import AuthenticatedRoute from './AuthorizedRoute'
// import Login from './login/login'

const Admin = () => {
  // this boolean logic should only affect mobile
  const [navActive, setNavActive] = useState(false);

  const navigate = useNavigate();

  const { isError, isSuccess } = useQuery({
    queryKey: ["validate-tokenz"],
    queryFn: async () => {
      const res = axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/validate`,
        { withCredentials: "include" },
      );
      return res;
    },
  });

  useEffect(() => {
    isError && navigate("/login");
  }, [isError, navigate]);

  return (
    <div className="h-screen flex flex-col relative md:grid md:grid-cols-[16rem_1fr]   w-full md:flex-row">
      {isSuccess && (
        <>
          <div className="pb-4 shadow-md">
            <Navbar setNavActive={setNavActive} navActive={navActive} />
            <button
              className={`${
                navActive ? "hidden" : "relative top-4 left-4 md:pb-12"
              } md:hidden`}
              onClick={() => setNavActive(!navActive)}
            >
              <img
                className="p-2 bg-[#FD4F13] rounded-full w-fit h-fit "
                src="/admin/menu.svg"
                alt="menu"
              />
            </button>
          </div>
          <div className="overflow-y-scroll   h-full w-full ">
            <div className="max-w-[75rem] mx-auto ">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
