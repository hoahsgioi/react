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
        <div style={{ padding: "20px", color: "red" }}>
          <h2>Đã xảy ra lỗi</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <button onClick={() => window.location.reload()}>Tải lại trang</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking if all components are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="loading">Đang tải...</div>;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Đang tải component...</div>}>
        <div className="magnus-app">
          <MagnusNavbar />
          <MagnusHeader />
          <MagnusFeatures />
          <MagnusTestimonials />
          <MagnusContact />
          <MagnusFooter />
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
