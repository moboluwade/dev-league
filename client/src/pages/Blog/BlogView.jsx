import {
    BackArrow,
    FrontArrow,
    Facebook,
    Github,
    Instagram,
    Twitter,
} from "./SVG";
import "./BlogView.css";
import { MDXProvider } from '@mdx-js/react'
import Blog from './BlogView.mdx'

import axios from 'axios'
import { useQuery } from "@tanstack/react-query";

const fetchBlog = useQuery({
    queryKey: ['fetch-blog'],
    queryFn: async()=>{
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blog/66538e02a8b69c8c46f5c90e`)
        const result = res.re
    }
})

const anime = "Hi, I am **Boluwade Folarin, a writer, a JavaScript code cruncher, and more appropriately, a Front-end Developer at CitiPadi,** and here’s a highlight of my journey so far with CitiPadi (the #1 mobility app). Let’s start with a preamble. Before joining CitiPadi I only needed to build personal projects to my specifications, to my taste and of course my understanding of similar projects. It quickly got boring, I was uncomfortable with the repetition, and I wanted more. I was itching to build. Sooner, rather than later, through Build Together HQ(@[BTHQ](https://x.com/BuildtogetherHQ) on X), I got the opportunity to become a part of an inspiring team that wanted not just to build, but to provide scalable solutions and more. CitiPadi was birthed from an idea, our idea, a solution we believed in. Now here’s why this preface was necessary, I went from working on personal projects to working with a team, and that meant becoming an integral part of daily standup meetings, and that did not come naturally to me. I dreaded them because I had to be held accountable to the team, and I had to do it right, plus you can’t really slack off with our [Team Lead/Lead Product Manager Ola](https://medium.com/@mailolamakanjuola) at the helm of things. With time, standup meetings went from being accountability meetings I dreaded, to becoming brainstorming sessions I was thrilled to be a part of. Especially with a team of amazing product managers, product designers and software engineers passionate about their work, I found the drive to put in the work. Cos evidence gats dey! You get. Citipadi’s standup meetings started taking shape, we were solving problems, thinking, and brainstorming, we were building a solution after all, and of course, we need to do at least that much to be your #1 one-stop mobility solution."

const BlogView = () => {
    return (
        <MDXProvider>
            <div className="w-full px-[9rem] h-fit editor">
                <Blog anime={anime}/>
            </div>
        </MDXProvider>
    );
};

export default BlogView;
