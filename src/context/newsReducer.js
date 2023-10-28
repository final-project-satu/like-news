export const resetPage = () => (dispatch) => {
  dispatch({ type: 'RESET_PAGE' });
};

const initialState = {
  currentPage: 1
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_PAGE':
      return { ...state, currentPage: state.currentPage + 1 };
    case 'DECREMENT_PAGE':
      return { ...state, currentPage: state.currentPage - 1 };
    case 'RESET_PAGE':
      return { ...state, currentPage: 1 };
    case 'SET_PAGE_BY_PATH':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
