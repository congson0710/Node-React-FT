import React from 'react';

class Header extends React.Component {
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

export default Header;
