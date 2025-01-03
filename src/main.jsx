import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ProjectPage from './pages/projectPage.jsx';


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
   
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
