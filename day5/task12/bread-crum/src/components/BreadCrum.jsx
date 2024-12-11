import React from "react";
import { Link, useLocation } from "react-router-dom";

export const BreadCrum = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);
  return (
    <nav aria-label="breadcrumb" className="bg-light py-2 px-3 shadow-sm rounded">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none text-primary">
            Home
          </Link>
        </li>
        {pathnames.map((path, index) => {
          console.log(path,"path")
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          console.log(routeTo,"route to")
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li
              key={index}
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#6c757d" }}
            >
              {
               decodeURIComponent(path)
              }
                 
            </li>
          ) : (
            <li key={index} className="breadcrumb-item">
              <Link to={routeTo} className="text-decoration-none text-primary">
                {decodeURIComponent(path)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
