import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { stylableComponent } from '@brix-ui/prop-types/common';
import Text from '../text';

import type { TagProps } from './tag.props';
import Styled from './tag.styles';

const Tag = intrinsicComponent<TagProps, HTMLDivElement>(function Tag(
  { children, styles, className, color, backgroundColor, onClose, closeIcon, ...props },
  ref
) {
  return (
    <Styled.Container
      ref={ref}
      as={styles?.Container}
      $color={color}
      $backgroundColor={backgroundColor}
      className={className}
      {...props}
    >
      <Styled.Content forwardedAs={styles?.Content} align="center">
        <Text as="span" variant="small" lineHeightCompensation>
          {children}
        </Text>
      </Styled.Content>

      {onClose && (
        <Styled.CloseButton as={styles?.CloseButton} onClick={onClose}>
          {closeIcon || <Styled.CloseIcon as={styles?.CloseIcon} />}
        </Styled.CloseButton>
      )}
    </Styled.Container>
  );
});

Tag.propTypes = {
  color: PT.string,
  backgroundColor: PT.string,

  closeIcon: PT.element,
  onClose: PT.func,

  ...stylableComponent(Styled),
};

export default Tag;
