import React from 'react';
import { getNews } from '../services/news.service';
import CardSkeleton from '../components/organisms/CardSkeleton';
import Card from '../components/organisms/Card';
import ErrorPage from './404';
import FailedPage from './Failed';

const ProgrammingPage = () => {
  const [newsProgramming, setNewsProgramming] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNews('programming');
        setNewsProgramming(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isError) {
    return <FailedPage />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5">Programming</h2>

      <div className="w-full grid gap-5 lg:grid-cols-3 md:grid-cols-2">
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            {newsProgramming.map((article, idx) => (
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

export default ProgrammingPage;
