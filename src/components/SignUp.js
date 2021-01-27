import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        <div className="field">
          <input type="text" placeholder="FirstName" required />
        </div>
        <div className="field">
          <input type="text" placeholder="LastName" required />
        </div>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Set Password" required />
        </div>
        <div className="field">
          <input type="text" placeholder="Phone-Number" required />
        </div>
        <div className="field">
          <button>SignUp</button>
        </div>
      </form>
    );
  }
}

export default SignUp;
