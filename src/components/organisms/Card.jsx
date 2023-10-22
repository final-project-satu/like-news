import React, { useState, useEffect, useContext } from 'react';
import IMG from '/src/assets/img/header-card.png';
import PropsTypes from 'prop-types';
import { updateCtx } from '../../context/updateContext';
import Tag from './../moleculs/Tag';
import Button from '../moleculs/Button';
import { formatDateToLocale } from '../../utils';

const Card = ({ data }) => {
  const [isSaved, setIsSaved] = useState(false);
  const { isUpdate, setIsUpdate } = useContext(updateCtx);

  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    setIsSaved(savedArticles.some((article) => article.url === data?.url));
  }, [data]);

  const handleToggleSaved = () => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];

    if (isSaved) {
      const updatedArticles = savedArticles.filter((article) => article.url !== data?.url);
      localStorage.setItem('savedArticles', JSON.stringify(updatedArticles));
      setIsUpdate(!isUpdate);
    } else {
      savedArticles.push(data);
      localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
      setIsUpdate(!isUpdate);
    }
    setIsSaved(!isSaved);
  };
  return (
    <div className="py-2 border-b border-gray-300 mb-4">
      <div className="relative w-full">
        <img src={data?.urlToImage || IMG} alt={data?.title} className="object-cover w-full" />
      </div>

      <a
        target="_blank"
        href={data?.url}
        className="font-bold text-lg leading-6 mt-5 inline-block"
        rel="noreferrer"
      >
        {data?.title}
      </a>

      <div className="flex my-2 flex-wrap gap-2 ">
        <Tag data={data?.source.name} />
        <Tag data={data?.author} />
        <Tag data={formatDateToLocale(data?.publishedAt)} />
      </div>

      <p className="text-sm">{data?.description}</p>

      <Button isSaved={isSaved} toggleSaved={handleToggleSaved} />
    </div>
  );
};

Card.propTypes = {
  data: PropsTypes.object.isRequired,
};

export default Card;
