import { useQuery } from "@tanstack/react-query";
import BlogData from "./BlogData";
import axios from "axios";
import { useState } from "react";

function BlogContent() {
  const [superBlog, setSuperBlog] = useState({})

  const { data } = useQuery({
    queryKey: ['fetch blogs'],
    queryFn: async () => {
      const response = axios.get('/endpoint/api/articles')
      const blogs = response.json()
      setSuperBlog(blogs.slice(0, 1)[0])
      return blogs.slice(1)
    }
  })


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
    <div className="flex flex-col gap-[50px] py-[4.5rem] lg:px-[7rem] md:px-12 px-4 max-w-[87.5rem] justify-center items-center">
      <div className="flex justify-end gap-2 mr-5">
        <button className="border-2 px-1 py-[2px] font-bold rounded-[5px]">
          1
        </button>
        <button className="border-2 px-1 py-[2px] font-bold rounded-[5px]">
          2
        </button>
      </div>
      <div className="flex flex-col gap-8 px-4">
        <div className="grid sm:grid-cols-2 gap-7 sm:gap-10 lg:gap-14">
          <div className="flex flex-col order-2 w-full gap-2 text-left align-middle lg:gap-3">
            <button className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal p-2 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
              {superBlog ? superBlog.blogType : 'Article'}
            </button>
            <span className="font-[inter] font-normal text-[14px] sm:text-base w-[103px] h-[20px] text-[#7A6C65] ">
              {superBlog ? superBlog.date : ' 01 June 2023'}
            </span>

            <b className="font-[inter] text-base sm:text-lg lg:text-2xl font-semibold text-[#101828] w-full ">
              {superBlog ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'}
            </b>
            <p className="w-full text-sm font-normal lg:text-base">
              {superBlog ? superBlog.description : 'How do you create compelling presentations that wow your audience...'}
            </p>
            <div className="flex items-center w-full gap-4">
              <img
                src="/Avatar.png"
                className="w-10 h-10 rounded-[200px]"
                alt="authorImg"
              />
              <span className="font-[inter] text-sm sm:text-base font-bold text-center ">
                {superBlog ? superBlog.blogAuthor : ' Qawi'}
              </span>
            </div>
          </div>
          <div className="flex justify-end order-1 w-full h-full sm:order-2">
            <img
              className="w-356px h-155px sm:w-500px sm:h-full md:w-510px rounded-[8px]"
              src="/Image.png"
              alt=""
            />
          </div>
        </div>
        {/* Blog main section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {data ?
            data.map((blog) => {
              const { id, date, title, description, blogAuthor, blogImage, blogType } = blog
              // const { id, heading, body, image, author, button } = blog;
              return (
                <div
                  key={id}
                  className="flex flex-col flex-grow border border-[#D4CECB] m-auto  min-w-[18rem] bg-white rounded-lg text-start"
                >
                  <div>
                    <img
                      className="w-full rounded-t-lg"
                      src={blogImage}
                      alt="image"
                    />
                  </div>
                  <div className="px-3 pt-3 pb-2">
                    <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                      {title}
                    </span>
                    <p className="mt-2 text-sm font-normal md:text-base">
                      {TextLength(description)}{" "}
                      <a
                        className="underline text-text-dev-orange hover:opacity-70"
                        href="#"
                      >
                        Read more
                      </a>
                    </p>

                    <div className="flex items-center w-full gap-4 pt-3">
                      <img src='/Avatar.png' alt="authorImg" />
                      <span className="text">{blogAuthor}</span>
                      <span className="textLight">{date}</span>
                    </div>
                    <button className="text-[18px] font-medium text-[#7A6C65] font-[inter] p-[8px] border-[0.5px]  mt-4 rounded-[8px]">
                      {blogType}
                    </button>
                  </div>
                </div>
              );
            })
            :
            BlogData.map((blog) => {
              const {id, heading, body, image, author, button} = blog;
              return (
                <div
                  key={id}
                  className="flex flex-col flex-grow border border-[#D4CECB] m-auto  min-w-[18rem] bg-white rounded-lg text-start"
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
                    <p className="mt-2 text-sm font-normal md:text-base">
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
            })
          }
        </div>
        <div className="flex justify-center gap-2">
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

