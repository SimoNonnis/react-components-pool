import PropTypes from 'prop-types';
import React from 'react';

import CloseModal from './style';

const ModalClose = ({ onClick }) => <CloseModal onClick={onClick}>&times;</CloseModal>;

ModalClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalClose;
