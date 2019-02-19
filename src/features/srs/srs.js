import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Header from '../common/header';
import './srs.scss';

export class SRS extends Component {
  static propTypes = {
    srs: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="srs-default-page">
        <Header />
        <iframe 
          className = 'frame' 
          src="https://docs.google.com/document/d/e/2PACX-1vS1LepGHFm6-m8W9oHF60_3JKvVwGx1MX37iRvVJERnYLOGhDjLezxbvm3lvxdZk9WbKBJtAsG9syeC/pub?embedded=true"
        >
        </iframe>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    srs: state.srs,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SRS);
