import React, { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import { motion, AnimatePresence } from "framer-motion";

const Headermain = () => {
  const [isActive, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setActive(false);
    document.body.classList.remove("ovhidden");
  }, [location]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/portfolio", label: "My Projects", icon: "💼" },
    { path: "/about", label: "About Me", icon: "👨‍💻" },
    { path: "/contact", label: "Contact Me", icon: "📧" }
  ];

  return (
    <>
      <motion.header
        className={`fixed-top site__header ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="header-content d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            <motion.span
              className="logo-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {logotext}
            </motion.span>
          </Link>

          <div className="d-flex bg-none align-items-center gap-3">
            <Themetoggle />
            <motion.button
              className="menu__button nav_ac"
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isActive ? <VscClose /> : <VscGrabber />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleToggle}
            />
            <motion.div
              className="site__navigation"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="bg__menu h-100">
                <div className="menu__wrapper">
                  <div className="menu__container p-3">
                    <ul className="the_menu">
                      {navItems.map((item, i) => (
                        <motion.li
                          key={item.path}
                          className="menu_item"
                          custom={i}
                          variants={menuItemVariants}
                          initial="closed"
                          animate="open"
                        >
                          <Link
                            onClick={handleToggle}
                            to={item.path}
                            className={`menu-link ${location.pathname === item.path ? "active" : ""}`}
                          >
                            <span className="menu-icon">{item.icon}</span>
                            <span className="menu-text">{item.label}</span>
                            <motion.span
                              className="menu-arrow"
                              initial={{ x: -10, opacity: 0 }}
                              whileHover={{ x: 0, opacity: 1 }}
                            >
                              →
                            </motion.span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <motion.div
                className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="social-links d-flex gap-3">
                  <motion.a
                    href={socialprofils.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    Instagram
                  </motion.a>
                  <motion.a
                    href={socialprofils.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    Github
                  </motion.a>
                  <motion.a
                    href={socialprofils.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    LinkedIn
                  </motion.a>
                </div>
                <p className="copyright m-0">© 2024 {logotext}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
