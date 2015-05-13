import Immutable, { Map } from 'immutable';
import React, { PropTypes } from 'react';
import { Col, Button, Input } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import { FormattedMessage as FM, IntlMixin } from '../../shims/ReactIntl';
import reactMixin from 'react-mixin';
import { Link } from 'react-router';

import { requireUnauth } from '../../utils/AuthUtils';
import BaseComponent from '../../utils/BaseComponent';
import locals from '../../utils/locals';
import { connectToStores } from '../../utils/StoreUtils';
import UserActionCreators from '../../actions/UserActionCreators';
import UserStore from '../../stores/UserStore';

class RegisterPage extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('_handleSubmit');
    this.state = {
      data: Immutable.fromJS({
        name: { first: '', last: '' },
        email: '',
        fund: { name: '', abn: '' },
        doesConsent: false,
        notifications: { newsletter: false },
      }),
    };
  }

  componentWillMount() {
    UserActionCreators.clearSignup();
  }

  componentDidMount() {
    this.refs.firstName.getInputDOMNode().focus();
  }

  componentWillUnmount() {
    UserActionCreators.clearSignup();
  }

  render() {
    const { registeredUser } = this.props;
    return (
      <DocumentTitle title={`${locals.name} - ${this.formatMessage(this.getIntlMessage('register.title'))}`}>
        {registeredUser ? this.renderSuccess() : this.renderForm()}
      </DocumentTitle>
    );
  }

  renderForm() {
    const { data } = this.state;
    const { submitting, registeredUser, error } = this.props;

    return (
      <form autoComplete='off' noValidate onSubmit={this._handleSubmit}>
        {error && <div className='alert alert-danger'>{error.message}</div>}
        <p><FM message={this.getIntlMessage('register.intro')} /></p>
        <div className='prepend-xs-2 append-xs-1 clearfix'>
          <Col md={6}>
            <Input ref='firstName' type='text' bsSize='large'
              placeholder={this.formatMessage(this.getIntlMessage('shared.fields.user.firstName.placeholder'))}
              value={data.getIn(['name', 'first'])} onChange={this._handleInputChange.bind(this, 'name.first', void 0)}
              disabled={submitting} />
          </Col>
          <Col md={6}>
            <Input type='text' bsSize='large'
              placeholder={this.formatMessage(this.getIntlMessage('shared.fields.user.lastName.placeholder'))}
              value={data.getIn(['name', 'last'])} onChange={this._handleInputChange.bind(this, 'name.last', void 0)}
              disabled={submitting} />
          </Col>
          <Col md={12}>
            <Input type='email' bsSize='large'
              placeholder={this.formatMessage(this.getIntlMessage('shared.fields.user.email.placeholder'))}
              value={data.get('email')} onChange={this._handleInputChange.bind(this, 'email', void 0)}
              disabled={submitting} />
          </Col>
          <Col md={12}>
            <Input type='text' bsSize='large'
              placeholder={this.formatMessage(this.getIntlMessage('shared.fields.user.fundName.placeholder'))}
              value={data.getIn(['fund', 'name'])} onChange={this._handleInputChange.bind(this, 'fund.name', void 0)}
              disabled={submitting} />
          </Col>
          <Col md={12}>
            <Input type='text' bsSize='large'
              placeholder={this.formatMessage(this.getIntlMessage('shared.fields.user.fundAbn.placeholder'))}
              value={data.getIn(['fund', 'abn'])} onChange={this._handleInputChange.bind(this, 'fund.abn', void 0)}
              disabled={submitting} />
          </Col>
          <Col md={12} className='append-xs-tiny text-left'>
            <Input type='checkbox'
              label={this.formatMessage(this.getIntlMessage('shared.fields.user.doesConsent.label'), { brand: locals.brand })}
              checked={data.get('doesConsent')} onChange={this._handleCheckboxToggled.bind(this, 'doesConsent')}
              disabled={submitting} />
            <Input type='checkbox'
              label={this.formatMessage(this.getIntlMessage('shared.fields.user.notifications.label'), { brand: locals.brand })}
              checked={data.getIn(['notifications', 'newsletter'])}
              onChange={this._handleCheckboxToggled.bind(this, 'notifications.newsletter')}
              disabled={submitting} />
          </Col>
        </div>
        <Button bsStyle='default' bsSize='large' className='append-xs-1'
          componentClass='button' type='submit'
          disabled={submitting || !data.get('doesConsent')}>
          {submitting ?
            this.formatMessage(this.getIntlMessage('register.submit.loadingLabel')) :
            this.formatMessage(this.getIntlMessage('register.submit.actionLabel'))}
        </Button>
        <p className='append-xs-none'>
          <FM message={this.getIntlMessage('register.already.note')} />{' '}
          <Link to='signin'>
            <FM message={this.getIntlMessage('register.already.actionLabel')} />
          </Link>
        </p>
      </form>
    );
  }

  renderSuccess() {
    return (
      <p className='append-xs-none'>
        <FM message={this.getIntlMessage('register.sucessful')} />{' '}
      </p>
    );
  }

  _handleSubmit(e) {
    UserActionCreators.signup(this.state.data.toJS());
    e.preventDefault();
  }
}

reactMixin.onClass(RegisterPage, IntlMixin);

RegisterPage.propTypes = {
  submitting: PropTypes.bool,
  registeredUser: PropTypes.instanceOf(Map),
  error: PropTypes.shape({
    message: PropTypes.string,
    errors: PropTypes.object,
  }),
};

RegisterPage.defaultProps = {
  submitting: false,
  registeredUser: void 0,
  error: void 0
};

function pickProps({ params }) {
  return { params };
}

function getState({ params }) {
  const submitting = UserStore.signingUp();
  const registeredUser = UserStore.getRegisteredUser();
  const error = UserStore.getSignupError();
  return { submitting, registeredUser, error };
}

export default requireUnauth(connectToStores(RegisterPage,
  [ UserStore ],
  pickProps,
  getState
));

