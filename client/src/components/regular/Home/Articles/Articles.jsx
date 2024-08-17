// import Cards from './data'
import "./Articles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Articles = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["home-articles"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/blog/last-five`
        );
        const articles = Array.isArray(response?.data?.blogs)
          ? response.data.blogs
          : [];
        console.log("Articles:", articles);
        return articles.slice(0, 2);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        throw error;
      }
    },
  });

  useEffect(() => {
    !isLoading && console.log(data);
  }, [isLoading, data]);
  const SliceText = (text) => {
    if (!text) return "...";

    const length = text.length;
    if (length > 65) {
      const slicedText = text.slice(0, 65);
      return slicedText + "...";
    } else {
      return text + "...";
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleReadBlogClick = () => {
    navigate("/blog");
  };
  return (
    <div className="flex flex-col items-center w-full pb-12 text-center text-black h-fit">
      <div className="lg:px-[7.5rem] md:px-12 px-4 max-w-[87.5rem] flex flex-col justify-center items-center">
        <div className="flex flex-col pt-6 pb-9">
          <span className="pb-2 text-4xl font-semibold ">Our{" "}<span className="text-text-dev-orange"> Articles</span></span>
          <span className="text-lg font-normal ">
            The latest industry news, interviews, technologies, and resources.
          </span>
        </div>

        <motion.div className="flex flex-row flex-wrap items-start justify-center w-full gap-8 pb-12 text-black">
          {
            data &&
            data.map((card) => {
              const { id, date, title, blogContent, blogImage } =
                card;
              return (
                <Link to="/" key={id} className="w-fit h-fit">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.02 }}
                    transition={{ delay: 0, duration: 0.5, type: "spring" }}
                    className="flex flex-col border border-[#D4CECB] lg:max-w-[22rem] m-auto max-w-[18rem] bg-white rounded-lg text-start"
                  >
                    <div>
                      <LazyLoadImage
                        className="w-full rounded-t-lg max-h-[197px]"
                        height={197}
                        draggable="false"
                        src={blogImage}
                        alt="image"
                      />
                    </div>
                    <div className="px-3 pt-5 pb-3">
                      <span className="text-xl font-semibold text-black ">
                        {title}
                      </span>
                      <p className="w-full pt-2 textLight">
                        {SliceText(blogContent)}{" "}
                        <a
                          className="underline underline-offset-2 text-text-dev-orange hover:opacity-80"
                          href="#"
                        >
                          Read blog
                        </a>
                      </p>

                      <div className="flex items-center w-full gap-4 pt-7">
                        {/* <img
                          src={blogImage}
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text">{author}</span> */}
                        <span className="textLight">{formatDate(date)}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })
            // :
            // Cards.map((card) => {
            //   const { id, title, desc, img, person } = card
            //   return (
            //     <Link to="/" key={id} className='w-fit h-fit'>
            //       <motion.div
            //         whileHover={{ scale: 1.05 }}
            //         whileTap={{ scale: 1.02 }}
            //         transition={{ delay: 0, duration: 0.5, type: "spring" }}
            //         className="flex flex-col border border-[#D4CECB] lg:max-w-[22rem] m-auto max-w-[18rem] bg-white rounded-lg text-start">
            //         <div>
            //           <img className='w-full rounded-t-lg' draggable="false" src={img} alt="image" />
            //         </div>
            //         <div className="px-3 pt-5 pb-3">
            //           <span className="text-xl font-semibold text-black ">
            //             {title}
            //           </span>
            //           <p className="w-full pt-2 textLight">
            //             {SliceText(desc)} <a className="underline text-text-dev-orange hover:opacity-80" href="#">Read more</a>
            //           </p>

            //           <div className="flex items-center w-full gap-4 pt-7">
            //             <img src={person.img} alt="" />
            //             <span className="text">{person.name}</span>
            //             <span className="textLight">{person.date}</span>
            //           </div>
            //         </div>
            //       </motion.div>
            //     </Link>
            //   )
            // })
          }
        </motion.div>

        {!data && (
          <div className="flex flex-col items-center pb-24">
            <img width={50} src="/bookshelf-svgrepo-com.svg" alt="" />
            <span className="pt-4 text-3xl font-semibold text-dev-black">
              No Articles Yet
            </span>
            <span className="font-semibold pt-2text-lg text-dev-black opacity-80">
              {" "}
              coming soon...
            </span>
          </div>
        )}

        {data && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ delay: 0, duration: 0.3, type: "spring" }}
            className="h-12 px-5 py-3 bg-text-dev-orange font-semibold tracking-wide rounded-lg w-fit text-[#FFF6F3]"
            onClick={handleReadBlogClick}
          >
            <a href="/blog">More Blogs</a>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Articles;
