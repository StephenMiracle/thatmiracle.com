import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export default ({ siteTitle, color, hideLogoOnLoad }) => {
  const [showLogo, setShowLogo] = useState(hideLogoOnLoad ? 'opacity-0' : 'opacity-100')
  const [isNavOpen, setIsNavOpen] = useState(false)


  useEffect(() => {
    if (typeof window !== 'undefined' && showLogo === 'opacity-0') {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setShowLogo('opacity-100')
        } else {
          setShowLogo('opacity-0')
        }
      })
    }
  }, [hideLogoOnLoad])
  
  return (
  <header className="px-8 fixed w-full">
    <div className="flex items-center justify-between  py-2 md:py-8">
      <Link className={`text-${color} text-lg text-2xl ${showLogo} transition-opacity`} to="/">
        Stephen <em className="font-cursive text-secondary">"that"</em> Miracle
      </Link>
      {/* <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            onClick={() => setIsNavOpen(true)}
            className="HAMBURGER-ICON space-y-2"
          >
            <span className={`block h-0.5 w-8 animate-pulse bg-${color}`}></span>
            <span className={`block h-0.5 w-8 animate-pulse bg-${color}`}></span>
            <span className={`block h-0.5 w-8 animate-pulse bg-${color}`}></span>
          </div>

          <div className={`${isNavOpen ? 'block' : 'hidden'} fixed w-screen h-screen bg-white left-0 top-0`}>
            <div
              onClick={() => setIsNavOpen(false)}
              className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/about">About</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/solutions">Solutions</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="#start">Connect</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-xl">
          <li>
            <Link className={`text-${color}`} to="/about">Background</Link>
          </li>
          <li>
            <Link className={`text-${color}`} to="/solutions">
              Solutions
            </Link>
          </li>
          <li>
            <Link className={`text-${color}`} to="#start">
              Connect
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  </header>
  ) 
  }