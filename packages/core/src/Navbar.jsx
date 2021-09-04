import React from 'react';
import classes from './Navbar.module.css';

export function Navbar(props) {
  const { children } = props;

  return (
    <header className={classes.navbar}>
      <div className={classes.logoContainer}>Logo</div>
      <nav className={classes.navlinkContainer}>Important Links</nav>
      <div className={classes.quickActionContainer}>Quick Actions</div>
      <div className={classes.actionsContainer}>
        <div>{children}</div>
        <div>
          <button>
            Logout Button
          </button>
        </div>
      </div>
    </header>
  );
}
