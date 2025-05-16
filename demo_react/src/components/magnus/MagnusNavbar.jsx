import React, { useState, useEffect } from 'react'

function MagnusNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

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

  const handleDropdownClick = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(index)
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.magnus-navbar')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <nav className={`magnus-navbar ${scrolled ? 'magnus-navbar--scrolled' : ''}`}>
      <div className="magnus-navbar__container">
        <div className="magnus-navbar__logo">
          {/* Logo SVG with improved gradient */}
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
            <span>Schools</span>
            <div className="magnus-navbar__dropdown">
              <a href="#" className="magnus-navbar__dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10H22M12 2L2 10V22H22V10L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Private K-12
              </a>
              <a href="#" className="magnus-navbar__dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 22H22M2 2H22M5 22V2M19 22V2M2 12H5M19 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Boarding Schools
              </a>
              <a href="#" className="magnus-navbar__dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Higher Education
              </a>
            </div>
          </div>
          
          <div className="magnus-navbar__link magnus-navbar__link--dropdown">
            <span>Services</span>
            <div className="magnus-navbar__dropdown">
              <a href="#" className="magnus-navbar__dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H19C20.1046 8 21 8.89543 21 10V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V10C3 8.89543 3.89543 8 5 8H6M15 5L12 2M12 2L9 5M12 2V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Health Department
              </a>
              <a href="#" className="magnus-navbar__dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Athletics
              </a>
              <a href="#" className="magnus-navbar__dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Admissions
              </a>
            </div>
          </div>
          
          <div className="magnus-navbar__link magnus-navbar__link--dropdown">
            <span>Company</span>
            <div className="magnus-navbar__dropdown">
              <a href="#" className="magnus-navbar__dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17H12.01M9.09 9.00008C9.3251 8.33175 9.78915 7.76819 10.4 7.40921C11.0108 7.05024 11.7289 6.91902 12.4272 7.03879C13.1255 7.15857 13.7588 7.52161 14.2151 8.06361C14.6713 8.60561 14.9211 9.2916 14.92 10.0001C14.92 12.0001 11.92 13.0001 11.92 13.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                About
              </a>
              <a href="#" className="magnus-navbar__dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 12C11 13.1046 10.1046 14 9 14C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10C10.1046 10 11 10.8954 11 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 12C17 13.1046 16.1046 14 15 14C13.8954 14 13 13.1046 13 12C13 10.8954 13.8954 10 15 10C16.1046 10 17 10.8954 17 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Partners
              </a>
              <a href="#" className="magnus-navbar__dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03872C13.1255 7.15849 13.7588 7.52153 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                FAQ
              </a>
            </div>
          </div>
          
          <a href="#" className="magnus-navbar__link">
            <span>Resources</span>
          </a>
          
          <a href="#" className="magnus-navbar__link">
            <span>Support</span>
          </a>
        </div>
        
        <div className="magnus-navbar__right">
          <a href="#" className={`button ${scrolled ? 'button-secondary' : 'button-secondary magnus-light'}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="button-icon">
              <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Login
          </a>
          <a href="#" className={`button ${scrolled ? 'button-primary' : 'button-secondary'}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="button-icon">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Demo
          </a>
        </div>
        
        <button className="magnus-navbar__mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
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
          <div className="magnus-navbar__mobile-menu-section">
            <div 
              className={`magnus-navbar__mobile-menu-dropdown ${activeDropdown === 0 ? 'active' : ''}`}
              onClick={() => handleDropdownClick(0)}
            >
              <div className="magnus-navbar__mobile-menu-header">
                <span>Schools</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                     className={`dropdown-arrow ${activeDropdown === 0 ? 'open' : ''}`}>
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {activeDropdown === 0 && (
                <div className="magnus-navbar__mobile-submenu">
                  <a href="#">Private K-12</a>
                  <a href="#">Boarding Schools</a>
                  <a href="#">Higher Education</a>
                </div>
              )}
            </div>
            
            <div 
              className={`magnus-navbar__mobile-menu-dropdown ${activeDropdown === 1 ? 'active' : ''}`}
              onClick={() => handleDropdownClick(1)}
            >
              <div className="magnus-navbar__mobile-menu-header">
                <span>Services</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                     className={`dropdown-arrow ${activeDropdown === 1 ? 'open' : ''}`}>
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {activeDropdown === 1 && (
                <div className="magnus-navbar__mobile-submenu">
                  <a href="#">Health Department</a>
                  <a href="#">Athletics</a>
                  <a href="#">Admissions</a>
                </div>
              )}
            </div>
            
            <div 
              className={`magnus-navbar__mobile-menu-dropdown ${activeDropdown === 2 ? 'active' : ''}`}
              onClick={() => handleDropdownClick(2)}
            >
              <div className="magnus-navbar__mobile-menu-header">
                <span>Company</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                     className={`dropdown-arrow ${activeDropdown === 2 ? 'open' : ''}`}>
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {activeDropdown === 2 && (
                <div className="magnus-navbar__mobile-submenu">
                  <a href="#">About</a>
                  <a href="#">Partners</a>
                  <a href="#">FAQ</a>
                </div>
              )}
            </div>
            
            <a href="#" className="magnus-navbar__mobile-menu-item">Resources</a>
            <a href="#" className="magnus-navbar__mobile-menu-item">Support</a>
          </div>
          
          <div className="magnus-navbar__mobile-buttons">
            <a href="#" className="button button-secondary">Login</a>
            <a href="#" className="button button-primary">Request Demo</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default MagnusNavbar 