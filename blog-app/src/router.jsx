import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "@/pages/auth/Login";
import SignupPage from "@/pages/auth/Signup";
import Layout from "./Layout";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/foryou",
//         element: <>foryou</>,
//       },
//       {
//         path: "/following",
//         element: <>folowing</>,
//       },
//       {
//         path: "/ai",
//         element: <>AI</>,
//       },
//       {
//         path: "/programming",
//         element: <>programming</>,
//       },
//       {
//         path: "/mernstack",
//         element: <>MERN STACK</>,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/signup",
//     element: <SignupPage />,
//   },
// ]);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="foryou" element={<>foryou</>}></Route>
        <Route path="following" element={<>folowing</>}></Route>
        <Route path="ai" element={<>ai</>}></Route>
        <Route path="programming" element={<>programming</>}></Route>
        <Route path="mernstack" element={<>mernstack</>}></Route>
      </Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </>
  )
);
