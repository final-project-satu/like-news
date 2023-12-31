/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/organisms/Card';
import { getNewsSearch } from '../services/news.service';
import CardSkeleton from '../components/organisms/CardSkeleton';
import FailedPage from './Failed';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pagePropTypes } from '../context/pageProps';

const SearchPage = ({ currentPage, incrementPage, decrementPage }) => {
  const [newsSearch, setNewsSearch] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const { keyword } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const isPathSameAsPrevious = (previousPath, currentPath) => {
      return previousPath === currentPath;
    };
    if (!isPathSameAsPrevious(location.pathname, location.state?.prevPathname)) {
      dispatch({ type: 'RESET_PAGE' });
    }
    location.state = { prevPathname: location.pathname };
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
  }, [keyword, dispatch, location]);

  if (isError) {
    return <FailedPage />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5">Results of {keyword}</h2>
      <div className="w-full grid gap-5 lg:grid-cols-3">
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            {newsSearch.slice(currentPage * 9 - 9, currentPage * 9).map((article, idx) => (
              <div key={`${article?.title}-${idx}`} className="border-[1px] border-slate-600 p-3">
                <Card data={article} />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="text-center mt-3">
        <Button variant="outline-dark" onClick={decrementPage}>
          -
        </Button>
        <span className="mx-2">{currentPage}</span>
        <Button variant="outline-dark" onClick={incrementPage}>
          +
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementPage: () => dispatch({ type: 'INCREMENT_PAGE' }, window.scrollTo(0, 0)),
    decrementPage: () => dispatch({ type: 'DECREMENT_PAGE' }, window.scrollTo(0, 0)),
  };
};
SearchPage.propTypes = pagePropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
