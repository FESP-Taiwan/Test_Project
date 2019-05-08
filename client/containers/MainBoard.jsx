// @flow

import React, {
  PureComponent,
  Fragment,
} from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './Header.jsx';
import MainPage from './MainPage.jsx';

const styles = {
  placement: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
  },
  main: {
    width: '100%',
    margin: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    padding: '47px 0 0 0',
    overflowX: 'auto',
  },
  mainWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
};

type Props = {

};

class MainBoard extends PureComponent<Props> {
  render() {
    return (
      <Fragment>
        <Header />
        <div style={styles.placement}>
          <main style={styles.main}>
            <div style={styles.mainWrapper}>
              <Switch>
                <Route path="/" component={MainPage} />
                <Redirect to="/" />
              </Switch>
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default MainBoard;
