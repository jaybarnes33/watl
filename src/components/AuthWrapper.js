import React from "react";

const AuthWrapper = ({ children }) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        {/* Left Column - Image */}
        <div className="auth-image-column">
          <img
            src="/assets/img/rgambia.jpg"
            alt="West African Tours"
            className="auth-background-image"
          />
          <div className="auth-image-overlay">
            <div className="auth-image-content">
              <h2>Welcome to West African Tours</h2>
              <p>Discover the beauty and culture of West Africa</p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="auth-form-column">{children}</div>
      </div>
    </div>
  );
};

export default AuthWrapper;
