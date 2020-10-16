import { orUndefined } from '@brix-ui/utils/functions';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Story } from '@storybook/react';

import RadioGroup, { RadioButton, RadioGroupProps } from '../src/radio-group';
import Flex, { FlexProps } from '../src/flex';
import Text from '../src/text';

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,

  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: {
        type: 'inline-radio',
        options: ['valid', 'invalid', 'indeterminate'],
      },
    },
  },
};

const Label = styled(Flex).attrs(() => ({
  forwardedAs: 'label',
  gap: { horizontal: '8px' },
  verticalAlign: 'center',
}))<FlexProps>(
  () => css`
    cursor: pointer;

    transition: all 200ms;

    &:focus-within {
      color: var(--c-accent-strong);
    }

    &[aria-disabled] {
      color: var(--c-faint-strong);

      cursor: not-allowed;
    }
  `
);

export const Basic: Story<RadioGroupProps> = ({ isInvalid: _isInvalid, ...args }) => {
  const validity = useCallback((): typeof _isInvalid => {
    switch ((_isInvalid as unknown) as 'valid' | 'invalid' | 'indeterminate') {
      case 'invalid':
        return true;
      case 'valid':
        return false;
      case 'indeterminate':
      default:
        return undefined;
    }
  }, [_isInvalid]);

  return (
    <RadioGroup isInvalid={validity()} {...args} name="radio-group">
      {({ isDisabled, isInvalid }) => {
        return (
          <Flex
            direction="column"
            gap={{
              vertical: '16px',
            }}
          >
            {['One', 'Two', 'Three'].map((option) => {
              return (
                <Label aria-hidden aria-disabled={orUndefined(isDisabled)} aria-invalid={isInvalid} key={option}>
                  <RadioButton id={option} value={option} />

                  <Text lineHeightCompensation>{option}</Text>
                </Label>
              );
            })}
          </Flex>
        );
      }}
    </RadioGroup>
  );
};
