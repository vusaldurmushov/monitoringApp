import notFoundImage from "../assets/404.svg";
import { Link } from "react-router-dom";

function NotFound() {
  const accessDenied = false;

  return (
    <div className="min-h-screen flex items-center justify-center flex-col  overflow-hidden">
      <img
        src={notFoundImage}
        alt="Not Found"
        className="max-w-xs md:max-w-md w-full h-auto"
      />
      <h1 className="text-[80px] text-[var(--secondary-text)] font-semibold">
        404
      </h1>
      <p className="text-[21px] font-medium">
        {accessDenied ? "Access Denied" : "Page Not Found"}
      </p>
      <p className="text-[var(--secondary-text)] font-semibold py-[10px]">
        {accessDenied
          ? "You are not allowed to do this"
          : "Oooops!! The page you were looking for doesn't exist."}
      </p>
      <Link
        to={"/"}
        className=" text-white bg-[var(--secondary)] hover:bg-[var(--secondary-hover)] p-2 rounded-[5px]"
      >
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;
