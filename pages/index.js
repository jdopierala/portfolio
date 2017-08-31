import React from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';
import Layout from '../layout';

export default () => {
  const PageHeading = glamorous.h2({
    fontFamily: '"Roboto Condensed", monospace',
    fontSize: '10rem',
    fontWeight: '300',
    fontStyle: 'italic',
    padding: 0,
    margin: 0,
    color: '#1c1c1c',
  });
  const DashedBorder1 = glamorous.div({
    border: '0.2vw dashed #555',
    backgroundColor: '#77D1DD',
    margin: '3vh 1vh 1vh 1vh',
    padding: '2vh',
  });
  const DashedBorder2 = glamorous.div({
    border: '0.2vw dashed #555',
    backgroundColor: '#FE7B7A',
    margin: '3vh 1vh 1vh 1vh',
    padding: '2vh',
    fontSize: '2.4rem',
    fontWeight: '300',
  });
  const DashedBorder = glamorous.div({
    border: '0.2vw dashed #555',
    backgroundColor: '#FED766',
    margin: '3vh 1vh 1vh 1vh',
    padding: '2vh',
    fontSize: '2.4rem',
    fontWeight: '300',
  });
  return (
    <Layout>
      <DashedBorder1>
        <PageHeading>Hey! I'm &hellip;</PageHeading>
      </DashedBorder1>
      <DashedBorder2>
        <p>Justin.</p>
      </DashedBorder2>
      <DashedBorder2>
        <p>Web Developer in training.</p>
      </DashedBorder2>
      <DashedBorder2>
        <p>Melbourne based.</p>
      </DashedBorder2>
      <DashedBorder2>
        <p>Documenting what I want to share with the world.</p>
      </DashedBorder2>
      <DashedBorder>
        <p>Thank you!</p>
      </DashedBorder>
    </Layout>
  );
};
