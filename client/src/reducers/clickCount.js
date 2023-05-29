import { INCREMENT_CLICK_COUNT } from '../actions';

const initialState = {};

const clickCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_CLICK_COUNT:
      const { placeId } = action.payload;
      return {
        ...state,
        [placeId]: (state[placeId] || 0) + 1
      };
    default:
      return state;
  }
};

export default clickCountReducer;
