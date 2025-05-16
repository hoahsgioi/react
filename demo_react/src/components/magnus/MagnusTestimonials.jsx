import React from 'react'

function MagnusTestimonials() {
  const testimonials = [
    {
      id: 1,
      content: "Magnus Health has transformed how our school manages student health records. The transition from paper to digital was seamless, and we've saved countless hours on administrative tasks.",
      name: "Sarah Johnson",
      role: "School Nurse, Lakeside Academy",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      content: "The compliance tracking features alone are worth the investment. We went from 70% to 98% immunization compliance in our first semester using Magnus Health.",
      name: "Michael Chen",
      role: "Health Services Director, Westfield Prep",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 3,
      content: "Parents love the user-friendly interface, and our staff appreciates having all student health information readily accessible. Customer support has been exceptional.",
      name: "Jennifer Patel",
      role: "Dean of Students, Riverside School",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    }
  ]

  return (
    <section className="magnus-testimonials animate-on-scroll">
      <div className="container">
        <div className="section-header text-center">
          <h2>Trusted by Schools Nationwide</h2>
          <p>See what education professionals have to say about Magnus Health</p>
        </div>
        
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '3rem' }}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="col animate-on-scroll" 
              style={{ 
                flex: '1 1 300px',
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="testimonial-card">
                <p className="testimonial-card__content">"{testimonial.content}"</p>
                <div className="testimonial-card__author">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="testimonial-card__avatar" 
                  />
                  <div>
                    <div className="testimonial-card__name">{testimonial.name}</div>
                    <div className="testimonial-card__role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MagnusTestimonials 