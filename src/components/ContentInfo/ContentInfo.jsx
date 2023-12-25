import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FilmsContext } from '../../context/FilmsContext.jsx';
import './ContentInfo.scss';

const ContentInfo = () => {
  const { contentInfo, loadMovieData } = useContext(FilmsContext);
  const { contentId } = useParams();

  useEffect(() => {
    loadMovieData(contentId);
  }, []);

  return (
    <div className="contentInfo" data-testid="contentInfo">
      <h3 className="contentInfo__heading">{contentInfo.Title}</h3>
      <h4 className="contentInfo__year">Release year: {contentInfo.Year}</h4>
      <span className="contentInfo__country">
        Country: {contentInfo.Country}
      </span>
      <span className="contentInfo__releaseDate">
        Released: {contentInfo.Released}
      </span>
      <img
        src={
          contentInfo.Poster === 'N/A'
            ? 'https://placehold.co/277x400?text=N/A'
            : contentInfo.Poster
        }
        alt="poster"
        className="contentInfo__image"
      />
      <p className="contentInfo__plot">{contentInfo.Plot}</p>
    </div>
  );
};

export default ContentInfo;
