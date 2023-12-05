const initialState = {
  isAuth: false,
  building: [],
  visitors: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH':
      return { ...state, isAuth: action.payload };
    case 'ADD_USER_DATA':
      return {
        ...state,
        ...action.payload,
        building: action.payload.building,
      };
    case 'ADD_VISITOR_DATA':
      return {
        ...state,
        visitors: [...state.visitors, action.payload],
      };
    case 'TOGGLE_FAVORITE':
      const updatedVisitors = state.visitors.map((visitor) =>
        visitor.plate === action.payload.plate
          ? { ...visitor, favorite: !visitor.favorite }
          : visitor
      );

      return {
        ...state,
        visitors: updatedVisitors,
      };
    case 'LOGOUT':
      return {
        ...state,
        visitors: [],
        isAuth: action.payload,
        building: [],
      };
    default:
      return state;
  }
};
