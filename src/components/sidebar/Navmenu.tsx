import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useMobileMenu from "../../hooks/useMobileMenu";
import { MenuItemI } from "../../constants/dashboardData";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import Submenu from "./Submenu";
import { useTranslation } from "react-i18next";

const Navmenu = ({ menus }: { menus: MenuItemI[] }) => {
  const { t } = useTranslation();
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (i: number) => {
    if (activeSubmenu === i) {
      setActiveSubmenu(null);
    } else {
      // @ts-ignore
      setActiveSubmenu(i);
    }
  };

  const location = useLocation().pathname;
  const locationName = location.replace("/", "");

  const [mobileMenu, setMobileMenu] = useMobileMenu();

  useEffect(() => {
    let submenuIndex = null;
    menus.map((item, i) => {
      if (!item.child) return;
      if (item.link === locationName) {
        submenuIndex = null;
      } else {
        const ciIndex = item.child.findIndex(
          (ci) => ci.childlink === locationName
        );
        if (ciIndex !== -1) {
          submenuIndex = i;
        }
      }
    });

    setActiveSubmenu(submenuIndex);
    if (mobileMenu) {
      // @ts-ignore
      setMobileMenu(false);
    }
  }, [location]);

  return (
    <>
      <ul>
        {menus.map((item, i) => (
          <li
            key={i}
            className={` single-sidebar-menu 
              ${item.child ? "item-has-children" : ""}
              ${activeSubmenu === i ? "open" : ""}
              ${locationName === item.link ? "menu-item-active" : ""}`}
          >
            {/* single menu with no childred*/}
            {!item.child && !item.isHeadr && (
              <Link className="menu-link" to={item?.link || "/"}>
                <span className="menu-icon flex-grow-0">
                  <Icon icon={item?.icon || ""} />
                </span>
                <div className="text-box flex-grow">
                  {t("sidebar." + item.title)}
                </div>
                {/* @ts-ignore */}
                {item.badge && <span className="menu-badge">{item.badge}</span>}
              </Link>
            )}
            {/* only for menulabel */}
            {item.isHeadr && !item.child && (
              <div className="menulabel">{t("sidebar." + item.title)}</div>
            )}
            {/*    !!sub menu parent   */}
            {item.child && (
              <div
                className={`menu-link ${
                  activeSubmenu === i
                    ? "parent_active not-collapsed"
                    : "collapsed"
                }`}
                onClick={() => toggleSubmenu(i)}
              >
                <div className="flex-1 flex items-start">
                  <span className="menu-icon">
                    <Icon icon={item?.icon || ""} />
                  </span>
                  <div className="text-box">{t("sidebar." + item.title)}</div>
                </div>
                <div className="flex-0">
                  <div
                    className={`menu-arrow transform transition-all duration-300 ${
                      activeSubmenu === i ? " rotate-90" : ""
                    }`}
                  >
                    <Icon icon="heroicons-outline:chevron-right" />
                  </div>
                </div>
              </div>
            )}

            <Submenu
              activeSubmenu={activeSubmenu}
              item={item}
              i={i}
              locationName={locationName}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navmenu;
