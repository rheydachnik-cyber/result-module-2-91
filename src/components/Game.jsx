import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setField, setCurrentPlayer, setGameEnded, setIsDraw, resetGame } from '../store';
import Information from './Information';
import Field from './Field';

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

class Game extends Component {
  checkWinner = (fieldArray) => {
    for (const pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;
      if (fieldArray[a] && fieldArray[a] === fieldArray[b] && fieldArray[a] === fieldArray[c]) {
        return fieldArray[a];
      }
    }
    return null;
  };

  handleCellClick = (index) => {
    const { field, isGameEnded, currentPlayer, setField, setCurrentPlayer, setGameEnded, setIsDraw } = this.props;

    if (field[index] !== '' || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    const winner = this.checkWinner(newField);
    if (winner) {
      setGameEnded(true);
      setCurrentPlayer(winner);
      return;
    }

    if (newField.every(cell => cell !== '')) {
      setIsDraw(true);
      setGameEnded(true);
      return;
    }

    setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
  };

  handleReset = () => {
    this.props.resetGame();
  };

  render() {
    const { field, currentPlayer, isGameEnded, isDraw } = this.props;

    return (
      <div className="bg-white/95 rounded-2xl p-10 shadow-2xl flex flex-col items-center gap-8 min-w-[400px]">
        <Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
        <Field field={field} onCellClick={this.handleCellClick} />
        <button
          onClick={this.handleReset}
          className="px-10 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] border-none rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(102,126,234,0.4)] active:translate-y-0"
        >
          Начать заново
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  field: state.game.field,
  currentPlayer: state.game.currentPlayer,
  isGameEnded: state.game.isGameEnded,
  isDraw: state.game.isDraw,
});

const mapDispatchToProps = {
  setField,
  setCurrentPlayer,
  setGameEnded,
  setIsDraw,
  resetGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);