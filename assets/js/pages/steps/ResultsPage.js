import React from 'react';

import BasePage from './BasePage';
import { connectToStores } from '../../utils/StoreUtils';
import SurveyStore from '../../stores/SurveyStore';
import { requireSkippable } from '../../utils/SurveyUtils';

class ResultsPage extends BasePage {
  constructor(props) {
    super(props);
  }

  render() {
    return <div></div>;
  }
}

ResultsPage.propTypes = {};
ResultsPage.defaultProps = {};

function pickProps({ params }) {
  return { params };
}

function getState({ params }) {
  const survey = SurveyStore.getDirtySurvey();
  return { survey };
}

export default requireSkippable(connectToStores(ResultsPage,
  [ SurveyStore ],
  pickProps,
  getState
));
