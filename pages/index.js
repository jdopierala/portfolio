import React from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';
import Layout from '../layout';

export default () => {
  const PageHeading = glamorous.h2({
    fontFamily: 'inherit',
    fontSize: '5rem',
    fontWeight: '900',
    fontStyle: 'normal',
    padding: 0,
    margin: 0,
    color: '#1c1c1c',
  });

  return (
    <Layout>
      <PageHeading>Hey! I'm &hellip;</PageHeading>

      <p>Justin.</p>

      <p>Web developer in training.</p>

      <p>From Melbourne, Australia.</p>

      <p>Here to document what I want to share with the world.</p>

      <p>Enjoy</p>

      <p>&</p>

      <p>Reach out to me!</p>
    </Layout>
  );
};
