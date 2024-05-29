import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-form">  
        {/* create log in heading */}
        <h3 className="login-heading">Log In</h3>
        {/* create username input */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          {/* create password input */}
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div>
          {/* corrected class to className */}
          <button type="button" className="btn btn-login  ">Login</button>
        </div>
      </div>
    );
  }
}

// export 
export default LoginForm;


