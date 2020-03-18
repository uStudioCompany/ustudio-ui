import { css } from 'styled-components';

export const Screen = ['xs', 'md', 'lg', 'xl'].reduce(
  (map, breakpoint) =>
    Object.assign(map, {
      [breakpoint]: style => css`
        @media screen and (min-width: ${({ theme }) => theme.breakpoint[breakpoint]}px) {
          ${style}
        }
      `,
    }),
  {}
);
