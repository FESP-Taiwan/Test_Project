// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  reduxForm,
  Field,
  formValueSelector,
} from 'redux-form';
import * as MemberActions from '../../actions/Member.js';
import { SAMPLE_FORM } from '../../shared/form.js';
import TextInput from '../form/TextInput.jsx';

const selector = formValueSelector(SAMPLE_FORM);

const styles = {
  wrapper: {
    backgroundColor: '#563456',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    width: 64,
    height: 24,
    cursour: 'pointer',
    outline: 0,
    margin: '0 12px',
    backgroundColor: '#fff',
    border: 0,
    borderRadius: 4,
  },
};

type Props = {
  accessToken: string,
  tokenFromSelector: string,
  storeAccessToken: Function,
  removeAccessToken: Function,
  handleSubmit: Function,
};

class AccessButtonPlus extends PureComponent<Props> {
  submit({
    accessToken,
  }) {
    const {
      storeAccessToken,
    } = this.props;

    storeAccessToken(accessToken);
  }

  render() {
    const {
      accessToken,
      removeAccessToken,
      handleSubmit,
      tokenFromSelector,
    } = this.props;

    return (
      <form style={styles.wrapper} onSubmit={handleSubmit(d => this.submit(d))}>
        <Field
          name="accessToken"
          placeholder="accessToken"
          component={TextInput} />
        <button type="submit" style={styles.button}>
          <span>store</span>
        </button>
        <button type="button" style={styles.button} onClick={() => removeAccessToken()}>
          <span>remove</span>
        </button>
        <div>
          <p style={styles.text}>
            accessToken:
            <span>{accessToken}</span>
          </p>
          <p style={styles.text}>
            tokenFromSelector:
            <span>{tokenFromSelector}</span>
          </p>
        </div>
      </form>
    );
  }
}

const reduxHook = connect(
  state => ({
    accessToken: state.Member.accessToken,
    tokenFromSelector: selector(state, 'accessToken'),
  }),
  dispatch => bindActionCreators({
    ...MemberActions,
  }, dispatch),
);

const formHook = reduxForm({
  form: SAMPLE_FORM,
  initialValues: {
    accessToken: '',
  },
});


export default formHook(reduxHook(radium(AccessButtonPlus)));
