// package
import { Link } from "react-router-dom";
// layer
import Home from "@/shared/asset/home.svg?react";
import Random from "@/shared/asset/random.svg?react";
import Theme from "@/shared/asset/theme.svg?react";
import { path } from "@/shared/consts/paths";

const MenuList = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Link
        to="/"
        className="tw:flex tw:justify-center tw:items-center tw:p-3 tw:gap-3 tw:group tw:cursor-pointer"
      >
        <Home className="tw:w-5 tw:h-5 tw:fill-service-gray tw:group-hover:fill-service-secondary" />
        <span className="tw:min-w-15 tw:text-center tw:group-hover:text-service-secondary tw:c-text-theme-base tw:text-base tw:font-medium">
          소개
        </span>
      </Link>

      <Link
        to={`/${path.random}`}
        className="tw:flex tw:justify-center tw:gap-3 tw:p-3 tw:group tw:cursor-pointer"
      >
        <Random className="tw:w-5 tw:h-5 tw:fill-service-gray tw:group-hover:fill-service-secondary" />
        <span className="tw:min-w-15 tw:text-center tw:group-hover:text-service-secondary tw:c-text-theme-base tw:text-base tw:font-medium">
          랜덤채팅
        </span>
      </Link>

      <button
        className="tw:flex tw:justify-center tw:gap-3 tw:p-3 tw:group tw:cursor-pointer"
        onClick={toggleTheme}
      >
        <Theme className="tw:w-5 tw:h-5 tw:fill-service-gray tw:group-hover:fill-service-secondary" />
        <span className="tw:min-w-15 tw:text-center tw:group-hover:text-service-secondary tw:c-text-theme-base tw:text-base tw:font-medium">
          테마변경
        </span>
      </button>
    </>
  );
};

export { MenuList };
