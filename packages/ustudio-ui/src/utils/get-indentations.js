export const getIndentations = ({ type, indentObj }) => {
  return (
    indentObj &&
    Object.entries(indentObj).reduce((indents, indent) => `${indents} ${type}-${indent[0]}: var(--i-${indent[1]});`, '')
  );
};
