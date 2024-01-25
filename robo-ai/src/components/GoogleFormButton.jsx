import React from 'react';

const GoogleFormButton = () => {
  const openGoogleForm = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc4iRVfo7cwfpj_yXkqktybzbUCQQcJGDz9Umym_CQVVrgPQA/viewform';

    // Open the Google Form in a new tab
    window.open(googleFormUrl, '_blank');
  };

  const buttonStyle = {
    width: '260px',
    height: '56px',
    flexShrink: 0,
    borderRadius: '8px',
    background: 'var(--shady-yellow, linear-gradient(180deg, #FFE52E 21.22%, #C2AA00 85.36%))',
    // You can add more styles as needed
  };

  const imageStyle = {
    width: '100%', // Make the image take the full width of the button
    height: '100%', // Make the image take the full height of the button
    borderRadius: '8px', // Match the button's border-radius
    objectFit: 'cover', // Ensure the image covers the entire button
  };

  return (
    <a href="#" onClick={openGoogleForm} style={buttonStyle}>
      <img
        className="group-2" // Add your existing class to the image
        alt="Group"
        src="https://c.animaapp.com/Zh3SbskR/img/group-1207@2x.png"
        style={imageStyle}
      />
    </a>
  );
};

export default GoogleFormButton;
