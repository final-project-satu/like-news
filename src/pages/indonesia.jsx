import React from 'react';
import { getNewsIndonesia } from '../services/news.service';
import Card from '../components/organisms/Card';
import CardSkeleton from '../components/organisms/CardSkeleton';

const IndonesiaPage = () => {
  const [newsID, setNewsID] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsIndonesia();
        setNewsID(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isError) {
    return <div>Gagal Menampilkan data...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5">Indonesia</h2>

      <div className="w-full grid gap-5 lg:grid-cols-3 md:grid-cols-2">
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            {newsID.map((article, idx) => (
              <div key={`${article?.title}-${idx}`} className="border-[1px] border-slate-600 p-5">
                <Card data={article} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default IndonesiaPage;
