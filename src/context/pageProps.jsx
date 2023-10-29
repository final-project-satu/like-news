import PropTypes from 'prop-types';

export const pagePropTypes = {
  currentPage: PropTypes.number.isRequired,
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired,
};