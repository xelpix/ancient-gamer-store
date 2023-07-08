import { useContext, useRef, useEffect, useReducer, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import reducer from './reducer';
import { gamesData } from './gamesData';

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

const allGenres = ['all', ...new Set(gamesData.map((game) => game.genre))];
const goodGames = gamesData.map((game) => ({ ...game, isShown: true, amount: 0 }));

const AppContext = createContext();

const initialState = {
  loading: false,
  isSidebarOpen: false,
  games: [],
  genres: allGenres,
  totalPrice: 0,
  totalAmount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const location = useLocation();
  const isCartPage = location.pathname === '/cart';

  useEffect(() => {
    dispatch({ type: GET_FROM_LS, payload: goodGames });
  }, []);

  useEffect(() => {
    dispatch({ type: SAVE_TO_LS });
    dispatch({ type: GET_TOTALS });
  }, [state.games]);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const filterItems = (genre) => {
    dispatch({ type: FILTER_ITEMS, payload: genre });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: id });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART, payload: goodGames });
  };

  const sidebarRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (state.isSidebarOpen && sidebarRef.current !== event.target) {
      closeSidebar();
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        filterItems,
        increaseAmount,
        decreaseAmount,
        isCartPage,
        clearCart,
        sidebarRef,
        handleOutsideClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
