import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/organisms/Card';
import { getNewsSearch } from '../services/news.service';
import CardSkeleton from '../components/organisms/CardSkeleton';
import FailedPage from './Failed';

const SearchPage = () => {
  const [newsSearch, setNewsSearch] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const { keyword } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsSearch(keyword);
        setNewsSearch(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  if (isError) {
    return <FailedPage />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5">{keyword}</h2>

      <div className="w-full grid gap-5 lg:grid-cols-3">
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            {newsSearch.map((article, idx) => (
              <div key={`${article?.title}-${idx}`} className="border-[1px] border-slate-600 p-3">
                <Card data={article} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
