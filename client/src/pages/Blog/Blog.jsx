import BlogHero from "../../components/regular/Blog/BlogHero";
import BlogContent from "../../components/regular/Blog/BlogContent/BlogContent";
import "./Blog.css";
import { useState } from "react";

const Blog = () => {
  const [displayType, setDisplayType] = useState('all')

  const filterCards = (type) => {
    console.log(type)
    setDisplayType(type)
  }

  return (
    <div>
      <BlogHero displayType={displayType} setDisplayType={setDisplayType} filterCards={filterCards} />
      <BlogContent displayType={displayType} />
    </div>
  );
};
export default Blog;
