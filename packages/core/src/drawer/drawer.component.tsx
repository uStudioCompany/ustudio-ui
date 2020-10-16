import React from 'react';
import PT from 'prop-types';

import { Position } from '@brix-ui/types/css';
import { disclosable, stylableComponent, unmountable } from '@brix-ui/prop-types/common';
import { classNames, intrinsicComponent, objectValues, tryCall } from '@brix-ui/utils/functions';
import { useModal } from '@brix-ui/contexts/modal';
import useKeyPressHandle from '@brix-ui/hooks/use-key-press-handle';

import Portal from '../portal';

import type { DrawerProps } from './drawer.props';
import Styled from './drawer.styles';

const Drawer = intrinsicComponent<DrawerProps, HTMLDivElement>(function Drawer(
  {
    children,
    className,
    customProperties,
    position,
    unmountOnExit,
    isOpen,
    transitionSpeed,
    onOpen,
    onChange,
    onClose,
    ...props
  },
  ref
) {
  const { shouldBeOpen, shouldMount, toggle } = useModal({
    isOpen,
    onOpen,
    onChange,
    onClose,
    unmountOnExit,
    transitionSpeed,
  });

  const handleClose = useKeyPressHandle<HTMLDivElement>((event) => {
    tryCall(props.onKeyUp, event);

    toggle(false);
  }, 'Escape');

  return shouldMount ? (
    <Portal>
      <Styled.Drawer
        ref={ref}
        forwardedAs="aside"
        className={classNames('drawer', className)}
        customProperties={customProperties}
        isOpen={shouldBeOpen}
        transitionSpeed={transitionSpeed}
        $position={position}
        lockProps={{ 'aria-modal': true, 'aria-expanded': shouldBeOpen, onKeyUp: handleClose, ...props }}
      >
        {children}
      </Styled.Drawer>
    </Portal>
  ) : null;
});

Drawer.propTypes = {
  position: PT.oneOf(objectValues(Position)).isRequired,

  ...disclosable,
  ...unmountable,
  ...stylableComponent(['borderRadius', 'overflow']),
};

export default Drawer;
