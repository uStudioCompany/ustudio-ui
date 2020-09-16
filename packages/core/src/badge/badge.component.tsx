import React, { isValidElement } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';
import { stylableComponent } from '@ustudio-ui/prop-types/common';
import { Align } from '@ustudio-ui/types/css';

import type { BadgeProps } from './badge.props';
import Styled from './badge.styles';

const Badge = intrinsicComponent<BadgeProps, HTMLDivElement>(function Badge(
  { children, styles, className, color, backgroundColor, value, shouldDisplay = true, ...props },
  ref
) {
  return (
    <Styled.BadgeContainer as={styles?.BadgeContainer}>
      {children}

      {shouldDisplay && (
        <Styled.Badge
          as={styles?.Badge}
          ref={ref}
          hasChildren={isValidElement(children)}
          $color={color}
          $backgroundColor={backgroundColor}
          $value={value}
          className={className}
          {...props}
        >
          {value}
        </Styled.Badge>
      )}
    </Styled.BadgeContainer>
  );
});

const badgePositionPropTypes = PT.oneOf([Align.Start, Align.End, Align.Center]);

Badge.propTypes = {
  color: PT.string,
  backgroundColor: PT.string,

  horizontalPosition: badgePositionPropTypes,
  verticalPosition: badgePositionPropTypes,
  horizontalOffset: PT.string,
  verticalOffset: PT.string,

  shouldDisplay: PT.bool,
  value: PT.oneOfType([PT.string, PT.number]),

  ...stylableComponent(Styled),
};

export default Badge;
