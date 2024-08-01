import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react'

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const { data } = useQuery({
    queryKey: ['fetch blogs'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blog`)
      const response = res.data
      const blogArray = response.blogs
      return blogArray
    }
  })

  useEffect(() => {
    data && console.log(data[0])
    data && setBlogs(data)
  }, [data])

  return (
    <div className="flex flex-col w-full h-full px-4 pt-20 md:pt-0 items-left md:pl-8 md:pb-28 bg-text-dev-light-orange">
      <span className="fixed w-full pt-4 pb-4 text-4xl font-bold md:pt-6 bg-text-dev-light-orange">Blogs</span>
      <div className="grid h-full grid-cols-1 gap-10 pt-24 sm:grid-cols-2 xl:grid-cols-3">
        {blogs.length > 0 && blogs.map(blog => (
          <div
            key={blog.id}
            className="flex flex-col flex-grow border border-[#D4CECB] m-auto bg-white rounded-lg text-start"
          >
            <div>
              <div>
                {blogs.length > 0 ?
                  <img
                    className="w-full rounded-t-lg"
                    src={blog.blogImage}
                    alt=""
                  />
                  :
                  <img
                    className="w-full rounded-t-lg"
                    src="/Image.png"
                    alt=""
                  />
                }
              </div>
              <div className="px-3 pt-3 pb-2">
                <span className="font-[inter] text-lg sm:text-lg font-bold text-[#101828]">
                  {blogs.length > 0 && blog.title}

                </span>
                <p className="relative mt-2 text-sm font-normal md:text-base">
                  {blogs.length > 0 && blog.blogContent.slice(0, 100)}
                  {" ... "}

                  <a
                    className="absolute right-0 flex flex-row items-center justify-center w-6 h-6 text-white rounded-lg -top-9 hover:opacity-70 bg-text-dev-orange"
                    href={`/admin/manage/blog/` + blog._id}
                  >
                    +
                  </a>
                </p>

                <div className="flex items-center w-full gap-4 py-3">
                  <img src="/Avatar.png" alt="authorImg" />
                  <span className="text">
                    {blogs.length > 0 && blog.author}
                  </span>
                  <span className="textLight"> 01 June 2023</span>
                </div>
                <div className="text-[15px] sm:text-[18px] text-[#7A6C65] font-[inter] font-normal px-2 py-0 sm:p-[12px] border-[0.5px] max-w-[73px] rounded-[8px] ">
                  {blogs.length > 0 && blog.blogType[0]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageBlog