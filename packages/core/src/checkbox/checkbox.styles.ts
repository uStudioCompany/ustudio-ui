import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { hidden, shadow, size } from '@brix-ui/theme/mixin';

import Check from '../../assets/icons/check.inline.svg';

import type { CheckboxProps } from './checkbox.props';

export const CheckIcon = styled(Check)`
  width: 14px;
  height: 14px;

  transform: translateY(2.5%);
`;

const Input = styled.input`
  ${hidden};
`;

// Did not specify ReturnType due to `styled-components` typing inconsistency
const checkedShapeColor = (color: string) => {
  return css`
    background-color: var(--c-${color});
    border-color: var(--c-${color});
  `;
};

const checkedValidity = (color: 'accent' | 'critical') => {
  return css`
    &:before {
      ${checkedShapeColor(`${color}-strong`)};
    }

    &:hover {
      &:before {
        box-shadow: ${shadow(`${color}-strong`, 0.25)};
      }
    }

    &:focus-within {
      &:before {
        ${checkedShapeColor(`${color}-strong-down`)};
      }
    }

    &:active {
      &:before {
        ${checkedShapeColor(`${color}-weak-up`)};
      }
    }
  `;
};

export const Checkbox = styled.label<Pick<CheckboxProps, 'value' | 'isDisabled' | 'isInvalid'>>(
  ({ value, isDisabled, isInvalid }) => css`
    position: relative;

    ${size('28px')};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:before {
      content: '';

      position: absolute;
      top: 50%;
      left: 50%;

      ${size('16px')};

      border-width: 1px;
      border-style: solid;
      border-radius: 2px;

      transform: translate(-50%, -50%);

      transition: all 200ms;
    }

    ${isDisabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          &:active {
            transform: scale(0.975);
          }
        `}

    ${value
      ? // Checked
        css`
          color: var(--c-text-base-weak);

          ${checkedValidity('accent')};

          ${isInvalid &&
          css`
            ${checkedValidity('critical')};
          `}

          ${isDisabled &&
          css`
            &:hover {
              &:before {
                box-shadow: none;
              }
            }

            &,
            &:active {
              &:before {
                ${checkedShapeColor('faint-weak-up')}
              }
            }
          `}
        `
      : // Unchecked
        css`
          color: var(--c-base-weak);

          &:before {
            background-color: var(--c-base-weak);
            border-color: var(--c-faint-strong-down);
          }

          &:hover {
            &:before {
              box-shadow: ${shadow('base-strong', 0.15)};
            }
          }

          &:focus-within,
          &:active {
            &:before {
              border-color: var(--c-accent-strong);
            }
          }

          &:active {
            color: var(--c-accent-strong-down);
          }

          ${isInvalid &&
          css`
            &:before {
              border-color: var(--c-critical-strong);
            }

            &:focus-within,
            &:active {
              &:before {
                border-color: var(--c-critical-weak-up);
              }
            }

            &:active {
              color: var(--c-critical-weak-up);
            }
          `}

          ${isDisabled &&
          css`
            &:before {
              background-color: var(--c-faint-weak-down);
            }

            &:hover {
              &:before {
                box-shadow: none;
              }
            }

            &,
            &:active {
              color: var(--c-faint-weak-down);

              &:before {
                border-color: var(--c-faint-weak-up);
              }
            }
          `}
        `}
  `
);

const Styled = applyDisplayNames({ CheckIcon, Input, Checkbox });

export default Styled;
