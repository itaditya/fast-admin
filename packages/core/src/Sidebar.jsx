import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'clsx';
import { getNavlinks } from './routing/getNavlinks';
import thinScrollCl from './style-utils/thinScroll.module.css';
import cl from './Sidebar.module.css';

const navlinks = getNavlinks();

export function Sidebar(props) {
  const { children } = props;

  return (
    <aside className={cl.sidebar}>
      <nav className={cx(cl.navlinkContainer, thinScrollCl.scrollBar)}>
        <h3 className={cl.sectionTitle}>Pages</h3>
        <ul className={cl.navlinkList}>
          {navlinks.map((navlink) => {
            return (
              <li key={navlink.to}>
                <NavLink to={navlink.to} className={cl.navLink} activeClassName={cl.activeNavLink}>
                  {navlink.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={cl.pinnedLinkContainer}>
        <h3 className={cl.sectionTitle}>Pinned Pages</h3>
        <p>Item 1</p>
        <p>Item 2</p>
      </div>
      <div className={cl.actionsContainer}>
        <div>{children}</div>
        <div>Powered by Fast Admin</div>
      </div>
    </aside>
  );
}
