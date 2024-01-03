import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Heba Dev
        </motion.span>
        <div className="socials">
          <a href="#">
            <img src="/images/Facebook.png" />
          </a>
          <a href="#">
            <img src="/images/Instagram.png" />
          </a>
          <a href="#">
            <img src="/images/Youtube.png" />
          </a>
          <a href="#">
            <img src="/images/dribbble.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
