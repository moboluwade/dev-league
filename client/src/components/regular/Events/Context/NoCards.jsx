const NoCards = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Our events calendar is currently empty, but we’re planning some great
        things for the future.
      </p>
      <p className="text-lg md:text-xl text-gray-600">Stay connected!</p>
    </div>
  );
};

export default NoCards;
