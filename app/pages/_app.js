import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    /* eslint-disable react/jsx-props-no-spreading */
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
    /* eslint-enable react/jsx-props-no-spreading */
  }
}

export default withReduxStore(MyApp);
