import { useEffect } from "react";

const VerifyPasscode = ({
  passcodeVerification,
  setCurrentFlow,
  showPassword,
  setShowPassword,
  passcode, setPasscode, showDiv
}) => {
  useEffect(() => {
    // increases flow count if the request is successful
    passcodeVerification.isSuccess && setCurrentFlow((prev) => ++prev);
    passcodeVerification.error && alert("You have entered the wrong passcode?");
    passcodeVerification.error &&
      console.log(passcodeVerification.status, passcodeVerification.error);
  }, [
    setCurrentFlow,
    passcodeVerification.isSuccess,
    passcodeVerification.error,
    passcodeVerification.status,
  ]);
  return (
    <div className="relative h-fit">
      <div className="flex justify-center mt-6 mb-2">
        <label className="font-normal text-base text-[rgba(52, 64, 84, 1)]">
          Secret Passcode
        </label>
        <a className="ml-auto text-[#1570EF] invisible">Forget ?</a>
      </div>
      <div className="flex items-center">
        <input
          className="block py-3 px-4 rounded-lg w-full focus:ring-0 border-2 focus:outline-none focus:border-[#D1E9FF]  border-gray-300"
          type={`${showPassword ? "text" : "password"}`}
          placeholder="Enter your password"
          value={passcode}
          onChange={(e) => {
            setPasscode(e.target.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="-ml-10 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? (
            <>
              <path
                d="M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25Z"
                stroke="#98A2B3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                stroke="#98A2B3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          ) : (
            <path
              stroke="#98A2B3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          )}
        </svg>
      </div>
      <div className="absolute flex flex-row justify-center w-full px-2 text-xs text-white rounded-md bg-text-dev-faded-base top-2 h-fit">
        {showDiv && "! email and password is invalid"}
      </div>
    </div>
  );
};

export default VerifyPasscode;
