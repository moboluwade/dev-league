import emptyfolder from "/empty-folder-svgrepo-com.svg";
const NoBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-gray-50 p-4">
      <img src={emptyfolder} alt="" className="w-[5rem] h-[5rem] mb-2" />
      <p className="text-lg md:text-xl font-medium text-gray-700 mb-3">
        No blogs available at the moment.
      </p>
      <p className="text-base md:text-lg text-gray-500">
        Fresh blogs coming soon!
      </p>
    </div>
  );
};

export default NoBlog;
