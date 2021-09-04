import React, { Suspense } from 'react';
import classes from './Main.module.css';

export function Main(props) {
  const { children } = props;

  return (
    <main className={classes.main}>
      <Suspense fallback={<div>Loading....</div>}>
        <div>{children}</div>
      </Suspense>
    </main>
  );
}
