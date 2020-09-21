import React from 'react';
import PT, { Requireable } from 'prop-types';

import { intrinsicComponent, objectValues } from '@brix-ui/utils/functions';
import { indent, stylableComponent, taggable } from '@brix-ui/prop-types/common';
import { record } from '@brix-ui/prop-types/utils';
import { Axis } from '@brix-ui/types/component';

import type { BlockProps } from './block.props';
import Styled from './block.styles';

const Block = intrinsicComponent<BlockProps>(function Block({ children, as, margin, padding, gap, ...props }, ref) {
  return (
    <Styled.Block ref={ref} as={as} $margin={margin} $padding={padding} $gap={gap} {...props}>
      {children}
    </Styled.Block>
  );
});

Block.propTypes = {
  isInline: PT.bool,
  margin: indent(),
  padding: indent(),
  gap: PT.oneOfType([PT.string, PT.exact(record(objectValues(Axis), PT.string))]) as Requireable<BlockProps['gap']>,

  ...taggable(),
  ...stylableComponent(),
};

export default Block;
