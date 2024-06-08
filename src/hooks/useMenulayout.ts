import { useSelector, useDispatch } from "react-redux";
import { handleType } from "../store/layoutReducer";
import { ThemeConfigInterface } from "../configs/themeConfig";

const useMenuLayout = () => {
  const dispatch = useDispatch();
  const menuType = useSelector(
    (state: ThemeConfigInterface) => state.layout.type
  );

  const setMenuLayout = (value: any) => {
    dispatch(handleType(value));
  };

  return [menuType, setMenuLayout];
};

export default useMenuLayout;
