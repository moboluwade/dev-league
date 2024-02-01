import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import About from './pages/About/About.jsx'
import Events from './pages/Events/Events'
import AllPost from './components/admin/AllPost/AllPost'
import ManageEvent from './components/admin/event/Event'
import EventView from './pages/Events/EventView/EventView'
import Blog from './pages/Blog/Blog.jsx'
import BlogView from './pages/Blog/BlogView.jsx'
import Shop from './pages/Shop/Shop.jsx'
import Home from './pages/Home/Home.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'

import Login from './components/admin/login/login'

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
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
