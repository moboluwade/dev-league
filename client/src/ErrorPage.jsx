import { useRouteError, useNavigate } from "react-router-dom";
import errorimg from "../public/404img.png";
import devLeagueLogo from "../public/Union.png";

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
      <div className="mt-6 md:mt-8 font-Rubik">
        <h1 className="text-[#565872] text-xl uppercase font-semibold">
          <span className="text-[#FB8133]">Oops!</span> page not found!
        </h1>
        <button
          className="flex items-center justify-center gap-2 bg-white border-2 border-[#FB8133] uppercase px-8 py-3 text-sm text-[#FB8133] mt-6 rounded-3xl"
          onClick={handleClick}
        >
          <img src={devLeagueLogo} alt="Dev League Logo" className="w-6 h-6" />
          back to dev league
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
