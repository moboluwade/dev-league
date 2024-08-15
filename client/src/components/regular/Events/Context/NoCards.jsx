import { FaRegFile } from "react-icons/fa";
const NoCards = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-2">
      <FaRegFile className="text-6xl mb-2" />
      <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
        No Articles Yet
      </p>
      <p className="text-lg md:text-xl text-gray-600">coming soon...</p>
    </div>
  );
};

export default NoCards;
