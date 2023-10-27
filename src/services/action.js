export const setSearchTerm = (term) => {
    return {
      type: 'SET_SEARCH_TERM',
      payload: term,
    };
  };
  
export const setArticles = (articles) => {
    return {
      type: 'SET_ARTICLES',
      payload: articles,
    };
  };

export const receiveSearchResults = (results) => {
    return {
      type: 'RECEIVE_SEARCH_RESULTS', 
      payload: results, 
    };
  };
  