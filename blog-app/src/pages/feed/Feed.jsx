import { Link, NavLink } from "react-router-dom";
import { BadgePlus } from "lucide-react";
import Post from "@/components/header/Post";

const FeedPage = () => {
  return (
    <>
      <div className="h-screen w-1/2 ml-60 mt-3">
        <nav className=" bg-white z-999 sticky top-0 flex items-center h-10 mb-3 py-6 p-4 border-b-2   flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            <BadgePlus className="ml-2 -mr-3  h-4 w-4" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` transition-colors hover:text-foreground text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            For You
          </NavLink>
          <NavLink
            to="/following"
            className={({ isActive }) =>
              `  transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              } `
            }
          >
            Following
          </NavLink>
          <NavLink
            to="/ai"
            className={({ isActive }) =>
              `  transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              } `
            }
          >
            AI
          </NavLink>
          <NavLink
            to="/programming"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }  hover:text-foreground`
            }
          >
            Programming
          </NavLink>
          <NavLink
            to="/mernstack"
            className={({ isActive }) =>
              `  transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              } `
            }
          >
            MERN Stack
          </NavLink>
        </nav>
        <div className="w-full h-screen p-3">
          <Post />
        </div>
      </div>
    </>
  );
};

export default FeedPage;
