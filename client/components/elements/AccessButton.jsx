// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MemberActions from '../../actions/Member.js';

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
  storeAccessToken: Function,
  removeAccessToken: Function,
};

class AccessButton extends PureComponent<Props> {
  render() {
    const {
      accessToken,
      storeAccessToken,
      removeAccessToken,
    } = this.props;

    console.log(accessToken);

    return (
      <div style={styles.wrapper}>
        <button type="button" style={styles.button} onClick={() => storeAccessToken('Ting-accessToken')}>
          <span>store</span>
        </button>
        <button type="button" style={styles.button} onClick={() => removeAccessToken()}>
          <span>remove</span>
        </button>
        <p style={styles.text}>
          accessToken:
          <span>{accessToken}</span>
        </p>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    accessToken: state.Member.accessToken,
  }),
  dispatch => bindActionCreators({
    ...MemberActions,
  }, dispatch),
);

export default reduxHook(radium(AccessButton));
