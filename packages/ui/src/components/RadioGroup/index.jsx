import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, common, inputProps } from '../../utils';

import { Styled } from './styles';

const RadioGroup = forwardRef(function RadioGroup(
  {
    label,
    options,
    value,
    defaultValue,
    disabledOptions,
    direction = 'column',
    isRequired = false,
    isDisabled = false,
    isReversed = false,
    onChange,
    classNames,
    className = '',
  },
  ref
) {
  function isOptionSelected(option) {
    return option === value;
  }

  return (
    <Styled.RadioGroup dataDirection={direction} className={className} classNames={classNames}>
      {options.map(option => (
        <Styled.RadioGroupItem key={option} className={classNames}>
          <Styled.Label
            classNames={classNames}
            isDisabled={disabledOptions?.includes(option) || isDisabled}
            isReversed={isReversed}
          >
            <Styled.Input
              ref={ref}
              type="radio"
              name={label}
              value={option}
              defaultChecked={isOptionSelected(option) ?? isOptionSelected(defaultValue)}
              onChange={() => onChange(option)}
              disabled={disabledOptions?.includes(option) || isDisabled}
              required={isRequired}
              aria-required={isRequired}
              aria-checked={isOptionSelected(option) ?? isOptionSelected(defaultValue)}
              aria-labelledby={`${label} ${option} radiobutton`}
              aria-disabled={!!disabledOptions?.includes(option)}
              classNames={classNames}
            />

            <Styled.RadioButton classNames={classNames} />
            {option}
          </Styled.Label>
        </Styled.RadioGroupItem>
      ))}
    </Styled.RadioGroup>
  );
});

RadioGroup.displayName = 'RadioGroup';

RadioGroup.propTypes = {
  ...inputProps(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  disabledOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  direction: common.direction,
  isReversed: PropTypes.bool,
  ...classNames(Object.keys(Styled)),
};

RadioGroup.defaultProps = {
  direction: 'column',
  isDisabled: false,
  isRequired: false,
  isReversed: false,
};

export default RadioGroup;
