import { useQuery } from "@tanstack/react-query";
import NoBlog from "./NoBlog";
// import BlogData from "./BlogData";
import axios from "axios";
import { useEffect, useState } from "react";
// import ReactPaginate from 'react-paginate'
import "./blogContent.css";
import Loader from "../../../Loader/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DateEdit = ({ date }) => {
  const monthsOfTheYear = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateNo = new Date(date).getDate();
  const month = monthsOfTheYear[new Date(date).getMonth()];
  const year = new Date(date).getFullYear();
  console.log("date", year);
  return (
    <div>
      <div>
        <span>{date && dateNo + " " + month + " " + year}</span>
      </div>
    </div>
  );
};
const BlogsToDisplay = ({ blogs }) => {
  return (
    <div className="flex flex-col w-full gap-8 ">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {blogs.length > 0 &&
          blogs.map((blog, i) => (
            <div
              key={i}
              className="flex flex-col flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start"
            >
              <div>
                <div>
                  {blogs.length > 0 ? (
                    <img
                      className="w-full rounded-t-lg"
                      src={blog.blogImage}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-full rounded-t-lg"
                      src="/Image.png"
                      alt=""
                    />
                  )}
                </div>
                <div className="px-3 pt-3 pb-2">
                  <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                    {blogs.length > 0 && blog.title}
                  </span>
                  <p className="mt-2 text-sm font-normal md:text-base">
                    {blogs.length > 0 && blog.blogContent.slice(0, 100)}
                    {" ... "}

                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href={`/blog/` + blog._id}
                    >
                      Read more
                    </a>
                  </p>

                  <div className="flex items-center w-full gap-4 py-3">
                    {/* <img src="/Avatar.png" alt="authorImg" />
                    <span className="text">
                      {blogs.length > 0 && blog.author}
                    </span> */}
                    <span className="textLight">
                      {blogs.length > 0 && <DateEdit date={blog.createdAt} />}
                    </span>
                  </div>
                  <div className="text-[15px] text-center flex flex-row justify-center items-center h-8 sm:text-[18px] text-[#7A6C65] font-[inter] font-normal sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                    {blogs.length > 0 && blog.blogType[0]}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

function BlogContent() {
  // holds the data fetch from the backend
  const [blogs, setBlogs] = useState([]);

  const { data, isFetched, isLoading } = useQuery({
    queryKey: ["fetch blogs"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/blog`
      );
      const response = res.data;
      const blogArray = response.blogs;
      return blogArray;
    },
  });

  useEffect(() => {
    data && setBlogs(data);
  }, [data]);

  const [showNoCards, setShowNoCards] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isFetched && blogs.length === 0) {
      // Delay the display of NoCards by 1 second
      timeoutId = setTimeout(() => {
        setShowNoCards(true);
      }, 1000); // 1000ms = 1 second
    } else {
      setShowNoCards(false);
    }
    blogs.length > 0 && console.log(blogs[2].createdAt);
    // Clean up the timeout if conditions change
    return () => clearTimeout(timeoutId);
  }, [isFetched, blogs]);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden h-fit lg:h-fit min-h-[566px] ">
      <h1 className="w-full px-4 pt-6 text-2xl font-bold capitalize md:hidden md:text-4xl text-primary500">
        Latest Blogs
      </h1>
      {/* show no cards if there is fetch has occured and blog list is empty */}
      {/* prevent users seeing the no blog everytime they come to the blog page. */}
      <div className="relative w-full -top-14">
        {isLoading && <Loader />}
        {isFetched && showNoCards && <NoBlog />}
      </div>
      {data && (
        <div className="flex flex-col gap-[50px] py-4 md:py-[4.5rem] lg:px-[7rem] md:px-12 px-4 max-w-[87.5rem] justify-center items-center">
          {/* blogs */}
          {/* desktop screen */}
          {blogs.length !== 0 && (
            <div className="grid sm:grid-cols-2 gap-7 sm:gap-10 lg:gap-14">
              <div className="flex flex-col order-2 w-full gap-2 px-1 text-left align-middle lg:gap-3">
                <button className="text-[15px] capitalize sm:text-[18px] text-[#7A6C65] font-[inter] font-normal p-1 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                  {blogs.length > 0 && blogs[0].blogType[0]}
                </button>
                <span className="font-[inter] font-normal text-[14px] sm:text-base w-[103px] h-[20px] text-[#7A6C65] ">
                  {blogs.length > 0 && <DateEdit date={blogs[0].createdAt} />}
                  {/* {blogs.length > 0 && new Date(blogs[0].date).getDate()} */}
                </span>
                <b className="font-[inter] text-base sm:text-lg lg:text-2xl font-semibold text-[#101828] w-full ">
                  {/* {Object.keys(superBlog).length !== 0 ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'} */}
                  {blogs.length > 0 && blogs[0].title}
                </b>
                <p className="w-full text-sm font-normal lg:text-base">
                  {/* {Object.keys(superBlog).length !== 0 ? TextLength(superBlog.description || "") : 'How do you create compelling presentations that wow your audience...'} */}
                  {blogs.length > 0 && blogs[0].blogContent.slice(0, 100)}
                  {" ... "}
                  <a
                    className="underline text-text-dev-orange hover:opacity-70"
                    href="#"
                  >
                    Read more
                  </a>
                </p>
                {/* <div className="flex items-center w-full gap-4">
                  <LazyLoadImage
                    src="/Avatar.png"
                    className="w-10 h-10 rounded-[200px]"
                    alt="authorImg"
                    height={200}
                  />
                  <span className="font-[inter] text-sm sm:text-base font-bold text-center ">
                    {blogs.length > 0 && blogs[0].author}
                  </span>
                </div> */}
              </div>

              <div className="flex justify-end order-1 w-full h-full sm:order-2">
                {blogs.length > 0 ? (
                  <LazyLoadImage
                    className="w-356px h-155px object-cover sm:w-500px sm:h-full md:w-510px rounded-[8px]"
                    src={blogs[0].blogImage}
                    alt=""
                  />
                ) : (
                  <LazyLoadImage
                    className="w-356px h-155px sm:w-500px sm:h-full md:w-510px rounded-[8px]"
                    src="/Image.png"
                    alt=""
                  />
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col md:hidden flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start">
            <div>
              <div>
                <LazyLoadImage
                  className="w-full rounded-t-lg"
                  src="/Image.png"
                  alt=""
                  height={200}
                />
              </div>
              <div className="px-3 pt-3 pb-2">
                <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                  {blogs.length > 0 && blogs[0].title}
                </span>
                <p className="mt-2 text-sm font-normal md:text-base">
                  {blogs.length > 0 && blogs[0].blogContent.slice(0, 100)}
                  {" ... "}

                  {blogs.length > 0 && (
                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href={`/blog/` + blogs[0]._id}
                    >
                      Read more
                    </a>
                  )}
                </p>

                {blogs.length > 0 && (
                  <div className="flex items-center w-full gap-4 py-3">
                    {/* <img src="/Avatar.png" alt="authorImg" />
                    <span className="text">
                      {blogs.length > 0 && blog.author}
                    </span> */}
                    <span className="textLight">
                      {<DateEdit date={blogs[0].createdAt} />}
                    </span>
                  </div>
                )}
                <div className="text-[15px] text-center flex flex-row justify-center items-center h-8 sm:text-[18px] text-[#7A6C65] font-[inter] font-normal sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                  {blogs.length > 0 && blogs[0].blogType[0]}
                </div>
              </div>
            </div>
          </div>

          <BlogsToDisplay blogs={blogs}/>
        </div>
      )}
    </div>
  );
}

export default BlogContent;
