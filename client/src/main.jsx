import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ErrorPage from "./ErrorPage.jsx";
import About from "./pages/About/About.jsx";
// import Events from './pages/EventsPage/Events.jsx'
import Events from "./pages/Events/Events.jsx";
import EventView from "./pages/Events/EventView/EventView.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogView from "./pages/Blog/BlogView.jsx";
// import Shop from "./pages/Shop/Shop.jsx";
import Home from "./pages/Home/Home.jsx";

import Login from "./pages/admin/login/login.jsx";
import AllPost from "./pages/admin/AllPost/AllPost";
import Admin from "./pages/admin/Admin.jsx";
import CreateBlog from "./pages/admin/CreateBlog/CreateBlog.jsx";
import CreateEvent from "./pages/admin/CreateEvent/CreateEvent.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Signup from "./pages/Signup/Signup.jsx";
import Profile from "./pages/admin/Profile/Profile.jsx";
import ManageBlog from "./pages/admin/ManageBlog/ManageBlog.jsx";
import ManageEvent from "./pages/admin/ManageEvent/ManageEvent.jsx";
import EditBlog from "./pages/admin/EditBlog/EditBlog.jsx";
import EditEvent from "./pages/admin/EditEvent/EditEvent.jsx";
import ManageAdmin from "./pages/admin/ManageAdmin/ManageAdmin.jsx";
import NewsletterSubscribers from "./pages/admin/NewsletterSubscribers/NewsletterSubscribers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:eventId",
        element: <EventView />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/blog/:blogId",
        element: <BlogView />,
      },
      // {
      //   path: '/shop',
      //   element: <Shop />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "subscribers",
        element: <AllPost />,
      },
      {
        path: "create/blog",
        element: <CreateBlog />,
      },
      {
        path: "create/event",
        element: <CreateEvent />,
      },
      {
        path: "manage/profile",
        element: <Profile />,
      },
      {
        path: "manage/blog",
        element: <ManageBlog />,
      },
      {
        path: "manage/blog/:id",
        element: <EditBlog />,
      },
      {
        path: "manage/event",
        element: <ManageEvent />,
      },
      {
        path: "manage/event/:id",
        element: <EditEvent />,
      },
      {
        path: "manage/permissions",
        element: <ManageAdmin />,
      },
      {
        path: "manage/subscribers",
        element: <NewsletterSubscribers />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
