import React, { WeakValidationMap } from 'react';
import PT from 'prop-types';

import { classNames, intrinsicComponent, objectValues, orUndefined } from '@brix-ui/utils/functions';
import type { FlexElement } from '@brix-ui/types/html';
import { Direction as DirectionType, FlexContainer } from '@brix-ui/types/css';
import { alignable, stylableComponent, taggable } from '@brix-ui/prop-types/common';
import { extract } from '@brix-ui/prop-types/utils';
import Direction from '@brix-ui/contexts/direction';

import Block from '../block';

import type { FlexProps } from './flex.props';
import Styled from './flex.styles';

const Flex = intrinsicComponent<FlexProps, FlexElement>(function Flex(
  { children, className, as, direction = DirectionType.Row, align, hasWrap, isInline, ...props },
  ref
) {
  return (
    <Direction value={direction}>
      <Styled.Flex
        ref={ref}
        forwardedAs={as}
        className={classNames('flex', className)}
        $direction={direction}
        $align={align}
        data-wrap={orUndefined(hasWrap)}
        data-inline={orUndefined(isInline)}
        {...props}
      >
        {children}
      </Styled.Flex>
    </Direction>
  );
});

Flex.propTypes = {
  ...extract([Block]),
  ...taggable(objectValues(FlexContainer)),

  direction: PT.oneOf(objectValues(DirectionType)),

  isReversed: PT.bool,
  hasWrap: PT.bool,

  ...taggable(objectValues(FlexContainer)),
  ...alignable(),
  ...stylableComponent(),
} as WeakValidationMap<FlexProps>;

export default Flex;
