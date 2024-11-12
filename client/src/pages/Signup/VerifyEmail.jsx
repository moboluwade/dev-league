import { useEffect } from "react";

const VerifyEmail = ({
  emailVerification,
  setCurrentFlow,
  email,
  setEmail,
  currentFlow,
}) => {
  useEffect(() => {
    // increases flow count if the request is successful

    emailVerification.isPending && console.log("process paending"); //replace with loader action
    emailVerification.isSuccess && setCurrentFlow((prev) => ++prev);
    emailVerification.isError &&
      alert("Email is not registered by lead. Check email?");

  }, [setCurrentFlow, emailVerification, currentFlow]);

  return (
    <div>
      <label className="font-normal text-base block mb-2 text-[rgba(52, 64, 84, 1)]">
        Email
      </label>
      <input
        className="block py-3 px-4 rounded-lg w-full focus:ring-0 border-2 focus:outline-none focus:border-[#D1E9FF]  border-gray-300"
        type="text"
        placeholder="balamia@gmail.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </div>
  );
};

export default VerifyEmail;
