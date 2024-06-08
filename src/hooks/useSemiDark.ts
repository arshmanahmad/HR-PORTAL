import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSemiDarkMode } from "../store/layoutReducer";
import { ThemeConfigInterface } from "../configs/themeConfig";

const useSemiDark = () => {
  const dispatch = useDispatch();
  const isSemiDark = useSelector(
    (state: ThemeConfigInterface) => state.layout.semiDarkMode
  );
  const setSemiDark = (val: any) => {
    dispatch(handleSemiDarkMode(val));
    localStorage.setItem("semiDarkMode", JSON.stringify(val));
  };
  useEffect(() => {
    const storedMode = localStorage.getItem("semiDarkMode");
    if (storedMode !== null) {
      dispatch(handleSemiDarkMode(JSON.parse(storedMode)));
    }
  }, []);

  return [isSemiDark, setSemiDark];
};

export default useSemiDark;
