import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cx from 'clsx';
import { PinlinkBtn } from './PinlinkBtn';
import { getNavlinks } from '../routing/getNavlinks';
import { usePinnedLinksStore } from '../store/pinnedLinks';
import thinScrollCl from '../style-utils/thinScroll.module.css';
import cl from './Sidebar.module.css';

const navlinks = getNavlinks();

function getNavlink(link) {
  return navlinks.find((navlink) => navlink.to === link);
}

export function Sidebar(props) {
  const { children } = props;
  const { pinnedLinks } = usePinnedLinksStore();

  return (
    <aside className={cl.sidebar}>
      <nav className={cx(cl.navlinkContainer, thinScrollCl.scrollBar)}>
        <h3 className={cl.sectionTitle}>Pages</h3>
        <ul className={cl.navlinkList}>
          {navlinks.map((navlink) => {
            const { to, title } = navlink;

            return (
              <li key={to} className={cl.navlinkItem}>
                <NavLink to={to} className={cl.navLink} activeClassName={cl.activeNavLink}>
                  {title}
                </NavLink>
                <PinlinkBtn className={cl.pinlinkBtn} link={to} />
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={cl.pinnedLinkContainer}>
        <h3 className={cl.sectionTitle}>Pinned Pages</h3>
        <ul className={cl.pinlinkList}>
          {pinnedLinks.map((link) => {
            const { to, title } = getNavlink(link);

            return (
              <li key={to} className={cl.pinlinkItem}>
                <Link to={to} className={cl.pinlink}>
                  {title}
                </Link>
                <PinlinkBtn className={cl.pinlinkBtn} link={to} />
              </li>
            );
          })}
          {
            pinnedLinks.length === 0 ? (
              <p className={cl.emptyPinnedLinks}>No pins right now</p>
            ) : null
          }
        </ul>
      </div>
      <div className={cl.actionsContainer}>
        <div>{children}</div>
        <div>Powered by Fast Admin</div>
      </div>
    </aside>
  );
}
