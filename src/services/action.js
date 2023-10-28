export const setPageByPath = (pathname) => {
  return {
    type: 'SET_PAGE_BY_PATH',
    payload: getPageFromPathname(pathname),
  };
};