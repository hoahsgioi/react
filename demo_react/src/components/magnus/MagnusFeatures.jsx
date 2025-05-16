import React from 'react'

function MagnusFeatures() {
  const features = [
    {
      id: 1,
      icon: '📋',
      title: 'Health Record Management',
      description: 'Securely store and manage student health records, immunizations, and medical history all in one place.'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile-Friendly Forms',
      description: 'Collect health information with customizable forms that parents can complete from any device.'
    },
    {
      id: 3,
      icon: '🔔',
      title: 'Compliance Tracking',
      description: 'Automatically track immunization compliance and send reminders for missing requirements.'
    },
    {
      id: 4,
      icon: '📊',
      title: 'Reporting & Analytics',
      description: 'Generate detailed reports on student health metrics, compliance rates, and visit trends.'
    }
  ]

  return (
    <section className="magnus-features animate-on-scroll">
      <div className="container">
        <div className="section-header text-center">
          <h2>Powerful Features for School Health Management</h2>
          <p>Everything you need to effectively manage student health in one intuitive platform.</p>
        </div>
        
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '3rem' }}>
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="col animate-on-scroll" 
              style={{ 
                flex: '1 1 250px',
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="feature-card">
                <div className="feature-card__icon">
                  <span style={{ fontSize: '24px' }}>{feature.icon}</span>
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MagnusFeatures 