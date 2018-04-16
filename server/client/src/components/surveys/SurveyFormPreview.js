import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formField from './formField';

const Preview = props => {
  const { formValues } = props;
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
      <h1>hi there</h1>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={props.onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(Preview);
