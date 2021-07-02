
import stylenav from "../../styles/Layout/Navbar.module.scss"
import Image from 'next/image'
import React, { useState, useEffect } from "react"
import LogoName from "../../public/assets/Brand/logo+name-Big-Blue.png"
import Moon from "../../public/assets/svg/moon2.svg"
import { motion } from "framer-motion"
const Navbar = () => {
    const [chnagethemeconst, setchangethemeconst] = useState(false)
    
    useEffect(() => {
        const body = document.body
    const theme = localStorage.getItem("theme")
    if (theme) {
      body.classList.add(theme)

      if (theme === "darkmode") {
        setchangethemeconst(false)
      } else {
        setchangethemeconst(true)
      }
    } else {
        console.log("err")
    }
  }, [])

  const variants = {
    darkmotion: { x: 0 },
    lightmotion: { x: 22 },
  }
  const [render, setrender] = useState(true)
  const [renderdropdown, setrenderdropdown] = useState(false)
  const ToggleButtonBurger = () => {
    setrender(!render)
    if (renderdropdown === true && render === false) {
      setrenderdropdown(false)
    }
  }
  const ToggleButtonDropdown = () => {
    setrenderdropdown(!renderdropdown)
  }
  const changetheme = () => {
    if (!chnagethemeconst) {
      //true
      body.classList.remove("darkmode")
      body.classList.add("lightmode")
      localStorage.setItem("theme", "lightmode")
    } else {
      //false
      body.classList.remove("lightmode")
      body.classList.add("darkmode")
      localStorage.setItem("theme", "darkmode")
    }

    setchangethemeconst(!chnagethemeconst)
    console.log(chnagethemeconst)
  }

  return (
    <nav>
      <div className="centerSection">
        <div className={`${stylenav.menu} displayflex`}>
          <a to="/" className={stylenav.Logo}>
            <img src={LogoName} alt="Logo" />
          </a>

          <div className={`${stylenav.topabsolute} ${render === true ? `${stylenav.try2}` : `${stylenav.try2}`}`}>
            <ul
              className={`${stylenav.navbardefault} ${stylenav.transitionsmooth} ${
                render === true ? `${stylenav.displaynoneNav}` : `${stylenav.displayflexNav}`
              }`}
            >
              <li
                className={`${stylenav.hasdropdown}`}
                onKeyDown={() => ToggleButtonDropdown()}
                onClick={() => ToggleButtonDropdown()}
                tabIndex={0}
              >
                <a className={`${stylenav.Groupicon}`}>
                  <div className="name">Projects</div>
                  <div className="testgroup">
                    <div
                      className={
                        renderdropdown
                          ? "dp-item dp-animation1 "
                          : "dp-item dp-animation1-after "
                      }
                    ></div>
                    <div
                      className={
                        renderdropdown
                          ? "dp-item dp-animation2 "
                          : "dp-item dp-animation2-after "
                      }
                    ></div>
                  </div>
                </a>
                {renderdropdown && (
                  <ul className="dropdown">
                    <li>
                      <a to="/Projects">Websites and apps</a>
                    </li>
                    <li>
                      <a to="/Illustrations">Illustrations</a>
                    </li>
                    <li>
                      <a to="/">Interesting things</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a to="/blog">Blog</a>
              </li>
              <li>
                <a to="/">Contact</a>
              </li>
              <li>
                <div className="changetheme" onClick={() => changetheme()}>
                  <motion.div
                    animate={chnagethemeconst ? "darkmotion" : "lightmotion"}
                    variants={variants}
                    className="circlechange"
                  >
                     <Image                       style={{ height: "20px", rotate: "40deg" }}src="../../public/assets/svg/moon2.svg" alt="moon"/>
                      fill="white"

                  </motion.div>
                </div>
              </li>
            </ul>

            {!render && (
              <div className="smallmenuas">
                <div className="asmenu">
                  <a to="/"></a>
                </div>
              </div>
            )}
          </div>

          <div
            className="hamburger transitionsmooth"
            role="button"
            onKeyDown={() => ToggleButtonBurger()}
            onClick={() => ToggleButtonBurger()}
            tabIndex={0}
          >
            <div className={render ? "line " : "line animateline1 "}></div>
            <div className={render ? "line " : "line animateline2"}></div>
            <div className={render ? "line " : "line animateline3"}></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
