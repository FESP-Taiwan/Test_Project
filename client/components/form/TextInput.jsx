// @flow

import React, { PureComponent } from 'react';

const styles = {
  wrapper: {
    width: 150,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0 4px',
  },
  textInput: {
    width: '100%',
    outline: 'none',
    fontSize: 12,
    letterSpacing: 1,
    color: '#4a4a4a',
    padding: '0 4px',
  },
};

type Props = {
  placeholder: string,
  input: {
    name: string,
    onChange: Function,
    value: string,
  },
}

class TextInput extends PureComponent<Props> {
  render() {
    const {
      placeholder,
      input: {
        onChange,
        value,
      },
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <input
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          onChange={onChange} />
      </div>
    );
  }
}

export default TextInput;
