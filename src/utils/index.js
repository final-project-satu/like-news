export const removeDuplicateData = (articles) => {
  const randomArticle = articles.articles;
  const filterArticles = randomArticle.filter((article) => article.source.id !== null);
  return filterArticles;
};

export const formatDateToLocale = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('id', options);
};
