const initialState = {
  isAuth: true,
  data: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH':
      return { ...state, isAuth: action.payload };
    case 'ADD_USER_DATA':
      return { ...state, data: action.payload };
    case 'LOGOUT':
      return { ...state, data: [], isAuth: action.payload };
    default:
      return state;
  }
};
