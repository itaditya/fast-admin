import React from 'react';

export function Icon({ as, ...restProps }) {
  const Component = as;

  return <Component width="1em" height="1em" {...restProps} />
}
