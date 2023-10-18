import { removeDuplicateData } from '../utils';

const API_KEY = '0a746e2759444e379c4631c053f07a60';

export const getNewsIndonesia = async () => {
  const newsData = await fetch(
    `https://newsapi.org/v2/top-headlines?country=id&apiKey=${API_KEY}`,
    { cache: 'no-store' }
  );
  return removeDuplicateData(await newsData.json());
};

export const getNews = async (query) => {
  const fromDate = new Date(); // Tanggal saat ini
  fromDate.setMonth(fromDate.getMonth() - 1); // Kurangi satu bulan dari tanggal saat ini
  const toDate = new Date(); // Tanggal saat ini

  const fromDateString = fromDate.toISOString().split('T')[0];

  const toDateString = toDate.toISOString().split('T')[0];

  const newsData = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&from=${fromDateString}&to=${toDateString}&apiKey=${API_KEY}`,
    { cache: 'no-store' }
  );

  return removeDuplicateData(await newsData.json());
};

export const getNewsSearch = async (keyword) => {
  const newsData = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${keyword}&pageSize=10`,
    { cache: 'no-store' }
  );
  return removeDuplicateData(await newsData.json());
};
