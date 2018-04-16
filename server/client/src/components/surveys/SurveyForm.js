import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyFields';
import validateEmails from '../../ultis/validateEmail';

const FIELD = [
  { label: 'Survey Title', name: 'title', errorMessage: 'Can not be empty' },
  {
    label: 'Survey Subject',
    name: 'subject',
    errorMessage: 'Can not be empty',
  },
  { label: 'Survey Email', name: 'email', errorMessage: 'Can not be empty' },
  {
    label: 'Survey Recipient list',
    name: 'recipients',
    errorMessage: 'Can not be empty',
  },
];

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(FIELD, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next<i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const error = {};

  _.each(FIELD, ({ name, errorMessage }) => {
    if (!values[name]) {
      error[name] = errorMessage;
    }
  });

  error.recipients = validateEmails(values.recipients || '');

  return error;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
