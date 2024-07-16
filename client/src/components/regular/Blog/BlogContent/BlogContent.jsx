import { useQuery } from "@tanstack/react-query";
import BlogData from "./BlogData";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate'
import './blogContent.css'

const BlogsToDisplay = ({ currentPage, superBlog }) => {

  return (
    <div className="flex flex-col w-full gap-8 px-4">

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <div
              className="flex flex-col flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start"
            >
              <div>
                <div>
                  <img
                    className="w-full rounded-t-lg"
                    src="/Image.png"
                    alt="image"
                  />
                </div>
                <div className="px-3 pt-3 pb-2">
                  <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                    {Object.keys(superBlog).length !== 0 ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'}
                  </span>
                  <p className="mt-2 text-sm font-normal md:text-base">
                    {Object.keys(superBlog).length !== 0 ? TextLength(superBlog.description || "") : 'How do you create compelling presentations that wow your audience...'}
                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href="#"
                    >
                      Read more
                    </a>
                  </p>

                  <div className="flex items-center w-full gap-4 py-3">
                    <img src="/Avatar.png" alt="authorImg" />
                    <span className="text">{"bolu"}</span>
                    <span className="textLight"> {Object.keys(superBlog).length !== 0 ? superBlog.date : ' 01 June 2023'}</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal px-2 py-0 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                    {Object.keys(superBlog).length !== 0 ? superBlog.blogType : 'Article'}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start"
            >
              <div>
                <div>
                  <img
                    className="w-full rounded-t-lg"
                    src="/Image.png"
                    alt="image"
                  />
                </div>
                <div className="px-3 pt-3 pb-2">
                  <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                    {Object.keys(superBlog).length !== 0 ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'}
                  </span>
                  <p className="mt-2 text-sm font-normal md:text-base">
                    {Object.keys(superBlog).length !== 0 ? TextLength(superBlog.description || "") : 'How do you create compelling presentations that wow your audience...'}
                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href="#"
                    >
                      Read more
                    </a>
                  </p>

                  <div className="flex items-center w-full gap-4 py-3">
                    <img src="/Avatar.png" alt="authorImg" />
                    <span className="text">{"bolu"}</span>
                    <span className="textLight"> {Object.keys(superBlog).length !== 0 ? superBlog.date : ' 01 June 2023'}</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal px-2 py-0 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                    {Object.keys(superBlog).length !== 0 ? superBlog.blogType : 'Article'}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start"
            >
              <div>
                <div>
                  <img
                    className="w-full rounded-t-lg"
                    src="/Image.png"
                    alt="image"
                  />
                </div>
                <div className="px-3 pt-3 pb-2">
                  <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                    {Object.keys(superBlog).length !== 0 ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'}
                  </span>
                  <p className="mt-2 text-sm font-normal md:text-base">
                    {Object.keys(superBlog).length !== 0 ? TextLength(superBlog.description || "") : 'How do you create compelling presentations that wow your audience...'}
                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href="#"
                    >
                      Read more
                    </a>
                  </p>

                  <div className="flex items-center w-full gap-4 py-3">
                    <img src="/Avatar.png" alt="authorImg" />
                    <span className="text">{"bolu"}</span>
                    <span className="textLight"> {Object.keys(superBlog).length !== 0 ? superBlog.date : ' 01 June 2023'}</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal px-2 py-0 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                    {Object.keys(superBlog).length !== 0 ? superBlog.blogType : 'Article'}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start"
            >
              <div>
                <div>
                  <img
                    className="w-full rounded-t-lg"
                    src="/Image.png"
                    alt="image"
                  />
                </div>
                <div className="px-3 pt-3 pb-2">
                  <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                    {Object.keys(superBlog).length !== 0 ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'}
                  </span>
                  <p className="mt-2 text-sm font-normal md:text-base">
                    {Object.keys(superBlog).length !== 0 ? TextLength(superBlog.description || "") : 'How do you create compelling presentations that wow your audience...'}
                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href="#"
                    >
                      Read more
                    </a>
                  </p>

                  <div className="flex items-center w-full gap-4 py-3">
                    <img src="/Avatar.png" alt="authorImg" />
                    <span className="text">{"bolu"}</span>
                    <span className="textLight"> {Object.keys(superBlog).length !== 0 ? superBlog.date : ' 01 June 2023'}</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal px-2 py-0 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                    {Object.keys(superBlog).length !== 0 ? superBlog.blogType : 'Article'}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start"
            >
              <div>
                <div>
                  <img
                    className="w-full rounded-t-lg"
                    src="/Image.png"
                    alt="image"
                  />
                </div>
                <div className="px-3 pt-3 pb-2">
                  <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                    {Object.keys(superBlog).length !== 0 ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'}
                  </span>
                  <p className="mt-2 text-sm font-normal md:text-base">
                    {Object.keys(superBlog).length !== 0 ? TextLength(superBlog.description || "") : 'How do you create compelling presentations that wow your audience...'}
                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href="#"
                    >
                      Read more
                    </a>
                  </p>

                  <div className="flex items-center w-full gap-4 py-3">
                    <img src="/Avatar.png" alt="authorImg" />
                    <span className="text">{"bolu"}</span>
                    <span className="textLight"> {Object.keys(superBlog).length !== 0 ? superBlog.date : ' 01 June 2023'}</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal px-2 py-0 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                    {Object.keys(superBlog).length !== 0 ? superBlog.blogType : 'Article'}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start"
            >
              <div>
                <div>
                  <img
                    className="w-full rounded-t-lg"
                    src="/Image.png"
                    alt="image"
                  />
                </div>
                <div className="px-3 pt-3 pb-2">
                  <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                    {Object.keys(superBlog).length !== 0 ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'}
                  </span>
                  <p className="mt-2 text-sm font-normal md:text-base">
                    {Object.keys(superBlog).length !== 0 ? TextLength(superBlog.description || "") : 'How do you create compelling presentations that wow your audience...'}
                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href="#"
                    >
                      Read more
                    </a>
                  </p>

                  <div className="flex items-center w-full gap-4 py-3">
                    <img src="/Avatar.png" alt="authorImg" />
                    <span className="text">{"bolu"}</span>
                    <span className="textLight"> {Object.keys(superBlog).length !== 0 ? superBlog.date : ' 01 June 2023'}</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal px-2 py-0 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                    {Object.keys(superBlog).length !== 0 ? superBlog.blogType : 'Article'}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start"
            >
              <div>
                <div>
                  <img
                    className="w-full rounded-t-lg"
                    src="/Image.png"
                    alt="image"
                  />
                </div>
                <div className="px-3 pt-3 pb-2">
                  <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                    {Object.keys(superBlog).length !== 0 ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'}
                  </span>
                  <p className="mt-2 text-sm font-normal md:text-base">
                    {Object.keys(superBlog).length !== 0 ? TextLength(superBlog.description || "") : 'How do you create compelling presentations that wow your audience...'}
                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href="#"
                    >
                      Read more
                    </a>
                  </p>

                  <div className="flex items-center w-full gap-4 py-3">
                    <img src="/Avatar.png" alt="authorImg" />
                    <span className="text">{"bolu"}</span>
                    <span className="textLight"> {Object.keys(superBlog).length !== 0 ? superBlog.date : ' 01 June 2023'}</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal px-2 py-0 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                    {Object.keys(superBlog).length !== 0 ? superBlog.blogType : 'Article'}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start"
            >
              <div>
                <div>
                  <img
                    className="w-full rounded-t-lg"
                    src="/Image.png"
                    alt="image"
                  />
                </div>
                <div className="px-3 pt-3 pb-2">
                  <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                    {Object.keys(superBlog).length !== 0 ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'}
                  </span>
                  <p className="mt-2 text-sm font-normal md:text-base">
                    {Object.keys(superBlog).length !== 0 ? TextLength(superBlog.description || "") : 'How do you create compelling presentations that wow your audience...'}
                    <a
                      className="underline text-text-dev-orange hover:opacity-70"
                      href="#"
                    >
                      Read more
                    </a>
                  </p>

                  <div className="flex items-center w-full gap-4 py-3">
                    <img src="/Avatar.png" alt="authorImg" />
                    <span className="text">{"bolu"}</span>
                    <span className="textLight"> {Object.keys(superBlog).length !== 0 ? superBlog.date : ' 01 June 2023'}</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal px-2 py-0 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                    {Object.keys(superBlog).length !== 0 ? superBlog.blogType : 'Article'}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div >
  )
}





function BlogContent({ displayType }) {
  // holds the data fetch from the backend
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);


  const { data } = useQuery({
    queryKey: ['fetch blogs'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blog`)
      const response = res.data
      return response
    }
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // store number of pages
  const [pagination, setPagination] = useState([1, 2, 3, 4])
  const [superBlog, setSuperBlog] = useState({})


  return (
    <div className="flex flex-col items-center justify-center overflow-hidden h-fit lg:h-fit ">
      <div className="flex flex-col gap-[50px] py-[4.5rem] lg:px-[7rem] md:px-12 px-4 max-w-[87.5rem] justify-center items-center">

        {/* blogs */}
        <div className="grid sm:grid-cols-2 gap-7 sm:gap-10 lg:gap-14">
          <div className="flex flex-col order-2 w-full gap-2 text-left align-middle lg:gap-3">
            <button className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal p-2 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
              {Object.keys(superBlog).length !== 0 ? superBlog.blogType : 'Article'}
            </button>
            <span className="font-[inter] font-normal text-[14px] sm:text-base w-[103px] h-[20px] text-[#7A6C65] ">
              {Object.keys(superBlog).length !== 0 ? superBlog.date : ' 01 June 2023'}
            </span>
            <b className="font-[inter] text-base sm:text-lg lg:text-2xl font-semibold text-[#101828] w-full ">
              {Object.keys(superBlog).length !== 0 ? superBlog.title : ' The Impact of DevOps on Software Development and Deployment'}
            </b>
            <p className="w-full text-sm font-normal lg:text-base">
              {Object.keys(superBlog).length !== 0 ? TextLength(superBlog.description || "") : 'How do you create compelling presentations that wow your audience...'}
              {" "}
              <a
                className="underline text-text-dev-orange hover:opacity-70"
                href="#"
              >
                Read more
              </a>
            </p>
            <div className="flex items-center w-full gap-4">
              <img
                src="/Avatar.png"
                className="w-10 h-10 rounded-[200px]"
                alt="authorImg"
              />
              <span className="font-[inter] text-sm sm:text-base font-bold text-center ">
                {Object.keys(superBlog).length !== 0 ? superBlog.blogAuthor : ' Qawi'}
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
        <BlogsToDisplay superBlog={superBlog} currentPage={currentPage} />

        {/* pagination */}
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount ?? 10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    </div >
  );
}

export default BlogContent;

