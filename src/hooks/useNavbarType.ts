import { useSelector, useDispatch } from "react-redux";
import { handleNavBarType } from "../store/layoutReducer";
import { ThemeConfigInterface } from "../configs/themeConfig";

const useNavbarType = () => {
  const dispatch = useDispatch();
  const navbarType = useSelector(
    (state: ThemeConfigInterface) => state.layout.navBarType
  );
  // @ts-ignore
  const setNavbarType = (val) => dispatch(handleNavBarType(val));
  return [navbarType, setNavbarType];
};

export default useNavbarType;
