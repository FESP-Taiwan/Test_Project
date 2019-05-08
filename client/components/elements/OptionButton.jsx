// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    backgroundColor: '#563456',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
};

type Props = {

};

class OptionButton extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.text}>1</span>
      </div>
    );
  }
}

export default radium(OptionButton);
