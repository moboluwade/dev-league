import BlogHero from "./BlogHero";
import "./Blog.css";
import BlogContent from "./BlogContent/BlogContent";

const Blog = (props) => {
  return (
    <div>
      <BlogHero/>
      <BlogContent />
    </div>
  );
};
export default Blog;
