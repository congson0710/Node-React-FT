import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <Link to={this.props.auth ? '/surveys' : '/'} class="left brand-logo">
            eMailee
          </Link>
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
