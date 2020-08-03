import { Align } from '@ustudio-ui/types/css';

import { Values } from '../types';

import { parseAlignment } from './parse-alignment';

export const parseAlignItems = (alignItems?: Values<typeof Align>): string => {
  switch (alignItems) {
    case 'space-between':
    case 'space-around':
    case 'space-evenly': {
      console.warn(`Property 'align-items' does not accept '${alignItems}'. Falling back to 'initial'.`);

      return '';
    }
    default:
      return parseAlignment(alignItems);
  }
};
