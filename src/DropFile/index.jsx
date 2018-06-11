import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import {
  StyledDropzone,
  Container,
  StyledUploadIcon,
  Label,
  PickFileButton,
  ContainerText,
  Message,
  AttentionIcon,
} from './style';

function DropFile({
  acceptText,
  accept,
  onDrop,
  onDropAccepted,
  onDropRejected,
  errorMessage,
  dropAreaLabel,
  buttonLabel,
  multiple,
  className,
  ...props
}) {
  const dropAreaLabelComp = typeof dropAreaLabel === 'function' ? dropAreaLabel() : dropAreaLabel;
  const buttonLabelComp = typeof buttonLabel === 'function' ? buttonLabel() : buttonLabel;

  return (
    <div>
      <StyledDropzone
        activeStyle={{ borderColor: '#0099cf' }}
        accept={accept}
        onDrop={onDrop}
        onDropAccepted={onDropAccepted}
        onDropRejected={onDropRejected}
        multiple={multiple}
        className={className}
        {...props}
      >
        <Container>
          <StyledUploadIcon />
          <Label>{dropAreaLabelComp}</Label>
          <PickFileButton styleType="secondary" onClick={noop}>
            {buttonLabelComp}
          </PickFileButton>
          {!!errorMessage || !!acceptText ? (
            <ContainerText>
              {!!acceptText && <Message>{acceptText}</Message>}
              {!!errorMessage && (
                <Message error>
                  <AttentionIcon width={15} height={15} />
                  {errorMessage}
                </Message>
              )}
            </ContainerText>
          ) : null}
        </Container>
      </StyledDropzone>
    </div>
  );
}

DropFile.propTypes = {
  acceptText: PropTypes.string,
  accept: PropTypes.string,
  onDrop: PropTypes.func,
  onDropAccepted: PropTypes.func,
  onDropRejected: PropTypes.func,
  errorMessage: PropTypes.string,
  dropAreaLabel: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.string]),
  buttonLabel: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.string]),
  multiple: PropTypes.bool,
  className: PropTypes.string,
};

DropFile.defaultProps = {
  acceptText: null,
  accept: 'image/png, image/jpeg, application/pdf',
  onDrop: noop,
  onDropAccepted: noop,
  onDropRejected: noop,
  errorMessage: null,
  dropAreaLabel: 'Drop here to upload or',
  buttonLabel: 'Browse files',
  multiple: false,
  className: null,
};

export default DropFile;
