import { useSelector, useDispatch } from "react-redux";
import { handleContentWidth } from "../store/layoutReducer";
import { ThemeConfigInterface } from "../configs/themeConfig";

const useContentWidth = () => {
  const dispatch = useDispatch();
  const contentWidth = useSelector(
    (state: ThemeConfigInterface) => state.layout.contentWidth
  );

  // ** Toggles Content Width
  // @ts-ignore
  const setContentWidth = (val) => dispatch(handleContentWidth(val));

  return [contentWidth, setContentWidth];
};

export default useContentWidth;
