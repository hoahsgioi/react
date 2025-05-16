import React from 'react'

function MagnusHeader() {
  return (
    <header className="magnus-header">
      <div className="container">
        <div className="magnus-header__content animate-slideInLeft">
          <h1 className="magnus-header__title">Student Health Management Made Simple</h1>
          <p className="magnus-header__subtitle">
            The comprehensive platform trusted by schools nationwide to manage student health records, 
            track compliance, and streamline health center operations.
          </p>
          <div className="magnus-header__buttons">
            <a href="#" className="button button-primary">Request A Demo</a>
            <a href="#" className="button button-secondary">Learn More</a>
          </div>
        </div>
        <div className="magnus-header__image animate-slideInRight">
          <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
            alt="Student health management" 
            className="magnus-header__img" />
        </div>
      </div>
    </header>
  )
}

export default MagnusHeader