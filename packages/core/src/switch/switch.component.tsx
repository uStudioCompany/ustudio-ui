import React, { WeakValidationMap } from 'react';
import PT from 'prop-types';

import { extract } from '@brix-ui/prop-types/utils';
import { applyPolymorphicFunctionProp, classNames, intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
import { useDisabled } from '@brix-ui/contexts/disabled';
import useAriaProps from '@brix-ui/hooks/use-aria-props';
import useEventProps from '@brix-ui/hooks/use-event-props';
import useInputValue from '@brix-ui/hooks/use-input-value';
import { stylableComponent } from '@brix-ui/prop-types/common';

import Checkbox from '../checkbox';

import type { SwitchProps } from './switch.props';
import Styled from './switch.styles';

const Switch = intrinsicComponent<SwitchProps, HTMLInputElement>(function Switch(
  {
    children,
    className,
    value,
    defaultValue,
    onChange,
    name,
    id,
    form,
    isDisabled: _isDisabled,
    isRequired,
    isInvalid,
    containerRef,
    ...props
  },
  ref
) {
  const isDisabled = useDisabled(_isDisabled);

  const [internalValue, handleChange] = useInputValue(
    value === undefined ? defaultValue : value,
    onChange,
    (event) => event.target.checked
  );

  const { propsWithAria, propsWithoutAria } = useAriaProps(props);
  const { propsWithEvents, propsWithoutEvents } = useEventProps(propsWithoutAria);

  return (
    <Styled.Switch
      ref={containerRef}
      className={classNames('switch', className)}
      aria-checked={internalValue ?? false}
      aria-disabled={orUndefined(isDisabled)}
      aria-invalid={isInvalid}
      aria-hidden
      {...propsWithoutEvents}
    >
      {children && (
        <Styled.Children className={classNames('switch__children')}>
          {applyPolymorphicFunctionProp(children, { value: internalValue, isDisabled, isInvalid })}
        </Styled.Children>
      )}

      <Styled.Input
        ref={ref}
        type="checkbox"
        role="switch"
        name={name}
        id={id}
        form={form}
        defaultChecked={internalValue ?? false}
        aria-checked={internalValue ?? false}
        value={internalValue ? 'on' : 'off'}
        onChange={handleChange}
        disabled={isDisabled}
        aria-disabled={orUndefined(isDisabled)}
        required={isRequired}
        aria-required={orUndefined(isRequired)}
        aria-invalid={isInvalid}
        {...propsWithAria}
        {...propsWithEvents}
      />
    </Styled.Switch>
  );
});

const checkboxPropTypes = extract([Checkbox]);

Switch.propTypes = {
  children: PT.oneOfType([PT.func, PT.node]),

  ...checkboxPropTypes,
  ...stylableComponent([
    'trackHeight',
    'trackWidth',
    'thumbSize',
    'thumbScale',
    'verticalPadding',
    'horizontalPadding',
    'borderWidth',
    'thumbIndent',
  ]),
} as WeakValidationMap<SwitchProps>;

export default Switch;
