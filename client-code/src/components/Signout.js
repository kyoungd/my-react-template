import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'components/actions';

class Signout extends Component {
  componentDidMount() {
    if (!this.props.auth)
      this.props.history.push('/');
    this.props.signout();
}
  render() {
    return (
      <div>
        We are sorry to see you go!
      </div>
    )
  }
}

export default connect(null, actions) (Signout);
