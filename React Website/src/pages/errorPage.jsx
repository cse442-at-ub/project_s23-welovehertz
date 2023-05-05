import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notfound.css';

function NotFound() {
  return (
    <div className="not-found">
      <h1>Oops! Page not found</h1>
      <p>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/">Go back to the homepage</Link>
    </div>
  );
}

export default NotFound;