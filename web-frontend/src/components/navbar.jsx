import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidepanelOpen, setIsSidepanelOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Theme Toggle Effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navItems = [
    {
      name: "Home", path: "/", icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: "Shop", path: "/shop", icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: "Order", path: "/order", icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const sideShortcuts = [
    { name: "Profile", icon: "👤", path: "/profile" },
    { name: "Settings", icon: "⚙️", path: "/settings" },
    { name: "Support", icon: "💬", path: "/support" },
    { name: "About Version", icon: "ℹ️", path: "/about-version" }
  ];

  return (
    <>
      <AnimatePresence>
        {!isMobile ? (
          /* Desktop Navbar - Top */
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black via-gray-900 to-gray-800/90 border-b border-gray-700/40 backdrop-blur-xl shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-extrabold tracking-wide cursor-pointer select-none"
              >
                <Link to="/" className="flex items-center">
                  <span className="text-white">Zuki</span>
                  <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-5xl font-black ml-0.5 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
                    X
                  </span>
                </Link>
              </motion.div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-6 text-lg">
                  {navItems.map((item) => (
                    <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
                      <Link
                        to={item.path}
                        className={`transition-colors duration-300 font-medium ${location.pathname === item.path ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Desktop Theme Toggle */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-800 text-yellow-400 hover:bg-gray-700 transition-colors"
                  >
                    {isDarkMode ? "🌙" : "☀️"}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.nav>
        ) : (
          <>
            {/* Mobile Top Menu Button (Floating, Transparent) */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidepanelOpen(true)}
              className="fixed top-4 right-4 z-50 p-2 text-white bg-transparent"
            >
              <svg className="w-8 h-8 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>

            {/* Mobile Navbar - Bottom */}
            <motion.nav
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-0 left-0 w-full z-50 bg-gray-900/95 border-t border-gray-800 backdrop-blur-lg pb-4 px-2"
            >
              <div className="flex justify-around items-center px-2 py-3">
                {/* Main Nav Items */}
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center gap-1 min-w-[50px] ${location.pathname === item.path ? "text-cyan-400" : "text-gray-400 hover:text-gray-200"
                      }`}
                  >
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${location.pathname === item.path ? "bg-cyan-400/10" : "bg-transparent"
                        }`}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-[10px] font-medium">{item.name}</span>
                  </Link>
                ))}

                {/* Theme Toggle Switch */}
                <div className="flex flex-col items-center gap-1 min-w-[50px]">
                  <div
                    onClick={toggleTheme}
                    className="relative w-12 h-7 bg-gray-700 rounded-full cursor-pointer flex items-center px-1 transition-colors duration-300"
                    style={{ backgroundColor: isDarkMode ? '#374151' : '#E5E7EB' }}
                  >
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 700, damping: 30 }}
                      style={{ x: isDarkMode ? 20 : 0 }}
                      className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center text-[10px]"
                    >
                      {isDarkMode ? "🌙" : "☀️"}
                    </motion.div>
                  </div>
                  <span className="text-[10px] font-medium text-gray-400">Theme</span>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Sidepanel */}
      <AnimatePresence>
        {isSidepanelOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidepanelOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gray-900 border-l border-gray-800 shadow-2xl z-[70] p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Shortcuts</h2>
                <button
                  onClick={() => setIsSidepanelOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                {sideShortcuts.map((shortcut) => (
                  <Link
                    key={shortcut.name}
                    to={shortcut.path}
                    onClick={() => setIsSidepanelOpen(false)}
                    className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 transition-all group"
                  >
                    <span className="text-2xl">{shortcut.icon}</span>
                    <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors">
                      {shortcut.name}
                    </span>
                    <svg className="w-5 h-5 text-gray-500 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              <div className="absolute bottom-8 left-6 right-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-center">
                  <p className="text-xs text-indigo-300 mb-1">Logged in as</p>
                  <p className="font-semibold text-white">Guest User</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
