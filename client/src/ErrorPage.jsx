import { useRouteError } from "react-router-dom";
import errorimg from "../public/404Text.png";
import liquidobjects from "../public/LiquidsObject.png";
import line from "../public/Line.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex justify-center items-center bg-white h-screen">
      <div className="rounded-full flex flex-col items-center justify-center text-center">
        <div className="relative">
          <img
            src={errorimg}
            alt="error img"
            className="md:-mb-8 z-2 mb-4 h-[332px] w-[594px]"
          />
          <img
            src={liquidobjects}
            alt="liquid object"
            className="absolute top-24 right-28 z-1"
          />
          <img src={line} alt="line" className="absolute top-4 right-2" />
        </div>
        <h1 className="font-Inter text-[#223051] font-extrabold text-6xl">
          Oops, This Page Could Not Be Found.
        </h1>
        <p className="font-extrabold text-[#7C869C] py-3">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
