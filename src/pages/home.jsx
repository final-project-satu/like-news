import React from 'react';
import { getNews } from '../services/news.service';
import CardSkeleton from '../components/organisms/CardSkeleton';
import Card from '../components/organisms/Card';
import ErrorPage from './404';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [News, setNews] = React.useState([]);
  const [NewsIndo, setNewsIndo] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNews('programming'&&'covid');
        const dataindo = await getNews();
        setNews(data);
        setNewsIndo(dataindo);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isError) {
    return <ErrorPage/>;
  }

  return (
    <div id='beranda'>
      <h2 className="text-5xl font-bold text-center my-5">Home</h2>
      <div className='grid grid-cols-3 mb-5 h-96'>
        <Link to='/indonesia' className='bg-indo flex items-center mr-5'>
            <div className='bg-white flex items-center w-full h-10'>Indonesia</div>
        </Link>
        <Link to='/covid' className='bg-covid flex items-center mr-5'>
            <div className='bg-white flex items-center w-full h-10'>Covid-19</div>
        </Link>
        <Link to='programming' className='bg-programming flex items-center '>
            <div className='bg-white flex items-center w-full h-10'>Programming</div>
        </Link>
      </div>
      <div>
      {isLoading ? (
          <>
          <div className='mb-5'>
            <CardSkeleton />
          </div>
          </>
        ) : (
          <>
          {NewsIndo.slice(0,1).map((article, idx) => {
          if(article.title === 'After Hamas, Then What? Israel’s Undefined Endgame in Gaza'){
            return(
            <div key={`${article?.title}-${idx}`} className='bg-spotlight h-auto mb-5 grid grid-cols-2'>
                <a  href={article.url} className='text-4xl h-screen ml-5 pl-5 flex items-center bg-title-spotlight'>{article.title}</a>
            </div>
            )
          }
          })}
          </>
        )}
      </div>
      <h1 className='text-center text-5xl font-semibold mb-5'>Highlight</h1>
      <div className="w-full grid gap-5 lg:grid-cols-3 md:grid-cols-2">
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
          {News.slice(0,3).map((article, idx) => (
            <div key={`${article?.title}-${idx}`} className="border-[1px] border-slate-600 p-3">
              <Card data={article} />
            </div>
          ))}
          </>
        )}
      </div>
      <Link to='all' className='flex justify-center mt-3 mb-3'>
        <Button variant='outline-dark'>More</Button>
      </Link>
    </div>
  );
};

export default Home;
