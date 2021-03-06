import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function Setup(props) {
  const { children } = props;

  return (
    <Suspense fallback={<div>Application Loading....</div>}>
      <BrowserRouter>{children}</BrowserRouter>
    </Suspense>
  );
}
