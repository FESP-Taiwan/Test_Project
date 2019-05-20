// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import {
  Field,
  reduxForm,
} from 'redux-form';
import { withRouter } from 'react-router';
import {
  compose,
} from 'redux';
import { REGISTER_FORM } from '../shared/form';
import RegisterTextForm from '../components/form/RegisterTextForm.jsx';
import accountIcon from '../static/images/account-icon.png';
import passwordIcon from '../static/images/lock-icon.png';
import verifyingIcon from '../static/images/shield-icon.png';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#333',
  },
  mainForm: {
    width: '100%',
    overflow: 'auto',
  },
  mainFormContent: {
    width: 330,
    margin: '0 auto',
    '@media (max-width: 1023px)': {
      width: 300,
    },
  },
  verifyWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    margin: '4px 0 0 0',
  },
  verifyIconWrapper: {
    width: 148,
    height: 58,
    margin: '0 47.5px 0 0',
    backgroundColor: '#d8d8d8',
  },
  spinner: {
    padding: 0,
    outline: 0,
    border: 0,
    margin: '0 0 0 48px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
  spinIcon: {
    height: 24,
  },
  submitButton: {
    width: 329,
    height: 58,
    minHeight: 58,
    margin: '16px 0 0 0',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    backgroundImage: 'linear-gradient(to bottom, #40cdc4 0%, #40cdc4 50%, #03b5aa 50%, #03b5aa 100%)',
    '@media (max-width: 1023px)': {
      width: 300,
      height: 40,
      minHeight: 40,
      lineHeight: '40px',
    },
  },
  submitText: {
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: 1.4,
    textAlign: 'center',
    color: '#eff1ed',
    '@media (max-width: 1023px)': {
      fontSize: 16,
    },
  },
};

type Props = {
  handleSubmit: Function,
};

class MainPage extends PureComponent<Props> {
  async submit({
    account,
    username,
    password,
    passwordConfirm,
  }) {
    if (!account) {
      alert('请输入您的帐号');

      return;
    }

    if (!username) {
      alert('请输入您的昵称');

      return;
    }

    if (!password) {
      alert('请输入密码');

      return;
    }

    if (password !== passwordConfirm) {
      alert('确认密码不相符');

      return;
    }

    alert('注册成功');
  }

  render() {
    const {
      handleSubmit,
    } = this.props;

    return (
      <form style={styles.wrapper} onSubmit={handleSubmit(d => this.submit(d))}>
        <div style={styles.mainForm}>
          <div style={styles.mainFormContent}>
            <Field
              name="account"
              placeholder="帐号"
              alt="accountIcon"
              icon={accountIcon}
              component={RegisterTextForm} />
            <Field
              name="username"
              placeholder="昵称"
              alt="accountIcon"
              icon={accountIcon}
              component={RegisterTextForm} />
            <Field
              type="password"
              name="password"
              placeholder="密码"
              alt="passwordIcon"
              icon={passwordIcon}
              component={RegisterTextForm} />
            <Field
              type="password"
              name="passwordConfirm"
              placeholder="密码确认"
              alt="passwordIcon"
              icon={passwordIcon}
              component={RegisterTextForm} />
          </div>
        </div>
        <button style={styles.submitButton} type="submit">
          <span style={styles.submitText}>注册</span>
        </button>
      </form>
    );
  }
}

const formHook = reduxForm({
  form: REGISTER_FORM,
  initialValues: {
    account: '',
    username: '',
    password: '',
    passwordConfirm: '',
  },
});

export default compose(
  withRouter,
  formHook,
  radium,
)(MainPage);
