import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import { props } from '../BaseInput';

import { StyledFileInput as Styled } from '../styles';

const FileInput = forwardRef(function FileInput(
  {
    id,
    name,
    buttonValue = 'Upload',
    value,
    onChange,
    multiple = false,
    isDisabled = false,
    isRequired = false,
    prefix,
    suffix,
    styled,
    classNames,
    className = '',
    ...htmlAttributes
  },
  ref
) {
  const [fileList, setFileList] = useState();

  const renderStringValue = () => {
    return `${
      Array.from(value ?? {}).length
        ? Array.from(value)
            ?.map(file => file.name)
            .join(', ')
        : htmlAttributes?.placeholder || ''
    }`;
  };

  return (
    <Styled.FileInputWrapper className={className} $classNames={classNames} isDisabled={isDisabled} $styled={styled}>
      <Styled.HiddenFileInput
        ref={ref}
        type="file"
        id={id}
        name={name}
        value={fileList ?? ''}
        onChange={({ target: { files, value: fileNames } }) => {
          onChange(files);
          setFileList(fileNames);
        }}
        multiple={multiple}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-labelledby={name}
        $classNames={classNames}
        $styled={styled}
        {...htmlAttributes}
      />

      <Styled.FileInputContainer isDisabled={isDisabled} $classNames={classNames} $styled={styled}>
        {prefix && (
          <Styled.Prefix $classNames={classNames} $styled={styled}>
            {prefix}
          </Styled.Prefix>
        )}

        <Styled.FileInput as="div" value={value} $classNames={classNames} $styled={styled}>
          {renderStringValue()}
        </Styled.FileInput>

        {suffix && (
          <Styled.Suffix $classNames={classNames} $styled={styled}>
            {suffix}
          </Styled.Suffix>
        )}
      </Styled.FileInputContainer>

      <Styled.FileInputButton
        as="div"
        disabled={isDisabled}
        appearance="contained"
        intent="primary"
        $classNames={classNames}
        $styled={styled}
        isDisabled={isDisabled}
      >
        {buttonValue}
      </Styled.FileInputButton>
    </Styled.FileInputWrapper>
  );
});

FileInput.displayName = 'FileInput';

FileInput.propTypes = {
  ...props.propTypes({ valueType: PropTypes.object, classes: Styled }),
  buttonValue: PropTypes.string,
  multiple: PropTypes.bool,
};

FileInput.defaultProps = {
  ...props.defaultProps,
  buttonValue: 'Upload',
  multiple: false,
};

export default FileInput;