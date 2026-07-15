import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FieldLayout extends Component {
  getCellClass = (cell) => {
    let classes = 'w-full h-full text-5xl font-bold bg-gray-100 border-2 border-gray-300 rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-center text-gray-800 ';
    
    if (cell !== '') {
      classes += 'cursor-not-allowed ';
    }
    
    if (cell === 'X') {
      classes += 'text-red-500 shadow-[0_2px_10px_rgba(231,76,60,0.3)] bg-red-50 border-red-500 ';
    } else if (cell === '0') {
      classes += 'text-blue-500 shadow-[0_2px_10px_rgba(52,152,219,0.3)] bg-blue-50 border-blue-500 ';
    } else {
      classes += 'hover:bg-gray-200 hover:border-[#667eea] ';
    }

    return classes;
  };

  render() {
    const { field, onCellClick } = this.props;

    return (
      <div 
        className="grid grid-cols-3 gap-2" 
        style={{ 
          width: '330px', 
          height: '330px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px'
        }}
      >
        {field.map((cell, index) => (
          <button
            key={index}
            className={this.getCellClass(cell)}
            onClick={() => onCellClick(index)}
            disabled={cell !== ''}
            style={{
              width: '100%',
              height: '100%',
              fontSize: '48px',
              fontWeight: '700'
            }}
          >
            {cell}
          </button>
        ))}
      </div>
    );
  }
}

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;