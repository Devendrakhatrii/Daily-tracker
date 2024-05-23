import Navbar from "./components/header/Navbar";
import { Outlet } from "react-router-dom";
import FeedPage from "./pages/feed/Feed";
import Post from "./components/post/Post";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className=" flex min-h-fit">
        <FeedPage />
        <div className=" h-screen w-2/5 border-x-2"></div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
