import { useSelector, useDispatch } from "react-redux";
import { handleSidebarCollapsed } from "../store/layoutReducer";
import { ThemeConfigInterface } from "../configs/themeConfig";

const useSidebar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector(
    (state: ThemeConfigInterface) => state.layout?.menu?.isCollapsed || false
  );

  // ** Toggles Menu Collapsed
  const setMenuCollapsed = (val: any) => dispatch(handleSidebarCollapsed(val));

  return [collapsed, setMenuCollapsed];
};

export default useSidebar;
