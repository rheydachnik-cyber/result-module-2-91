import React from 'react';
import PropTypes from 'prop-types';
import Information from './Information';
import Field from './Field';
import styles from './GameLayout.module.css';

function GameLayout({ children, information, field }) {
  return (
    <div className={styles.gameLayout}>
      {children}
    </div>
  );
}

GameLayout.Information = Information;
GameLayout.Field = Field;

GameLayout.propTypes = {
  children: PropTypes.node,
  information: PropTypes.node,
  field: PropTypes.node,
};

export default GameLayout;