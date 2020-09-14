import { IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';

import { Spinner, Blade } from './spinner.styles';

interface Styled {
  Spinner: typeof Spinner;
  Blade: typeof Blade;
}

export interface SpinnerProps extends IntrinsicComponent<HTMLDivElement>, StylableComponent<Styled> {
  blades?: number;
  bladeSize?:
    | string
    | {
        width?: string;
        height?: string;
      };
  speed?: number;
  color?: string;
  property?: string;
  range?: [rangeFrom?: number, rangeTo?: number];
  swirl?: boolean;
  spread?: number;
  delay?: number;
}
