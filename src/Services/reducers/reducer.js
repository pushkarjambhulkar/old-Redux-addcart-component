import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_TO_CART } from '../Constant';

const initialState = {
  cardData: []
};

const cardItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardData: [...state.cardData, action.data] // Add new item to cardData array
      };
    case REMOVE_TO_CART:
      // Assuming action.data contains the item to be removed
      // Find index of item to be removed
      const indexToRemove = state.cardData.findIndex(item => item.name === action.data.name);
      if (indexToRemove !== -1) {
        // Create a new array without the item to be removed
        const updatedCardData = [
          ...state.cardData.slice(0, indexToRemove),
          ...state.cardData.slice(indexToRemove + 1)
        ];
        return {
          ...state,
          cardData: updatedCardData
        };
      }
      return state; // Return current state if item not found
    default:
      return state;
  }
};

export default combineReducers({
  cardItems
});
