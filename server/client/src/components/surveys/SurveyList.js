import React from 'react';
import { connect } from 'react-redux';

import { fetchSurveys } from '../../actions/index';

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.survey.map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="cart-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ survey }) => {
  return { survey };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
