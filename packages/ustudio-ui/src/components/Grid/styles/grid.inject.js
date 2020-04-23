import { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { getAlignment, reverseDirection } from '../../../utils';

const [defaultGridDirection, defaultGridTemplate, defaultGridGap] = ['row', '', 0];

const _definedBreakpoints = ({ breakpoints, divisions, cellsCount = 0 }) => {
  return Object.keys(breakpoints).filter(
    breakpoint => breakpoints[breakpoint] || (divisions?.[breakpoint] || 0) !== cellsCount
  );
};

const _getElementTemplate = (breakpoints, { breakpointTemplateCallback, defaultTemplate }) => {
  if (breakpoints.length) {
    return breakpoints.reduce(
      (destinationTemplate, breakpoint) => breakpointTemplateCallback({ destinationTemplate, breakpoint }),
      ``
    );
  }

  return defaultTemplate;
};

const _getBreakpointData = ({ breakpoints, breakpoint }) =>
  breakpoints?.[breakpoint] ? { ...breakpoints[breakpoint] } : {};

const _gridTemplate = ({ direction = defaultGridDirection, template = defaultGridTemplate, divisions }) => {
  return css`
    ${`grid-template-${reverseDirection(direction)}s: ${template || `repeat(${divisions}, 1fr)`}`};
    ${`grid-template-${direction}s: unset;`};
  `;
};

const gridContainerStyles = ({ breakpoints }) => {
  return _getElementTemplate(Object.keys(breakpoints), {
    breakpointTemplateCallback: ({ destinationTemplate, breakpoint }) => {
      const { maxWidth, gap = defaultGridGap, direction = defaultGridDirection } = _getBreakpointData({
        breakpoints,
        breakpoint,
      });

      return css`
        ${destinationTemplate};

        ${Mixin.Screen[breakpoint](css`
          max-width: calc(
            ${maxWidth ? `${maxWidth}px` : `var(--bp-${breakpoint})`} - ${2 * (gap && direction === 'row' ? gap : 0)}px
          );
        `)};
      `;
    },
    defaultTemplate: '',
  });
};

const gridBreakpointTemplate = ({ divisions, cellsCount, breakpoints }) => {
  return _getElementTemplate(_definedBreakpoints({ breakpoints, divisions, cellsCount }), {
    breakpointTemplateCallback: ({ destinationTemplate, breakpoint }) => {
      const { direction = defaultGridDirection, template = defaultGridTemplate, gap = defaultGridGap, alignment } =
        breakpoints[breakpoint] || {};

      return css`
        ${destinationTemplate};

        ${Mixin.Screen[breakpoint](css`
          ${_gridTemplate({ direction, template, divisions: divisions[breakpoint] })};

          grid-gap: ${gap / 16}rem;

          ${getAlignment({ direction, alignment })};
        `)};
      `;
    },
    defaultTemplate: css`
      ${_gridTemplate({ divisions: cellsCount })};
    `,
  });
};

const cellTemplate = ({ cellsSizes, index, gridBreakpoints, breakpoints, offsets }) => {
  return _getElementTemplate(
    Object.keys(breakpoints).filter(
      breakpoint => breakpoints[breakpoint] || (offsets[breakpoint]?.[index - 1] || 0) !== 0
    ),
    {
      breakpointTemplateCallback: ({ destinationTemplate, breakpoint }) => {
        const {
          direction: gridDirection = defaultGridDirection,
          template: gridTemplate = defaultGridTemplate,
        } = _getBreakpointData({
          breakpoints: gridBreakpoints,
          breakpoint,
        });

        const { size = 1, offset } = _getBreakpointData({ breakpoints, breakpoint });
        const { before: offsetBefore = 0 } = offset || {};

        const start = cellsSizes[breakpoint]
          .slice(0, index)
          .reduce((allSizes, currentSize) => allSizes + currentSize, 1);

        return css`
          ${destinationTemplate};

          ${!gridTemplate
            ? css`
                ${Mixin.Screen[breakpoint](
                  css`grid-${reverseDirection(gridDirection)}: ${start +
                    offsetBefore +
                    (offsets?.[index - 1] || 0)} / span ${size}`
                )}
              `
            : ``};
        `;
      },
      defaultTemplate: css`
      grid-${defaultGridDirection}: unset;
    `,
    }
  );
};

export const inject = { gridBreakpointTemplate, gridContainerStyles, cellTemplate };
