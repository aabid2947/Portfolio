import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactPage from './pages/ContactPage.jsx'
import ProjectPage from './pages/projectPage.jsx';
import AboutMe from './pages/AboutMe.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
   
  },
  {
    path: "/contact",
    element: <ContactPage/>,
   
  },
   {
    path: "/works",
    element: <ProjectPage/>,
   
  },
  {
    path: "/about-me",
    element: <AboutMe/>,
   
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
