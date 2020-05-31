import FURNITURES from "../data/dummy-furniture";
import { GET_SELECTED } from "./action";

const initialState = {
  furnitures: FURNITURES,
  selectedFurniture: null,
};

const furnitureReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED: {
      const furnitures = { ...state.furnitures };
      const updatedSelected = FURNITURES.find((item) => {
        return item.id === action.furnitureId;
      });
      return { ...state, selectedFurniture: updatedSelected };
    }
    default: return state;
  }
};

export default furnitureReducer;
