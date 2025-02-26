import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactPage from './pages/ContactPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx';
import AboutMe from './pages/AboutMe.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorBoundary/>
   
  },
  {
    path: "/contact",
    element: <ContactPage/>,
    errorElement:<ErrorBoundary/>

   
  },
   {
    path: "/works",
    element: <ProjectPage/>,
    errorElement:<ErrorBoundary/>

   
  },
  {
    path: "/about-me",
    element: <AboutMe/>,
    errorElement:<ErrorBoundary/>

   
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
