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

const BlogView = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['fetch-blog'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blog/66538e02a8b69c8c46f5c90e`)
            const blogResponse = response.data
            const blog = blogResponse.blog
            return blog
        }
    })

    if(isLoading){
        return(
            <Loader/>
        )
    }


    return (
            <div className="w-full px-[9rem] h-fit editor blogview">
                <header className="blogview__header">
                    <div>
                        <button className="navigation__button">
                            <BackArrow />
                            <p>Blog</p>
                        </button>
                    </div>
                    <div>
                        <a href="">
                            <Twitter />
                        </a>
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
                <main className="blogview__main">
                    <span>Article</span>
                    <h1>The Impact of DevOps on SoftWare Development and Deployment</h1>
                    <div className="post-details">
                        <div className="avatar">
                            <img src="/Avatar.png" />
                            <p className="author">Qawi</p>
                        </div>
                        <div className="post-status">
                            <p className="status">Published</p>
                            <p className="date">01 June 2023</p>
                        </div>
                    </div>
                    <div className="post">
                        {/* <img src="/post2.png" /> */}
                        {data && <img className="" src={data.blogImage} />}
                        <Markdown>
                            {data && data.blogContent}
                        </Markdown>
                    </div>
                </main>

            </div>
    );
};



export default BlogView;
