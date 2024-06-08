import { useSelector, useDispatch } from "react-redux";
import { handleFooterType } from "../store/layoutReducer";
import { ThemeConfigInterface } from "../configs/themeConfig";

const useFooterType = () => {
  const dispatch = useDispatch();
  const footerType = useSelector(
    (state: ThemeConfigInterface) => state.layout.footerType
  );
  const setFooterType = (val: any) => dispatch(handleFooterType(val));
  return [footerType, setFooterType];
};

export default useFooterType;
