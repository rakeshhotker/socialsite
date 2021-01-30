import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rakesh',
      Email: 'rakeshhotker@gmail.com',
    };
  }
  render() {
    const { name, Email } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-pic"
          />
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{name}</div>
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{Email}</div>
        </div>
        <button className="button save-btn">ADD FRIEND</button>
      </div>
    );
  }
}

function mapStateToProps({ post }) {
  return {
    post,
  };
}
export default connect(mapStateToProps)(Users);
