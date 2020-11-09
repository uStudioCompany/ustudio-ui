import type { HTMLAttributes, LabelHTMLAttributes, PropsWithChildren } from 'react';

import { FontVariant, TextAlign, TextDecoration, TypeVariant } from '@brix-ui/types/typography';
import type { IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';
import type { Values } from '@brix-ui/utils/types';
import type { TextElement, TextTag } from '@brix-ui/types/html';

export interface TextProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<TextElement> & LabelHTMLAttributes<HTMLLabelElement>>>,
    StylableComponent {
  as?: TextTag;
  variant?: Values<typeof TypeVariant>;
  appearance?: Values<typeof FontVariant>;

  color?: string;
  align?: Values<typeof TextAlign>;
  decoration?: Values<typeof TextDecoration>;
  weight?: string;

  lineHeightCompensation?: boolean | ((variant: NonNullable<TextProps['variant']>) => number);
}
