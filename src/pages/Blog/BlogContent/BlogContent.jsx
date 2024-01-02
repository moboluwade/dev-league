import BlogData from "./BlogData";

function BlogContent() {
  const TextLength = (text) => {
    const length = text.length;
    if (length > 65) {
      const textLength = text.slice(0, 65);
      const newText = textLength + "...";
      return newText;
    } else {
      return text + "...";
    }
  };

  return (
    <div className="flex flex-col gap-[50px] py-[4.5rem] lg:px-[7rem] md:px-12 px-4 max-w-[87.5rem] justify-center">
      <div className="flex justify-end mr-5 gap-2">
        <button className="border-2 px-1 py-[2px] font-bold rounded-[5px]">
          1
        </button>
        <button className="border-2 px-1 py-[2px] font-bold rounded-[5px]">
          2
        </button>
      </div>
      <div className="flex flex-col gap-8 px-4">
        <div className="grid place-items-center sm:grid-cols-2 gap-7 sm:gap-10">
          <div className="flex flex-col gap-1 lg:gap-3 w-full align-middle order-2 text-left">
            <button className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal p-2 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
              Article
            </button>
            <span className="font-[inter] font-normal text-[14px] sm:text-base w-[103px] h-[20px] text-[#7A6C65] ">
              01 June 2023
            </span>

            <b className="font-[inter] text-base sm:text-lg lg:text-2xl font-semibold text-[#101828] w-full ">
              The Impact of DevOps on Software Development and Deployment
            </b>
            <p className="w-full font-normal text-sm lg:text-base">
              How do you create compelling presentations that wow your
              audience...
            </p>
            <div className="flex items-center w-full gap-4">
              <img
                src="/Avatar.png"
                className="w-10 h-10 rounded-[200px]"
                alt="authorImg"
              />
              <span className="font-[inter] text-sm sm:ext-base font-bold text-center ">
                Qawi
              </span>
            </div>
          </div>
          <div className="w-2xl h-full order-1 sm:order-2">
            <img
              className="w-356px h-155px sm:w-500px sm:h-full md:w-510px rounded-[8px]"
              src="/Image.png"
              alt=""
            />
        </div>

          </div>
        {/* Blog main section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {BlogData.map((blog) => {
            const { id, heading, body, image, author, button } = blog;
            return (
              <div
                key={id}
                className="flex flex-col flex-grow border border-[#D4CECB] lg:max-w-[22rem] m-auto  max-w-[18rem] bg-white rounded-lg text-start"
              >
                <div>
                  <img
                    className="w-full rounded-t-lg"
                    src={image}
                    alt="image"
                  />
                </div>
                <div className="px-3 pt-3 pb-2">
                  <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                    {heading}
                  </span>
                  <p className="font-normal text-sm md:text-base mt-2">
                    {TextLength(body)}{" "}
                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href="#"
                    >
                      Read more
                    </a>
                  </p>

                  <div className="flex items-center w-full gap-4 pt-3">
                    <img src={author.img} alt="authorImg" />
                    <span className="text">{author.name}</span>
                    <span className="textLight">{author.date}</span>
                  </div>
                  <button className="text-[18px] font-medium text-[#7A6C65] font-[inter] p-[8px] border-[0.5px]  mt-4 rounded-[8px]">
                    {button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 justify-center">
          <button className="border-2 px-1 py-[2px] font-bold rounded-[5px]">
            1
          </button>
          <button className="border-2 px-1 py-[2px] font-bold rounded-[5px]">
            2
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
