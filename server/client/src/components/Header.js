import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderContent() {
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
            <a>Logout</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a class="left brand-logo">eMailee</a>
          <ul class="right">
            <li>
              <a>Sign In With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToPros = ({ auth }) => ({
  auth,
});

export default connect(mapStateToPros)(Header);
