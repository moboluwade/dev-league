import eventBusyIcon from "./event-busy-svgrepo-com.svg";
const NoCards = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-2 text-center">
      <img className="w-32 mb-2 text-6xl" src={eventBusyIcon} alt="no events" />
      <p className="mb-2 text-xl font-semibold text-gray-800 md:text-2xl">
        No Events Yet
      </p>
      <p className="text-lg text-gray-600 md:text-xl">coming soon...</p>
    </div>
  );
};

export default NoCards;
