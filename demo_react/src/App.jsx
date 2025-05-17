import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './MagnusHealth.css'

// Import Magnus components
import MagnusNavbar from './components/magnus/MagnusNavbar'
import MagnusHeader from './components/magnus/MagnusHeader'
import MagnusAbout from './components/magnus/MagnusAbout'
import MagnusFeatures from './components/magnus/MagnusFeatures'
import MagnusDoctors from './components/magnus/MagnusDoctors'
import MagnusTestimonials from './components/magnus/MagnusTestimonials'
import MagnusContact from './components/magnus/MagnusContact'
import MagnusFooter from './components/magnus/MagnusFooter'

// Import other components
import Login from './components/auth/Login'
import ParentDashboard from './components/dashboard/ParentDashboard'
import HealthDeclaration from './components/health/HealthDeclaration'
import StudentInfo from './components/student/StudentInfo'
import MedicationForm from './components/health/MedicationForm'

function App() {
  return (
    <Router>
      <Routes>
        {/* Magnus Health - Main Route */}
        <Route path="/" element={
          <>
            <MagnusNavbar />
            <MagnusHeader />
            <MagnusAbout />
            <MagnusFeatures />
            <MagnusDoctors />
            <MagnusTestimonials />
            <MagnusContact />
            <MagnusFooter />
          </>
        } />

        {/* Other Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ParentDashboard />} />
        <Route path="/health-declaration" element={<HealthDeclaration />} />
        <Route path="/student-info" element={<StudentInfo />} />
        <Route path="/medication-form" element={<MedicationForm />} />
      </Routes>
    </Router>
  )
}

export default App
