import React from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormPreview from './SurveyFormPreview';

class SurveyNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFormPreview: false,
    };
  }

  renderContent() {
    if (this.state.showFormPreview) {
      return (
        <SurveyFormPreview
          onCancel={() => this.setState({ showFormPreview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormPreview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
