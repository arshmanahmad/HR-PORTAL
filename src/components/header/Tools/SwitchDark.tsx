import useDarkmode from "../../../hooks/useDarkMode";
import Icon from "../../ui/Icon";

const SwitchDark = () => {
  const [isDark, setDarkMode] = useDarkmode();

  return (
    <span>
      <div
        className="lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"
        //@ts-ignore
        onClick={() => setDarkMode(!isDark)}
      >
        {isDark ? (
          <Icon icon="heroicons-outline:sun" />
        ) : (
          <Icon icon="heroicons-outline:moon" />
        )}
      </div>
    </span>
  );
};

export default SwitchDark;
