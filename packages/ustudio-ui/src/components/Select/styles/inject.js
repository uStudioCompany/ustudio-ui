import { css } from 'styled-components';
import { Mixin } from '../../../theme';

const _getDropdownHeight = ({ items, groups }) => {
  const cutLength = () => (items.length > 5 ? 5 : items?.length);

  return groups ? 32 * cutLength() - 7 : 32 * cutLength() + 2;
};

const toggleColor = ({ selected, selectedColor = 'var(--c-darkest)', unselectedColor = 'var(--c-neutral)' }) =>
  selected ? selectedColor : unselectedColor;

// Container

const containerLayer = isOpen => (isOpen ? 'var(--l-bottom)' : 1);

const containerShadow = ({ isOpen, isDisabled }) => (isOpen && !isDisabled ? 'var(--s-light)' : 'none');

const containerDisabledStyles = ({ isDisabled, Dropdown }) => {
  return isDisabled
    ? css`
        background-color: var(--c-light);

        ${Dropdown} {
          background-color: var(--c-light);
        }

        border-color: transparent;

        ${Dropdown} {
          border-color: transparent;
        }

        ${Mixin.Device.mobile(css`
          &:active {
            box-shadow: none;
          }
        `)}

        ${Mixin.Device.desktop(css`
          &:hover,
          &:focus-within {
            box-shadow: none;
          }
        `)}
      `
    : css`
        background-color: var(--c-lightest);

        ${Mixin.Device.mobile(css`
          &:active {
            box-shadow: var(--s-light);

            &,
            ${Dropdown} {
              border-color: var(--c-light);
            }
          }
        `)}

        ${Mixin.Device.desktop(css`
          &:hover,
          &:focus-within {
            box-shadow: var(--s-light);

            &,
            ${Dropdown} {
              border-color: var(--c-light);
            }

            ${Dropdown} {
              border-top-color: transparent;
            }
          }
        `)}
      `;
};

// Select

const selectDisabledStyles = disabled => {
  return disabled
    ? css`
        color: var(--c-neutral);
        cursor: not-allowed;
        background-color: var(--c-light);
      `
    : css`
        background-color: var(--c-lightest);
      `;
};

// Select Icon

const selectIconColor = isDisabled => (isDisabled ? 'var(--c-neutral)' : 'var(--c-primary)');

// Selected List Item

const selectedItemDisabledStyles = ({ isDisabled, SelectedListIcon }) => {
  return isDisabled
    ? css`
        background: var(--c-light);
        color: var(--c-neutral);

        cursor: not-allowed;

        &:hover,
        &:active {
          box-shadow: none;
          cursor: not-allowed;

          ${SelectedListIcon} {
            background-color: transparent;
          }
        }

        ${SelectedListIcon} {
          cursor: not-allowed;
        }
      `
    : css`
        ${Mixin.Device.mobile(css`
          &:active {
            box-shadow: var(--s-primary);

            ${SelectedListIcon} {
              background-color: var(--c-primary-light);
            }
          }
        `)}

        ${Mixin.Device.desktop(css`
          &:hover {
            box-shadow: var(--s-primary);
            cursor: pointer;

            ${SelectedListIcon} {
              background-color: var(--c-primary-light);
            }
          }
        `)}
      `;
};

// Dropdown

const dropdownScale = isOpen => `scaleX(${isOpen ? 1 : 0})`;

const dropdownToggleStyles = ({ isOpen, ValuesList }, { items, groups }) => {
  return isOpen
    ? css`
        ${ValuesList}, & {
          height: ${_getDropdownHeight({ items, groups })}px;
          overflow-x: hidden;
        }
      `
    : css`
        ${ValuesList}, & {
          height: 0;
        }
      `;
};

// Values List Item

const valuesItemDesktopToggleStyles = ({ selected, ValuesListIcon }) => {
  return selected
    ? css`
        &:not([disabled]) {
          color: var(--c-lightest);

          &:before {
            opacity: 0.3;
          }

          ${ValuesListIcon} {
            color: var(--c-lightest);
          }
        }
      `
    : css`
        :not([disabled]) {
          color: var(--c-darkest);

          &:before {
            opacity: 0.3;
          }
        }
      `;
};

export const inject = {
  containerLayer,
  containerShadow,
  containerDisabledStyles,
  toggleColor,
  selectDisabledStyles,
  selectIconColor,
  selectedItemDisabledStyles,
  dropdownScale,
  dropdownToggleStyles,
  valuesItemDesktopToggleStyles,
};
