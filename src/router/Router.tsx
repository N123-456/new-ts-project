import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/loginfolder/Login";
import Signup from "../pages/signupfolder/Signup";
import Notification from "../pages/notification/Notification";
import { BasicAppShell } from "../pages/appshell/Applayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import BasicTable from "../pages/billing/BasicTable";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Login />,
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "/notification",
    element: <BasicAppShell />,
    children:[
      {
        index:true,
        element:<Notification/>
      }
    ],
  },
  {
    path: "/billing",
    element: <BasicAppShell />,
    children:[
      {
        index:true,
        element:<BasicTable/>
      
      }
    ]
  },
]);
