import {
    BackArrow,
    // FrontArrow,
    Facebook,
    Github,
    Instagram,
    Twitter,
} from "./SVG";
import "./BlogView.css";
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
import Markdown from 'react-markdown'
import { Loader } from "../../components/Loader";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BlogView = () => {
    const [publishDate, setPublishDate] = useState(null);
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const pathParts = location.pathname.split('/'); // Split the pathname by '/'
    const blogId = pathParts.length === 3 && pathParts[1] === 'blog' ? pathParts[2] : null;

    useEffect(() => {
        // console.log(blogId.get(blogId.get(blogId.get())))
        console.log(blogId)
        console.log(location.pathname)
    }, [blogId, location])


    const { data, isLoading } = useQuery({
        queryKey: ['fetch-blog'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blog/${blogId}`)
            const blogResponse = response.data
            const blog = blogResponse.blog
            return blog
        },
        enabled: !!blogId
    }
    )

    useMemo(() => {
        return data && setPublishDate(new Date(data.createdAt));
    }, [data])

    useEffect(() => {
        data && console.log(data)
    }, [data])

    if (isLoading) {
        return (
            <Loader />
        )
    }

    const getMonthName = (date) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[date.getMonth()];
    };




    return (
        <div className="w-full px-[9rem] h-fit editor blogview">
            <div className="max-w-[1024px]">
                <header className="blogview__header">
                    <div>
                        <button className="navigation__button">
                            <BackArrow />
                            <p>Blog</p>
                        </button>
                    </div>
                    <div>
                        <div className="w-4 h-4">
                            <a href="">
                                <Twitter />
                            </a>

                        </div>
                        <a href="">
                            <Instagram />
                        </a>
                        <a href="">
                            <Facebook />
                        </a>
                        <a href="">
                            <Github />
                        </a>
                    </div>
                </header>
                <main className="pt-4 blogview__main">
                    <div className="flex flex-row gap-2 px-8">

                        {data && data.blogType.map((type, index) => (
                            <span className="capitalize blog__type" key={index}>{type}</span>
                        ))}
                    </div>
                    <h1>{data && data.title}</h1>
                    <div className="post-details">
                        {data &&
                            <div className="avatar">
                                <img src="/Avatar.png" />
                                <p className="author">{data && data.author}</p>
                            </div>
                        }
                        {
                            publishDate &&
                            <div className="post-status">
                                <p className="status">Published</p>
                                <div className="flex flex-row gap-1">
                                    <p className="date">{publishDate.getDate()}</p>
                                    <p className="date">{getMonthName(publishDate)}</p>
                                    <p className="date">{publishDate.getFullYear()}</p>
                                </div>
                            </div>
                        }
                    </div>
                    {data &&
                        <div className="flex flex-col items-center justify-start break-words whitespace-pre-wrap post">
                            {/* <img src="/post2.png" /> */}
                            <img className="object-cover w-full h-full pb-0" src={data.blogImage} />
                            <span className="pb-4 text-text-dev-faded-base">*attribution text</span>
                            <div className="max-w-[768px]">
                                <Markdown>
                                    {data && data.blogContent}
                                </Markdown>
                            </div>
                        </div>
                    }
                </main>
            </div>
        </div>

    );
};



export default BlogView;
