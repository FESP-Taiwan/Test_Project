// @flow

import * as React from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    height: 50,
    position: 'relative',
    margin: '0 0 20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    border: 'solid 2px #4a6588',
    padding: '0 10px',
    '@media (max-width: 1023px)': {
      height: 38,
      margin: '0 0 15px 0',
    },
  },
  iconWrapper: {
    width: 15,
    height: 20,
  },
  textInput: {
    flexGrow: 1,
    height: '100%',
    fontSize: 20,
    letterSpacing: 1,
    outline: 0,
    backgroundColor: 'transparent',
    border: 0,
    color: '#fff',
    padding: '0 0 0 10px',
    minWidth: 160,
  },
  noRightPadding: {
    padding: '0 0 0 13px',
  },
};

type Props = {
  placeholder: string,
  icon: string,
  alt: string,
  type?: 'text' | 'password',
  input: {
    name: string,
    onChange: Function,
    value: string,
  },
}

class RegisterTextForm extends React.PureComponent<Props> {
  static defaultProps = {
    type: 'text',
  };

  render() {
    const {
      placeholder,
      icon,
      alt,
      type,
      input: {
        onChange,
        value,
      },
    } = this.props;

    return (
      <div
        style={styles.wrapper}>
        <img style={styles.iconWrapper} src={icon} alt={alt} />
        <input
          type={type}
          className="login-form-input"
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
      </div>
    );
  }
}

export default radium(RegisterTextForm);
