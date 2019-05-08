// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    height: 47,
    backgroundColor: '#2b3f57',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 11px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 101,
  },
  text: {
    color: '#fff',
  },
};

type Props = {

};

class Header extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.text}>header</span>
      </div>
    );
  }
}

export default radium(Header);
