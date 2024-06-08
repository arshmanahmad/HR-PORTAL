import MainLogo from "@/assets/images/logo/logo.svg";
import LogoWhite from "@/assets/images/logo/logo-white.svg";
import useDarkmode from "../../../hooks/useDarkMode";
import { Link } from "react-router-dom";
const MobileLogo = () => {
  const [isDark] = useDarkmode();
  return (
    <Link to="/analytics">
      <img src={isDark ? LogoWhite : MainLogo} alt="" />
    </Link>
  );
};

export default MobileLogo;
