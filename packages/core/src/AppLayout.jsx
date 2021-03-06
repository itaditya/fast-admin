import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { Main } from './Main';
import classes from './AppLayout.module.css';

export function AppLayout(props) {
  const { children } = props;

  return (
    <div className={classes.appLayout}>
      <Navbar />
      <Sidebar />
      <Main>{children}</Main>
    </div>
  );
}
