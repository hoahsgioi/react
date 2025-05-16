import React, { useState } from 'react'

function MagnusContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    role: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! A representative will contact you soon.')
    setFormData({
      name: '',
      email: '',
      school: '',
      role: '',
      message: ''
    })
  }

  return (
    <section className="magnus-contact">
      <div className="container">
        <div className="section-header text-center">
          <h2>Ready to Transform Your School's Health Management?</h2>
          <p>Request a demo today and see how Magnus Health can benefit your school</p>
        </div>
        
        <form className="magnus-contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="school" className="form-label">School Name</label>
            <input
              type="text"
              id="school"
              name="school"
              className="form-input"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="role" className="form-label">Your Role</label>
            <select
              id="role"
              name="role"
              className="form-input"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select your role</option>
              <option value="Administrator">School Administrator</option>
              <option value="Nurse">School Nurse</option>
              <option value="Athletic Director">Athletic Director</option>
              <option value="IT Staff">IT Staff</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <button type="submit" className="button button-primary" style={{ width: '100%' }}>
            Request Demo
          </button>
        </form>
      </div>
    </section>
  )
}

export default MagnusContact 