import { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { sc } from '../../../utils';

import { inject } from './inject';

const SwitchContainer = sc('span')(
  ({ isDisabled }) => css`
    display: flex;
    align-items: center;

    width: var(--i-large);
    height: var(--i-regular);

    position: relative;

    cursor: pointer;

    ${inject.disabledStyles(isDisabled)}
  `
)('SwitchContainer');

const Switch = sc('span')(
  ({ alternative }) => css`
    ${Mixin.Style.borderAll({ color: 'var(--c-primary)' })};

    display: flex;
    align-items: center;
    overflow: hidden;

    width: 100%;
    height: 100%;

    position: relative;

    background: var(--g-primary) no-repeat, var(--c-lightest);
    background-position-x: -2rem;

    ${inject.borderRadius(alternative)};

    transition: var(--transition);

    &:after {
      content: '';
      position: absolute;
      left: 1px;
      top: 50%;
      transform: translateY(-50%);

      width: calc(0.75rem);
      height: calc(0.75rem);

      border: 1px solid var(--c-primary);

      ${inject.thumbBorderRadius(alternative)};

      background: var(--g-primary) no-repeat, var(--c-lightest);
      background-position-x: 0;

      transition: var(--transition);
      transition-delay: 0ms, var(--transition);
      transition-property: left, background-position;
    }
  `
)('Switch');

const Input = sc('input')(css`
  position: absolute;

  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;

  &:not([readOnly]):focus + ${Switch}, &:not([readOnly]):hover + ${Switch} {
    box-shadow: var(--s-primary);
  }

  &:not([readOnly]) {
    cursor: pointer;
  }

  &[readOnly] {
    cursor: not-allowed;

    &:active,
    &:focus {
      cursor: not-allowed;
    }
  }

  &[checked] + ${Switch} {
    background-position-x: 0;

    &:after {
      left: calc(var(--i-large) / 2);
      border-color: var(--c-lightest);
      background-position-x: -0.75rem;
    }
  }

  &[readOnly] + ${Switch} {
    border-color: var(--c-neutral);
    color: var(--c-neutral);
    background: rgba(255, 255, 255, 0);

    &:after {
      border-color: var(--c-neutral);
      background: var(--c-neutral);
    }
  }

  &[checked][readOnly] + ${Switch} {
    background: var(--c-neutral);

    &:after {
      background: var(--c-lightest);
    }
  }
`)('Input');

export const Styled = { Switch, Input, SwitchContainer };
