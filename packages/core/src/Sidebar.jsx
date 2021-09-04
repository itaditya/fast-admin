import React from 'react';
import cx from 'clsx';
import thinScrollClasses from './style-utils/thinScroll.module.css';
import classes from './Sidebar.module.css';

export function Sidebar(props) {
  const { children } = props;

  return (
    <aside className={classes.sidebar}>
      <nav className={cx(classes.navlinkContainer, thinScrollClasses.scrollBar)}>
        <ul className={classes.navlinkList}>
          <li className={classes.navLink}>Lorem ipsum dolor sit amet</li>
          <li className={classes.navLink}>Lorem ipsum dolor sit</li>
          <li className={classes.navLink}>ipsum dolor sit amet</li>
          <li className={classes.navLink}>Lorem ipsum dolor sit amet</li>
        </ul>
      </nav>
      <div className={classes.pinnedLinkContainer}>Pinned Links</div>
      <div className={classes.actionsContainer}>
        <div>{children}</div>
        <div>Powered by fast-admin</div>
      </div>
    </aside>
  );
}
