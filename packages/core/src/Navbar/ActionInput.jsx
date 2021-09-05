import React from 'react';
import { Close } from '@radix-ui/react-dialog';
import { MagnifyingGlassIcon, Cross1Icon } from '@radix-ui/react-icons';
import { Icon } from '../Icon';
import cl from './ActionInput.module.css';

export function ActionInput(props) {
  return (
    <label className={cl.label}>
      <Icon as={MagnifyingGlassIcon} className={cl.searchIcon} />
      <input type="text" className={cl.input} {...props} />
      <Close className={cl.closeBtn}>
        <Icon as={Cross1Icon} />
      </Close>
    </label>
  );
}
