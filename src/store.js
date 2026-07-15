import { createStore, combineReducers } from 'redux';

// Action Types
const SET_FIELD = 'SET_FIELD';
const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
const SET_GAME_ENDED = 'SET_GAME_ENDED';
const SET_IS_DRAW = 'SET_IS_DRAW';
const RESET_GAME = 'RESET_GAME';

// Action Creators
export const setField = (field) => ({ type: SET_FIELD, payload: field });
export const setCurrentPlayer = (player) => ({ type: SET_CURRENT_PLAYER, payload: player });
export const setGameEnded = (ended) => ({ type: SET_GAME_ENDED, payload: ended });
export const setIsDraw = (isDraw) => ({ type: SET_IS_DRAW, payload: isDraw });
export const resetGame = () => ({ type: RESET_GAME });

// Initial State
const initialState = {
  field: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
};

// Reducer
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return { ...state, field: action.payload };
    case SET_CURRENT_PLAYER:
      return { ...state, currentPlayer: action.payload };
    case SET_GAME_ENDED:
      return { ...state, isGameEnded: action.payload };
    case SET_IS_DRAW:
      return { ...state, isDraw: action.payload };
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game: gameReducer,
});

// Создаем store и экспортируем его
export const store = createStore(rootReducer);