import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InformationLayout extends Component {
  getStatusClass = () => {
    const { status } = this.props;
    
    if (status.includes('Победа')) {
      return 'text-green-600 bg-green-100 animate-pulse-scale';
    }
    if (status.includes('Ничья')) {
      return 'text-orange-600 bg-orange-100 animate-pulse-scale';
    }
    return 'text-gray-700 bg-gray-100';
  };

  render() {
    const { status } = this.props;

    return (
      <div className={`text-3xl font-bold py-4 px-8 rounded-xl text-center min-w-[250px] transition-all duration-300 ${this.getStatusClass()}`}>
        {status}
      </div>
    );
  }
}

InformationLayout.propTypes = {
  status: PropTypes.string.isRequired,
};

export default InformationLayout;