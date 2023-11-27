const initialState = {
  isAuth: true,
  visitors: [],
  building: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      return { ...state, isAuth: action.payload };
    case "ADD_USER_DATA":
      return { ...state };
    case "ADD_VISITOR_DATA":
      return {
        ...state,
        data: {
          ...state,
          visitors: [...state.data.visitors, action.payload],
        },
      };
    case "LOGOUT":
      return { ...state, visitors: [], isAuth: action.payload };
    default:
      return state;
  }
};
