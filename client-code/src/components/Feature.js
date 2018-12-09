import React, { Component } from 'react'
import authenticated from 'components/hoc/authenticated';

class Feature extends Component {
  render() {
    return (
      <div>
        This is the feature.
      </div>
    )
  }
}

export default authenticated(Feature);
