import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';

class Information extends Component {
  getStatus = () => {
    const { currentPlayer, isGameEnded, isDraw } = this.props;
    
    if (isDraw) {
      return 'Ничья';
    } else if (isGameEnded) {
      return `Победа: ${currentPlayer}`;
    } else {
      return `Ходит: ${currentPlayer}`;
    }
  };

  render() {
    return <InformationLayout status={this.getStatus()} />;
  }
}

Information.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};

export default Information;