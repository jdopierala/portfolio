import React from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';

export default () => {
  const SiteHeading = glamorous.h1({
    fontFamily: '"Roboto Condensed", monospace',
    fontSize: '1.8rem',
    fontWeight: 300,
    textTransform: 'uppercase',
    padding: 0,
    margin: 0,
    //border: '1px dashed #555',
  });

  const DashedBorder = glamorous.div({
    border: '0.2vw dashed #555',
    backgroundColor: '#FED766',
    margin: '1vh',
    padding: '2vh',
  });

  return (
    <header>
      <DashedBorder>
        <SiteHeading>Justin Dopierala</SiteHeading>
      </DashedBorder>
    </header>
  );
};
