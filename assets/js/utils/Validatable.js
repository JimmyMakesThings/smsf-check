import _ from 'lodash';
import Joi from 'joi';

import BaseComponent from './BaseComponent';

export default class Validatable extends BaseComponent {
  constructor(props) {
    super(props);
  }

  getErrorProps(path) {
    return {
      help: this._getErrorMessage(path),
      bsStyle: this._getBsStyle(path),
    };
  }

  _getErrorMessage(path) {
    const error = this.state.data.get('errors');
    const message = (_.find(error, { path }) || {}).message;
    if (message) { return message.replace(/"/g, ''); }
    return message;
  }

  _getBsStyle(path) {
    return this._getErrorMessage(path) && 'error';
  }

  validate() {
    const result = Joi.validate(this.state.data.toJS(), this.constructor.schema, {
      abortEarly: false,
      allowUnknown: true
    });
    this._setState('errors', result.error ? result.error.details : []);
    return !result.error;
  }
}

