import React, { useState, useEffect, Suspense } from 'react'
import './App.css'
import './MagnusHealth.css'
import MagnusNavbar from './components/magnus/MagnusNavbar'
import MagnusHeader from './components/magnus/MagnusHeader'
import MagnusFeatures from './components/magnus/MagnusFeatures'
import MagnusTestimonials from './components/magnus/MagnusTestimonials'
import MagnusContact from './components/magnus/MagnusContact'
import MagnusFooter from './components/magnus/MagnusFooter'

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div className="error-content">
            <h2>Đã xảy ra lỗi</h2>
            <p>{this.state.error && this.state.error.toString()}</p>
            <button 
              className="button button-primary" 
              onClick={() => window.location.reload()}
            >
              Tải lại trang
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Simulated loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer to add animations when elements come into view
  useEffect(() => {
    if (!isLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observe all sections
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });

      return () => {
        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
          observer.unobserve(el);
        });
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Đang tải ứng dụng...</p>
      </div>
    );
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Đang tải component...</p>
        </div>
      }>
        <div className="magnus-app">
          <MagnusNavbar />
          <MagnusHeader />
          <MagnusFeatures />
          <MagnusTestimonials />
          <MagnusContact />
          <MagnusFooter />
          
          {scrollPosition > 300 && (
            <button 
              className="scroll-to-top" 
              onClick={goToTop}
              aria-label="Cuộn lên đầu trang"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 4L4 12H9V20H15V12H20L12 4Z" 
                  fill="currentColor"
                />
              </svg>
            </button>
          )}
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
