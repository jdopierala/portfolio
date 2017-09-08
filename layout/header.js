import React from 'react';
import Link from 'next/link';
import { css } from 'glamor';
import glamorous from 'glamorous';

export default () => {
  const SiteHeading = glamorous.h1({
    fontFamily: 'inherit',
    fontSize: '2rem',
    fontWeight: 200,
    textTransform: 'uppercase',
    padding: 0,
    margin: 0,
    //textAlign: 'center',
    //border: '1px dashed #555',
  });

  const DashedBorder = glamorous.div({
    border: '1px dashed #000',
    //borderRadius: '1px',
    backgroundColor: '#FED766',
    margin: '2vh 0',
    padding: '10px',
    width: '300px',
    display: 'flex',
    justifyContent: 'space-around',
  });

  const NavLink = glamorous.div({
    textDecoration: 'none',
    margin: '0',
    fontSize: '1.25rem',
    fontWeight: 500,
  });

  return (
    <header>
      <DashedBorder>
        <SiteHeading>Justin Dopierala</SiteHeading>
      </DashedBorder>
      <DashedBorder>
        <NavLink>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavLink>
        <NavLink>
          <Link href="projects">
            <a>Projects</a>
          </Link>
        </NavLink>
        <NavLink>
          <Link href="/twitter">
            <a>Twitter</a>
          </Link>
        </NavLink>
        <NavLink>
          <Link href="/email">
            <a>Email</a>
          </Link>
        </NavLink>
        <NavLink>
          <Link href="/github">
            <a>Github</a>
          </Link>
        </NavLink>
      </DashedBorder>
    </header>
  );
};
