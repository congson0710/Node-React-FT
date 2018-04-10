import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a class="left brand-logo">eMailee</a>
          <ul class="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToPros = ({ auth }) => ({
  auth,
});

export default connect(mapStateToPros)(Header);
