import {
  GET_FROM_LS,
  SAVE_TO_LS,
  GET_TOTALS,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  FILTER_ITEMS,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  CLEAR_CART,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_TO_LS:
      localStorage.setItem('AG-games', JSON.stringify(state.games));
      return state;

    case GET_FROM_LS:
      const storedGames = localStorage.getItem('AG-games');
      if (storedGames) {
        return { ...state, games: JSON.parse(storedGames) };
      } else {
        return { ...state, games: action.payload };
      }

    case OPEN_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: true,
      };

    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: false,
      };

    case FILTER_ITEMS:
      if (action.payload === 'all') {
        return {
          ...state,
          games: state.games.map((game) => {
            return { ...game, isShown: true };
          }),
        };
      } else {
        return {
          ...state,
          games: state.games.map((game) => {
            if (game.genre === action.payload) {
              return { ...game, isShown: true };
            } else {
              return { ...game, isShown: false };
            }
          }),
        };
      }

    case INCREASE_AMOUNT:
      return {
        ...state,
        games: state.games.map((game) => {
          if (game.id === action.payload) {
            return { ...game, amount: game.amount + 1 };
          } else {
            return { ...game };
          }
        }),
      };

    case DECREASE_AMOUNT:
      return {
        ...state,
        games: state.games.map((game) => {
          if (game.id === action.payload) {
            return { ...game, amount: game.amount - 1 };
          } else {
            return { ...game };
          }
        }),
      };

    case GET_TOTALS:
      let { amount, price } = state.games.reduce(
        (itemTotal, itemCurrent) => {
          const { price, amount } = itemCurrent;
          const totalMoney = price * amount;

          itemTotal.price += totalMoney;
          itemTotal.amount += amount;

          return itemTotal;
        },
        { price: 0, amount: 0 }
      );
      return { ...state, totalPrice: price, totalAmount: amount };

    case CLEAR_CART:
      return { ...state, games: action.payload };

    default:
      return state;
  }
};

export default reducer;
