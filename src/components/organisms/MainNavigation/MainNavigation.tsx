import React from "react";
import { Link } from "react-router";
import "./MainNavigationStyles.scss";
import { useLocation } from "react-router";
import { COCKTAILS_KEYS } from "@/consts";

const MainNavigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };
  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <aside className="main-navigation">
      <nav className="main-navigation__nav">
        <ul className="main-navigation__nav-list">
          {COCKTAILS_KEYS.map((key) => (
            <li key={key} className="main-navigation__nav-item">
              <Link
                className={`main-navigation__link ${
                  isActive(`/${key}`) ? "main-navigation__link--active" : ""
                }`}
                to={`/${key}`}
              >
                {capitalizeFirstLetter(key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MainNavigation;
