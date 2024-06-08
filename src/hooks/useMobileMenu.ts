import { useSelector, useDispatch } from "react-redux";
import { handleMobileMenu } from "../store/layoutReducer";
import { ThemeConfigInterface } from "../configs/themeConfig";

const useMobileMenu = () => {
  const dispatch = useDispatch();
  const mobileMenu = useSelector(
    (state: ThemeConfigInterface) => state.layout.mobileMenu
  );

  // ** Toggles Mobile Menu
  const setMobileMenu = (val: any) => dispatch(handleMobileMenu(val));

  return [mobileMenu, setMobileMenu];
};

export default useMobileMenu;
