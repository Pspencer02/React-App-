import React from 'react';
import './Navigation.css'; // Import the CSS file for styling

//create nav bar with links (they go nowhere)
const Navigation = () => {
  return (
    <nav className="navbar">
      <a href="#" className="nav-link">Home</a>
      <a href="#" className="nav-link">About</a>
      <a href="#" className="nav-link">Contact</a>
    </nav>
  );
};

export default Navigation;