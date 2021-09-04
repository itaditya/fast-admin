import React from 'react';
import cx from 'clsx';
import { DrawingPinIcon, DrawingPinFilledIcon } from '@radix-ui/react-icons';
import { usePinnedLinksStore } from '../store/pinnedLinks';
import cl from './PinlinkBtn.module.css';

const iconProps = {
  width: '1em',
  height: '1em',
};

export function PinlinkBtn(props) {
  const { link, className, ...restProps } = props;
  const { pinnedLinks, pinLink, unpinLink } = usePinnedLinksStore();

  const isPinned = pinnedLinks.includes(link);

  function handleClick() {
    if (isPinned) {
      unpinLink(link);
      return;
    }

    pinLink(link);
  }

  return (
    <button {...restProps} className={cx(className, cl.pinlinkBtn)} onClick={handleClick}>
      {isPinned ? <DrawingPinFilledIcon {...iconProps} /> : <DrawingPinIcon {...iconProps} />}
    </button>
  );
}
