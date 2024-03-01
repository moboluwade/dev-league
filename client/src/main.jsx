
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';
import ErrorPage from "./ErrorPage.jsx";
import About from "./pages/About/About.jsx";
// import Events from './pages/EventsPage/Events.jsx'
import Events from "./pages/Events/Events.jsx";
import EventView from "./pages/Events/EventView/EventView.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogView from "./pages/Blog/BlogView.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./components/admin/login/login.jsx";
import Event from "./components/admin/event/Event.jsx";
import AllPost from './components/admin/AllPost/AllPost';
import ManageEvent from './components/admin/event/Event';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/event-details',
        element: <EventView />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },

      {
        path: '/blog/:id',
        element: <BlogView />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/admin/login',
        element: <Login />,
      },
      {
        path: '/admin/allpost/allpost',
        element: <AllPost />,
      },
      {
        path: '/admin/event/event',
        element: <ManageEvent />,
      },
      {
        path: "/admin/events",
        element: < Event />,
      }
    ],
  },
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
