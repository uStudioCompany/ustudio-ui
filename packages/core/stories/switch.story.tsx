import React from 'react';
import { Story } from '@storybook/react';

import Switch, { SwitchProps } from '../src/switch';

export default {
  title: 'Form/Switch',
  component: Switch,

  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: 'boolean',
    },
  },
};

export const Basic: Story<SwitchProps> = (args) => {
  return <Switch {...args} />;
};

/**
 * Commented out until the issue with story rerendering / getting the context is resolved
 * @see .storybook/preview.jsx
const Emoji = styled(Text).attrs(() => ({
  role: 'img',
}))`
  transform: translateY(5%);

  font-size: 12px;
  line-height: 1;
`;

const Label = styled(Flex).attrs(() => ({
  forwardedAs: 'label',
  gap: { horizontal: '1rem' },
  verticalAlign: 'center',
}))`
  cursor: pointer;
`;

export const WithChildren: Story<SwitchProps> = (args) => {
  const { switchMode: _switchMode, mode } = useTheme();

  // This prevents ugly rendering inside `addon-jsx`
  const switchMode = useCallback<typeof _switchMode>((value) => _switchMode(value), [_switchMode]);

  return (
    <Label>
      <Text lineHeightCompensation>Dark Theme</Text>

      <Switch {...args} value={!mode} onChange={switchMode}>
        {({ value }) => <Emoji aria-label={value ? 'moon' : 'sun'}>{value ? '🌚' : '🌞'}</Emoji>}
      </Switch>
    </Label>
  );
};
*/
