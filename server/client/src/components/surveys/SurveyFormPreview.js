import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import formField from './formField';
import * as actions from '../../actions';

const Preview = props => {
  const { formValues, submitSurvey, history } = props;
  const reviewFields = _.map(formField, field => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h1>Confirm your entries</h1>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={props.onCancel}>
        Back
      </button>
      <button
        className="green btn-flat right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(Preview));
