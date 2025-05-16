import React, { useState, useEffect } from 'react'

function MagnusNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className={`magnus-navbar ${scrolled ? 'magnus-navbar--scrolled' : ''}`}>
      <div className="container magnus-navbar__container">
        <div className="magnus-navbar__logo">
          {/* Logo SVG */}
          <svg width="160" height="36" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.4 7.2H21.6L18 21.6L14.4 7.2H9.6L14.4 28.8H21.6L26.4 7.2Z" fill={scrolled ? "#0052CC" : "#FFFFFF"}/>
            <path d="M36 7.2H30L27.6 28.8H33.6L36 7.2Z" fill={scrolled ? "#0052CC" : "#FFFFFF"}/>
            <path d="M48 13.2H42L42.72 7.2H36.72L33.6 28.8H39.6L40.8 19.2H46.8L45.6 28.8H51.6L54.72 7.2H48.72L48 13.2Z" fill={scrolled ? "#0052CC" : "#FFFFFF"}/>
            <path d="M63.6 7.2H57.6L54.48 28.8H66.48L67.2 24H60L63.6 7.2Z" fill={scrolled ? "#0052CC" : "#FFFFFF"}/>
            <path d="M76.8 7.2H70.8L67.68 28.8H79.68L80.4 24H73.2L76.8 7.2Z" fill={scrolled ? "#0052CC" : "#FFFFFF"}/>
            <path d="M90 12H89.28L86.4 28.8H80.4L83.52 7.2H92.4C95.76 7.2 97.44 8.88 96.72 12.72L96 16.8C95.28 20.4 92.4 21.6 89.76 21.6H88.56L93.36 28.8H86.4L82.56 22.8L84 12H90Z" fill={scrolled ? "#0052CC" : "#FFFFFF"}/>
            <path d="M106.8 7.2H100.8L97.68 28.8H109.68L110.4 24H103.2L103.92 18.4H110.4L111.12 13.6H104.64L105.36 7.2H106.8Z" fill={scrolled ? "#0052CC" : "#FFFFFF"}/>
            <path d="M123.6 7.2H117.6L114.48 28.8H120.48L121.68 19.2H126.48L127.68 28.8H133.68L136.8 7.2H130.8L129.6 16.8H124.8L123.6 7.2Z" fill={scrolled ? "#0052CC" : "#FFFFFF"}/>
            <path d="M148.8 7.2H142.8L139.68 28.8H145.68L148.8 7.2Z" fill={scrolled ? "#0052CC" : "#FFFFFF"}/>
            <path d="M160.8 7.2H154.8L147.6 19.2L146.4 28.8H152.4L153.6 19.2L160.8 7.2Z" fill={scrolled ? "#0052CC" : "#FFFFFF"}/>
          </svg>
        </div>
        
        <div className="magnus-navbar__links">
          <div className="magnus-navbar__link magnus-navbar__link--dropdown">
            <span>Types of Schools</span>
            <div className="magnus-navbar__dropdown">
              <a href="#" className="magnus-navbar__dropdown-item">Private K-12</a>
              <a href="#" className="magnus-navbar__dropdown-item">Boarding Schools</a>
              <a href="#" className="magnus-navbar__dropdown-item">Higher Education</a>
            </div>
          </div>
          
          <div className="magnus-navbar__link magnus-navbar__link--dropdown">
            <span>Who We Serve</span>
            <div className="magnus-navbar__dropdown">
              <a href="#" className="magnus-navbar__dropdown-item">Health Department</a>
              <a href="#" className="magnus-navbar__dropdown-item">Athletic Department</a>
              <a href="#" className="magnus-navbar__dropdown-item">Admissions Department</a>
              <a href="#" className="magnus-navbar__dropdown-item">School Leadership</a>
              <a href="#" className="magnus-navbar__dropdown-item">School Counselors</a>
            </div>
          </div>
          
          <div className="magnus-navbar__link magnus-navbar__link--dropdown">
            <span>Company</span>
            <div className="magnus-navbar__dropdown">
              <a href="#" className="magnus-navbar__dropdown-item">About</a>
              <a href="#" className="magnus-navbar__dropdown-item">Partners</a>
              <a href="#" className="magnus-navbar__dropdown-item">Careers</a>
              <a href="#" className="magnus-navbar__dropdown-item">FAQ</a>
            </div>
          </div>
          
          <a href="#" className="magnus-navbar__link">Resources</a>
          <a href="#" className="magnus-navbar__link">Privacy & Security</a>
          
          <div className="magnus-navbar__link magnus-navbar__link--dropdown">
            <span>Get Support</span>
            <div className="magnus-navbar__dropdown">
              <a href="#" className="magnus-navbar__dropdown-item">I'm a School</a>
              <a href="#" className="magnus-navbar__dropdown-item">I'm a Parent</a>
              <a href="#" className="magnus-navbar__dropdown-item">I'm a Student</a>
            </div>
          </div>
        </div>
        
        <div className="magnus-navbar__right">
          <a href="#" className={`button ${scrolled ? 'button-secondary' : 'button-secondary magnus-light'}`}>Login</a>
          <a href="#" className={`button ${scrolled ? 'button-primary' : 'button-secondary'}`}>Request A Demo</a>
        </div>
        
        <button className="magnus-navbar__mobile-toggle" onClick={toggleMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke={scrolled ? "#0052CC" : "#FFFFFF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M3 12H21M3 6H21M3 18H21" stroke={scrolled ? "#0052CC" : "#FFFFFF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="magnus-navbar__mobile-menu">
          <a href="#" className="magnus-navbar__mobile-menu-item">Types of Schools</a>
          <a href="#" className="magnus-navbar__mobile-menu-item">Who We Serve</a>
          <a href="#" className="magnus-navbar__mobile-menu-item">Company</a>
          <a href="#" className="magnus-navbar__mobile-menu-item">Resources</a>
          <a href="#" className="magnus-navbar__mobile-menu-item">Privacy & Security</a>
          <a href="#" className="magnus-navbar__mobile-menu-item">Get Support</a>
          <a href="#" className="magnus-navbar__mobile-menu-item">Login</a>
          <a href="#" className="magnus-navbar__mobile-menu-item button button-primary">Request A Demo</a>
        </div>
      )}
    </nav>
  )
}

export default MagnusNavbar 