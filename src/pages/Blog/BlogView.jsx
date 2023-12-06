import { Fragment } from "react";
import {
  BackArrow,
  FrontArrow,
  Facebook,
  Github,
  Instagram,
  Twitter,
} from "./SVG";
import Avatar from "../../../public/Avatar.png";
import image1 from "../../../public/post2.png";
import image2 from "../../../public/post1.jpeg";
import "./BlogView.css";

const BlogView = () => {
  return (
    <div className="blogview">
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
            <img src={Avatar} />
            <p className="author">Qawi</p>
          </div>
          <div className="post-status">
            <p className="status">Published</p>
            <p className="date">01 June 2023</p>
          </div>
        </div>
        <div className="post">
          <img src={image1} />
          <p>
            You never get a second chance at a first impression. For firms
            within private markets, this first impression is their data room: a
            portal where prospective investors can learn more about the firm,
            its investment thesis, and review past returns. Currently, investors
            must navigate confusing data rooms and juggle logins for various
            platforms throughout their engagement with the fund (i.e., data
            room, onboarding system, investor portal). Funds waste time
            duplicating data rooms to get specific user-level analytics, and
            have little visibility into engagement and investor satisfaction.
            Today, we’re launching Data Room to help firms provide their
            investors with the best client experience. With a modern design,
            advanced analytics, and integrations into our investor onboarding
            and portal systems, AngelList Data Room helps firms make their first
            impression their best impression. This means firms can spend less
            time selling and more time investing.
          </p>
          <img src={image2} />
          <p>
            You never get a second chance at a first impression. For firms
            within private markets, this first impression is their data room: a
            portal where prospective investors can learn more about the firm,
            its investment thesis, and review past returns. Currently, investors
            must navigate confusing data rooms and juggle logins for various
            platforms throughout their engagement with the fund (i.e., data
            room, onboarding system, investor portal). Funds waste time
            duplicating data rooms to get specific user-level analytics, and
            have little visibility into engagement and investor satisfaction.
            Today, we’re launching AngelList Data Room to help firms provide
            their investors with the best client experience. With a modern
            design, advanced analytics, and integrations into our investor
            onboarding and portal systems, AngelList Data Room helps firms make
            their first impression their best impression. This means firms can
            spend less time selling and more time investing.
          </p>
          <h2>You never get a second chance at a first impression.</h2>
          <p>
            For firms within private markets, this first impression is their
            data room: a portal where prospective investors can learn more about
            the firm, its investment thesis, and review past returns. Currently,
            investors must navigate confusing data rooms and juggle logins for
            various platforms throughout their engagement with the fund (i.e.,
            data room, onboarding system, investor portal). Funds waste time
            duplicating data rooms to get specific user-level analytics, and
            have little visibility into engagement and investor satisfaction.
            Today, we’re launching AngelList Data Room to help firms provide
            their investors with the best client experience. With a modern
            design, advanced analytics, and integrations into our investor
            onboarding and portal systems, AngelList Data Room helps firms make
            their first impression their best impression. This means firms can
            spend less time selling and more time investing.
          </p>
        </div>
      </main>
      <div className="post__navigation">
        <button className="navigation__button">
          <BackArrow />
          <p>Previous article</p>
        </button>

        <button className="navigation__button">
          <p>Next article</p>
          <FrontArrow />
        </button>
      </div>
    </div>
  );
};

export default BlogView;
