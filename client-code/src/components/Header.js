import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'components/HeaderStyle.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        { !this.props.auth && <Link to="/signup">Sign Up</Link> }
        { !this.props.auth && <Link to="/signin">Sign In</Link> }
        { this.props.auth && <Link to="/signout">Sign Out</Link>  }
        { this.props.auth && <Link to="/feature">Feature</Link> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth : state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);