const initialState = {
  currentPage: 1,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_PAGE':
      return { ...state, currentPage: state.currentPage + 1 };
    case 'DECREMENT_PAGE':
      return { ...state, currentPage: state.currentPage - 1 };
    default:
      return state;
  }
};

export default newsReducer;
