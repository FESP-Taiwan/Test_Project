// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import AccessButton from '../components/elements/AccessButton.jsx';
import AccessButtonPlus from '../components/elements/AccessButtonPlus.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
  },
};

type Props = {

};

class MainPage extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <AccessButton />
        <AccessButtonPlus />
      </div>
    );
  }
}

export default radium(MainPage);
