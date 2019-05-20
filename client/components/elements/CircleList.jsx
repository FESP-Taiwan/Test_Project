// @flow

import React from 'react';

const styles = {

};

function CircleList({
  input: {
    value,
    onChange,
  },
}) {
  const {
    numbers,
  } = CircleList;

  return (
    <div style={styles.wrapper}>
      {numbers.map(number => (
        <button type="button" onClick={() => onChange(number)}>{number}</button>
      ))}
    </div>
  );
}

CircleList.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export default CircleList;
