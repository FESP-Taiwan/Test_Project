// @flow

import React from 'react';
import {
  reduxForm,
  Field,
  formValueSelector,
} from 'redux-form';
import { CIRCLE_FORM } from '../../shared/form.js';
import CircleList from './CircleList.jsx';

const styles = {
  wrapper: {

  },
};

function CircleBoard({
  handleSubmit,
}) {
  return (
    <form style={styles.wrapper} onSubmit={handleSubmit(d => console.log(d))}>
      <Field
        name="clickedButton"
        component={CircleList} />
    </form>
  );
}

const formHook = reduxForm({
  form: CIRCLE_FORM,
  initialValues: {
    clickedButton: '',
  },
});

export default formHook(CircleBoard);
