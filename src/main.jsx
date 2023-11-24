import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import About from './pages/About/About.jsx'
import Events from './pages/Events/Events.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Shop from './pages/Shop/Shop.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
