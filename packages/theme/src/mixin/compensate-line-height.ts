import type { Values } from '@ustudio-ui/utils/types';
import { TypeVariant } from '@ustudio-ui/types/typography';

export const compensateLineHeight = (variant: Values<typeof TypeVariant>): number => {
  switch (variant) {
    case 'small':
      return 0;
    case 'h3':
      return -1;
    case 'h2':
    case 'h5':
    case 'p':
      return -2;
    case 'h1':
    case 'h4':
    default:
      return -3;
  }
};