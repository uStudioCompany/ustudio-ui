import styled, { css } from 'styled-components';

import { StyledComponents } from '../../../utils/styles/styled-component';
import { inject } from './inject';

const Placeholder = styled.div(
  ({ variant, appearance }) => css`
    cursor: wait;
    background: linear-gradient(to right, transparent 33%, var(--c-light) 66%, transparent);
    background-size: 1200px 100%;

    animation: ${inject.shimmer} 2s linear infinite;
    
    ${inject.borderRadius(appearance)};

    ${inject.getVariant({ variant, appearance })};
  `
);

export const Styled = StyledComponents({ Placeholder });
