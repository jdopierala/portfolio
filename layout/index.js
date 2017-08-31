import React from 'react';
import Head from 'next/head';
import { rehydrate, css } from 'glamor';
import glamorous from 'glamorous';
import Header from './header';
import Footer from './footer';
import 'glamor/reset';

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids);
}

export default ({ children, title = 'Justin Dopierala' }) => {
  css.global('html, body', {
    background: '#F4F4F8',
    //background: '#F1F1F1',
    minHeight: '100%',
    fontFamily:
      '"Roboto", system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
    fontSize: '10px',
    fontWeight: 300,
    lineHeight: 1,
  });

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable=yes, user-scalable=1, width=device-width"
        />
        <title>{title}</title>
        <meta
          name="description"
          content="web developer in training - learning, yearning, ... concerning"
        />
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
};
