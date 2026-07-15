import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';

class Field extends Component {
  render() {
    const { field, onCellClick } = this.props;
    return <FieldLayout field={field} onCellClick={onCellClick} />;
  }
}

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
};

export default Field;
