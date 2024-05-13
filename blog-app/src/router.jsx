import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import LoginPage from "@/pages/Login";
import { SignupPage } from "@/pages/Signup";
import { DashboardPage } from "@/pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: "welcome",
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);
