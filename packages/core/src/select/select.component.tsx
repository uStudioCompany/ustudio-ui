import React, { ChangeEventHandler, LabelHTMLAttributes, ReactElement, useCallback, useMemo } from 'react';

import { intrinsicComponent, tryCall } from '@brix-ui/utils/functions';

import Affix from '../_internal/affix';
import { useAriaProps, useValue } from '../_internal/hooks';

import type { SelectGroup, SelectOption, SelectProps } from './select.props';
import Styled from './select.styles';

const renderOptions = (
  options: SelectOption[],
  {
    isSelected,
    isDisabled,
  }: {
    isSelected(value: string): boolean;
    isDisabled(value: string): boolean;
  }
): ReactElement[] => {
  return options.map(({ value, label }) => {
    const selected = isSelected(value);
    const disabled = isDisabled(value);

    return (
      <option
        key={value}
        aria-selected={selected || undefined}
        disabled={disabled}
        aria-disabled={disabled || undefined}
        value={value}
      >
        {label ?? value}
      </option>
    );
  });
};

const Select = intrinsicComponent<SelectProps, HTMLSelectElement>(function Select(
  {
    styles,
    className,
    options,
    placeholder,
    value,
    defaultValue,
    onChange,
    isDisabled,
    isRequired,
    isInvalid,
    disabledOptions,
    disabledGroups,
    containerRef,
    prefix,
    suffix,
    ...props
  },
  ref
) {
  const [internalValue, setInternalValue] = useValue(value, defaultValue ?? placeholder);

  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      const nextValue = event.target.value;

      setInternalValue(nextValue);
      tryCall(onChange, nextValue, event);
    },
    [onChange]
  );

  const isOptionSelected = useCallback((optionValue: string) => optionValue === internalValue, [internalValue]);
  const isOptionDisabled = useCallback(
    (optionValue: string) => Boolean(isDisabled || disabledOptions?.includes(optionValue)),
    [isDisabled, JSON.stringify(disabledOptions)]
  );
  const isGroupDisabled = useCallback(
    (groupIndex: number) => Boolean(isDisabled || disabledGroups?.includes(groupIndex)),
    [isDisabled, JSON.stringify(disabledGroups)]
  );

  const isGroupSelect = useMemo(() => 'options' in options[0], [options[0]]);

  const hasValue = useMemo(() => internalValue !== placeholder, [internalValue, placeholder]);

  const { propsWithAria, propsWithoutAria } = useAriaProps(props);

  return (
    <Styled.Select
      ref={containerRef}
      hasValue={hasValue}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      {...(propsWithoutAria as LabelHTMLAttributes<HTMLLabelElement>)}
    >
      {prefix && <Affix>{prefix}</Affix>}

      <Styled.Input
        ref={ref}
        value={internalValue}
        onChange={handleChange}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-invalid={isInvalid || undefined}
        {...propsWithAria}
      >
        {placeholder && (
          <option disabled aria-disabled aria-selected={hasValue ? undefined : true} value={placeholder}>
            {placeholder}
          </option>
        )}

        {isGroupSelect
          ? (options as SelectGroup[]).map(({ label, options: groupOptions }, groupIndex) => {
              const isOptionGroupDisabled = isGroupDisabled(groupIndex);

              return (
                <optgroup
                  key={label}
                  label={label}
                  disabled={isOptionGroupDisabled}
                  aria-disabled={isOptionGroupDisabled || undefined}
                >
                  {renderOptions(groupOptions, {
                    isSelected: isOptionSelected,
                    isDisabled: (optionValue: string) => isOptionGroupDisabled || isOptionDisabled(optionValue),
                  })}
                </optgroup>
              );
            })
          : renderOptions(options as SelectOption[], {
              isSelected: isOptionSelected,
              isDisabled: isOptionDisabled,
            })}
      </Styled.Input>

      <Affix>{suffix || <Styled.Icon />}</Affix>
    </Styled.Select>
  );
});

export default Select;