import React from 'react';
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
      return <SurveyFormPreview />;
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

export default SurveyNew;
