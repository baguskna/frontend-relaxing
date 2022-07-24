import React from "react";
import { Link } from "react-router-dom";

import "./breadcrumb.scss";

type TBreadcrumbProps = {
  path: string;
};

const Breadcrumb: React.FC<TBreadcrumbProps> = ({ path }) => {
  const paths = path.split("/");

  const breadcrumb = paths.map((path: string, index) => {
    return (
      index !== 0 && (
        <>
          <span className="breadcrumb__separator text-xs font-normal leading-[15px] pl-[4px]">
            /
          </span>
          <Link
            key={index}
            to={`${paths.slice(0, index + 1).join("/")}`}
            className={
              `text-xs font-normal leading-[15px] pl-[4px] capitalize` +
              (index === paths.length - 1
                ? " breadcrumb__active-text"
                : " breadcrumb__inactive-text")
            }
          >
            {path}
          </Link>
        </>
      )
    );
  });

  return (
    <div className="breadcrumb flex items-center">
      <div className="breadcrumb__first-tier flex">
        <Link
          to="/"
          className="text-xs font-normal leading-[15px] breadcrumb__inactive-text"
        >
          Beranda
        </Link>
        {breadcrumb}
      </div>
    </div>
  );
};

export default Breadcrumb;
