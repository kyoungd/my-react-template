import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'components/actions';

class Signup extends Component {
  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.signup(formProps, ()=> {
      this.props.history.push('/feature')
    });
  };

  render() {
    const { handleSubmit } = this.props;    // this is from redux-form

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="true"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field 
            name="password"
            type="password"
            component="input"
            autoComplete="true"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' }),
)(Signup);
