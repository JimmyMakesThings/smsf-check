import Immutable from 'immutable';
import Joi from 'joi';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormattedMessage as FM } from '../../shims/ReactIntl';

import BasePage from './BasePage';
import locals from '../../utils/locals';
import RadioQuestion from '../../components/RadioQuestion';
import { connectToStores } from '../../utils/StoreUtils';
import SurveyForm from './SurveyForm';
import SurveyStore from '../../stores/SurveyStore';
import { requireSkippable } from '../../utils/SurveyUtils';

class AccountingPage extends BasePage {
  constructor(props) {
    super(props);
    this.bind('renderForm', 'renderChart');
  }

  render() {
    return (
      <SurveyForm {...this.props}
        renderForm={this.renderForm}
        renderChart={this.renderChart}
        prevRoute='trust' nextRoute='investment-advice'>
      </SurveyForm>
    );
  }

  renderForm() {
    return (
      <div>
        {this.renderWhoDoesAccounting()}
        {this.renderAccountingCostPerYear()}
      </div>
    );
  }

  renderChart() {
    return <div></div>;
  }

  renderWhoDoesAccounting() {
    const { data } = this.state;
    const { submitting } = this.props;

    const radioData = {
      question: this.getIntlMessage('accounting.whoDoesAccounting.question'),
      options: this.translatedOptions('accounting.whoDoesAccounting.options'),
      valueLink: this.valueLink('survey.whoDoesAccounting'),
      disabled: submitting,
      error: this.getErrorProps('survey.whoDoesAccounting').help,
    };

    return (
      <Row>
        <Col xs={24}>
          <RadioQuestion {...radioData}></RadioQuestion>
        </Col>
      </Row>
    );
  }

  renderAccountingCostPerYear() {
    const { data } = this.state;
    const { submitting } = this.props;

    const radioData = {
      question: this.getIntlMessage('accounting.accountCostPerYear.question'),
      options: this.translatedOptions('accounting.accountCostPerYear.options'),
      valueLink: this.valueLink('survey.accountCostPerYear'),
      disabled: submitting,
      error: this.getErrorProps('survey.accountCostPerYear').help,
    };

    return (
      <Row>
        <Col xs={24}>
          <RadioQuestion {...radioData}></RadioQuestion>
        </Col>
      </Row>
    );
  }
}

AccountingPage.propTypes = {};
AccountingPage.defaultProps = {};

AccountingPage.schema = {
  survey: {
    whoDoesAccounting: Joi.string().required().label('This field'),
    accountCostPerYear: Joi.string().required().label('This field'),
  },
};

function pickProps({ params }) {
  return { params };
}

function getState({ params }) {
  const survey = SurveyStore.getDirtySurvey();
  const submitting = SurveyStore.isSaving();
  const skippable = SurveyStore.isSkippable();
  return { survey, submitting, skippable };
}

export default requireSkippable(connectToStores(AccountingPage,
  [ SurveyStore ],
  pickProps,
  getState
));
