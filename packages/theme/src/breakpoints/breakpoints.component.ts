import { createGlobalStyle, css } from 'styled-components';

import { Breakpoint, Variable } from '@ustudio-ui/types/css';
import { objectValues, setCssVariable } from '@ustudio-ui/utils/functions';

import type { BreakpointsMap } from './entity';

const Breakpoints = createGlobalStyle<BreakpointsMap>`
  :root {
    ${(props) => {
      return objectValues(Breakpoint).reduce((styles, breakpoint) => {
        return css`
          ${styles};
          ${setCssVariable(Variable.Breakpoint, breakpoint, `${props[breakpoint]}px`)};
        `;
      }, css``);
    }};
  }
`;

export default Breakpoints;