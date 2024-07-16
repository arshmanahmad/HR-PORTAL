import { useRef, useState } from "react";
import useSidebar from "../../hooks/useSidebar";
import useSemiDark from "../../hooks/useSemiDark";
import useSkin from "../../hooks/useSkin";
import SidebarLogo from "./Logo";
import Navmenu from "./Navmenu";
import { menuItems } from "../../constants/dashboardData";

const Sidebar = () => {
  const [collapsed] = useSidebar();
  const [isSemiDark] = useSemiDark();
  const [skin] = useSkin();

  const scrollableNodeRef = useRef(null);
  const [scroll, setScroll] = useState(false);
  const [menuHover, setMenuHover] = useState(false);

  useState(() => {
    const handleScroll = () => {
      //@ts-ignore
      if (scrollableNodeRef.current.scrollTop > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    //@ts-ignore
    scrollableNodeRef?.current?.addEventListener("scroll", handleScroll);
    //@ts-ignore
  }, [scrollableNodeRef]);

  return (
    <div className={`${isSemiDark ? "dark" : ""}relative`}>
      <div
        className={`sidebar-wrapper bg-white dark:bg-slate-800     ${
          collapsed ? "w-[72px] close_sidebar" : "w-[248px]"
        }
      ${menuHover ? "sidebar-hovered" : ""}
      ${
        skin === "bordered"
          ? "border-r border-slate-200 dark:border-slate-700"
          : "shadow-base"
      }
      `}
        onMouseEnter={() => {
          setMenuHover(true);
        }}
        onMouseLeave={() => {
          setMenuHover(false);
        }}
      >
        <SidebarLogo menuHover={menuHover} />
        <div
          className={`h-[60px]  absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none ${
            scroll ? " opacity-100" : " opacity-0"
          }`}
        ></div>

        <div className="sidebar-menu px-4 h-[calc(100%-80px)] overflow-auto">
          <Navmenu menus={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
