import styled, { css } from 'styled-components';

import { StyledComponents } from '../../../utils/styles/styled-component';
import { inject } from './inject';

const Spinner = styled.svg(
  ({ appearance }) => css`
    animation: ${inject.rotate} 2s infinite linear;
    transform-origin: center center;

    ${inject.size(appearance)};

    cursor: wait;

    circle {
      animation: ${inject.load} 2s infinite;

      stroke-dashoffset: 600;
      stroke-dasharray: 300;
      stroke-width: 16;
      stroke-linecap: round;

      ${inject.stroke(appearance)};

      fill: transparent;
    }
  `
);

export const Styled = StyledComponents({ Spinner });
