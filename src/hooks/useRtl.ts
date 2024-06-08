import { useSelector, useDispatch } from "react-redux";
import { handleRtl } from "../store/layoutReducer";
import { ThemeConfigInterface } from "../configs/themeConfig";

const useRtl = () => {
  const dispatch = useDispatch();
  const isRtl = useSelector(
    (state: ThemeConfigInterface) => state.layout.isRTL
  );

  const setRtl = (val: any) => dispatch(handleRtl(val));

  return [isRtl, setRtl];
};

export default useRtl;
