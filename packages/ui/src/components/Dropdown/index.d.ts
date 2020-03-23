import { ReactNode, ReactElement } from 'react';
import { ClassNames } from '../../theme/theme';

interface Styled {
  Container;
  Title;
  TitleIcon;
  Dropdown;
  Content;
}

interface DropdownProps extends ClassNames<Styled> {
  isDefaultOpen?: boolean;
  onChange?: () => void;
  
  title: ReactNode;
  children: ReactNode | ReactNode[];
  
  isDisabled?: boolean;
  
  name?: string;
  icon?: ReactElement;
}

declare const Dropdown: {
  (props: DropdownProps): JSX.Element;
};

export default Dropdown;
