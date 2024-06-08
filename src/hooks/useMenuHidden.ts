import { useSelector, useDispatch } from "react-redux";
import { handleMenuHidden } from "../store/layoutReducer";
import { ThemeConfigInterface } from "../configs/themeConfig";

const useMenuHidden = () => {
  const dispatch = useDispatch();
  const menuHidden = useSelector(
    (state: ThemeConfigInterface) => state.layout?.menu?.isHidden || false
  );

  // @ts-ignore
  const setMenuHidden = (value) => {
    dispatch(handleMenuHidden(value));
  };

  return [menuHidden, setMenuHidden];
};

export default useMenuHidden;
