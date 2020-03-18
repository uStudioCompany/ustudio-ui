import styled, { css } from 'styled-components';
import { StyledComponents } from '../../../utils/styles/styled-component';

import TextComponent from '../../Text';
import IconComponent from '../../internal/Icon';

import { getTextAppearance, getTextVariant } from '../../../utils';
import { inject } from './inject';

const TextArea = styled.textarea(
  ({ isEditing, dimensions: { width, height }, variant, appearance }) => css`
    width: ${inject.dimension(width, isEditing)};
    height: ${inject.dimension(height, isEditing)};

    position: absolute;
    top: 0;
    left: 0;

    outline: none;
    resize: none;
    border: none;
    background: none;

    opacity: ${inject.opacity(isEditing)};

    transition: opacity var(--transition);

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;

    ${getTextVariant({ variant })};
    ${getTextAppearance({ appearance })};
  `
);

const Text = styled(TextComponent)(
  ({ isEditing }) => css`
    opacity: ${inject.opacity(!isEditing)};

    transition: opacity var(--transition);
  `
);

const EditableText = styled.article`
  position: relative;
  overflow-wrap: break-word;
  opacity: 1;

  transition: opacity var(--transition);
`;

const Icon = styled(IconComponent)(
  ({ isEditing }) => css`
    position: absolute;
    right: var(--i-small);
    top: var(--i-small);

    color: var(--c-neutral);
    outline: var(--c-lightest);

    transition: opacity var(--transition);

    opacity: ${inject.opacity(!isEditing)};
  `
);

export const Styled = StyledComponents({ EditableText, TextArea, Text, Icon });
