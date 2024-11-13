import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "@components/AdminNavbar";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Toaster } from "@/components/ui/toaster";

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
        { withCredentials: "include" }
      );
      return res;
    },
  });

  useEffect(() => {
    // isError && navigate("/login");
  }, [isError, navigate]);

  return (
    <div className="w-screen max-h-screen bg-text-dev-light-orange">
      {isSuccess && (
        <div className="relative flex flex-col w-full h-screen overflow-hidden md:flex-row">
          <div className="relative w-64 h-full ">
            <Navbar setNavActive={setNavActive} navActive={navActive} />
          </div>
          <div className="flex flex-grow">
            <Outlet />
            <Toaster />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
