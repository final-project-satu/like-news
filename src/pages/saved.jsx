import React, { useContext } from 'react';
import { updateCtx } from './../context/updateContext';
import Card from '../components/organisms/Card';

const SavedPage = () => {
  const [savedArticles, setSavedArticles] = React.useState([]);

  const { isUpdate } = useContext(updateCtx);

  React.useEffect(() => {
    const savedArticlesData = JSON.parse(localStorage.getItem('savedArticles')) || [];
    setSavedArticles(savedArticlesData);
  }, [isUpdate]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5">Saved Article</h2>
      {savedArticles.length === 0 && <p>No Saved Articles...</p>}
      <div className="w-full grid gap-5 lg:grid-cols-3">
        {savedArticles.map((article, idx) => (
          <div key={`${article?.title}-${idx}`} className="border-[1px] border-slate-600 p-3">
            <Card data={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPage;
