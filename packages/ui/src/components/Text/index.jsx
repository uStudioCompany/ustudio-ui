import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';

import { Styled } from './styles';

function renderElement({ variant, appearance }) {
  if (appearance === 'bold') {
    return 'strong';
  }

  if (appearance === 'italic') {
    return 'em';
  }

  switch (variant) {
    case 'code':
    case 'small':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant;
    case 'caption':
      return 'small';
    case 'article':
    case 'body':
      return 'p';
    case 'span':
    default:
      return 'span';
  }
}

const Text = forwardRef(function Text(
  { children = '', variant = 'body', align = 'left', appearance = 'regular', className = '', classNames, ...htmlAttributes },
  ref
) {
  return (
    <Styled.Text
      as={renderElement({ variant, appearance })}
      ref={ref}
      variant={variant}
      align={align}
      appearance={appearance}
      className={`${classNames?.Text || ''} ${className}`}
      {...htmlAttributes}
    >
      {children}
    </Styled.Text>
  );
});

Text.displayName = 'Text';

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: common.text,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  appearance: PropTypes.oneOf(['regular', 'italic', 'underlined', 'bold']),
  ...classNames(Object.keys(Styled)),
};

Text.defaultProps = {
  children: '',
  variant: 'body',
  align: 'left',
  appearance: 'regular',
};

export default Text;
