import React from "react";
import useDarkmode from "../../../hooks/useDarkMode";
import { Link } from "react-router-dom";
import useWidth from "../../../hooks/useWidth";

const Logo = () => {
  const [isDark] = useDarkmode();
  const { width, breakpoints } = useWidth();

  return (
    <div>
      <Link to="/analytics">
        <React.Fragment>
          {width >= breakpoints.xl ? (
            <img
              src={
                isDark
                  ? "/assets/images/logo/logo-white.svg"
                  : "/assets/images/logo/logo.svg"
              }
              alt=""
            />
          ) : (
            <img
              src={
                isDark
                  ? "/assets/images/logo/logo-c-white.svg"
                  : "/assets/images/logo/logo-c.svg"
              }
              alt=""
            />
          )}
        </React.Fragment>
      </Link>
    </div>
  );
};

export default Logo;
