import { useRouteError, useNavigate } from "react-router-dom";
import errorimg from "../public/404img.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col text-center items-center bg-white h-screen">
      <img src={errorimg} alt="error img" className="" />
      <div className="md:my-20 my-8 font-Rubik">
        <h1 className="text-[#565872] text-xl uppercase font-semibold">
          Oops! page not found!
        </h1>
        <button
          className="bg-[#FB8133] uppercase px-12 py-3 text-sm text-white my-8 md:my-12 rounded-3xl"
          onClick={handleClick}
        >
          back to home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
