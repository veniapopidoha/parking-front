const initialState = {
  isAuth: true,
  data: {
    visitors: [],
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      return { ...state, isAuth: action.payload };
    case "ADD_USER_DATA":
      return { ...state, data: action.payload };
    case "ADD_VISITOR_DATA":
      return {
        ...state,
        data: {
          ...state.data,
          visitors: [...state.data.visitors, action.payload],
        },
      };
    case "LOGOUT":
      return { ...state, data: [], visitor: [], isAuth: action.payload };
    default:
      return state;
  }
};
