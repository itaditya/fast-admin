import React from 'react';
import cx from 'clsx';
import { DrawingPinIcon, DrawingPinFilledIcon } from '@radix-ui/react-icons';
import { Icon } from '../Icon';
import { usePinnedLinksStore } from '../store/pinnedLinks';
import cl from './PinlinkBtn.module.css';

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
      <Icon as={isPinned ? DrawingPinFilledIcon : DrawingPinIcon} />
    </button>
  );
}
