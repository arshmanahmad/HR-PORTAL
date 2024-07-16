import { ToastContainer } from "react-toastify";
import Footer from "../../components/footer";
import MobileFooter from "../../components/footer/MobileFooter";
import useMenuHidden from "../../hooks/useMenuHidden";
import useMenuLayout from "../../hooks/useMenulayout";
import useSidebar from "../../hooks/useSidebar";
import useWidth from "../../hooks/useWidth";
import useRtl from "../../hooks/useRtl";
import useDarkmode from "../../hooks/useDarkMode";
import useSkin from "../../hooks/useSkin";
import useNavbarType from "../../hooks/useNavbarType";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import MobileMenu from "../../components/sidebar/MobileMenu";
import useMobileMenu from "../../hooks/useMobileMenu";
import { Suspense, useEffect, useState } from "react";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { useLocation } from "react-router-dom";
import useContentWidth from "../../hooks/useContentWidth";
import { motion } from "framer-motion";
import Loading from "../../components/ui/Loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [agentData, setAgentData] = useState(null);

  const { pathname } = useLocation();

  const { width, breakpoints } = useWidth();
  const [isRtl] = useRtl();
  const [contentWidth] = useContentWidth();
  const [isDark] = useDarkmode();
  const [skin] = useSkin();
  const [navbarType] = useNavbarType();
  const [menuType] = useMenuLayout();
  const [menuHidden] = useMenuHidden();
  const [mobileMenu] = useMobileMenu();
  const [collapsed] = useSidebar();

  const switchHeaderClass = () => {
    if (menuType === "horizontal" || menuHidden) {
      return "ltr:ml-0 rtl:mr-0";
    } else if (collapsed) {
      return "ltr:ml-[72px] rtl:mr-[72px]";
    } else {
      return "ltr:ml-[248px] rtl:mr-[248px]";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAgentData({
        // @ts-ignore
        nom: "Michelle",
      });
    }, 3000);
  }, []);

  return (
    <>
      <div
        dir={isRtl ? "rtl" : "ltr"}
        className={`app-warp    ${isDark ? "dark" : "light"} ${skin === "bordered" ? "skin--bordered" : "skin--default"
          }
      ${navbarType === "floating" ? "has-floating" : ""}
      ` }
      >
        <ToastContainer />
        <Header className={width > breakpoints.xl ? switchHeaderClass() : ""} />
        {menuType === "vertical" && width > breakpoints.xl && !menuHidden && (
          <Sidebar />
        )}

        <MobileMenu
          className={`${width < breakpoints.xl && mobileMenu
            ? "left-0 visible opacity-100  z-[9999]"
            : "left-[-300px] invisible opacity-0  z-[-999] "
            }`}
        />

        <div
          className={`content-wrapper transition-all duration-150 ${width > 1280 ? switchHeaderClass() : ""
            }`}
        >
          {/* md:min-h-screen will h-full*/}
          <div className="page-content   page-min-height  ">
            <div
              className={
                contentWidth === "boxed"
                  ? "container mx-auto"
                  : "container-fluid"
              }
            >
              <motion.div
                key={pathname}
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                variants={{
                  pageInitial: {
                    opacity: 0,
                    y: 50,
                  },
                  pageAnimate: {
                    opacity: 1,
                    y: 0,
                  },
                  pageExit: {
                    opacity: 0,
                    y: -50,
                  },
                }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.5,
                }}
              >
                <Suspense fallback={<Loading />}>
                  <Breadcrumbs />
                  {pathname === "/dashboard/mon-compte" ? (
                    <span></span>
                  ) : agentData ? (
                    <div className="h-32 w-full bg-blue-700 rounded-md my-4">
                      <div className="flex items-center">
                        <h2 className="text-white p-3 text-[20px]">
                          {/* @ts-ignore */}
                          Bonjour {agentData?.nom || "Admin"} Bienvenue sur le
                          Portail RH👋
                        </h2>
                      </div>
                    </div>
                  ) : (
                    <Loading />
                  )}
                  {children}
                </Suspense>
              </motion.div>
            </div>
          </div>
        </div>

        {width < breakpoints.md && <MobileFooter />}
        {width > breakpoints.md && (
          <Footer
            className={width > breakpoints.xl ? switchHeaderClass() : ""}
          />
        )}
      </div>
    </>
  );
};

export default DashboardLayout;
