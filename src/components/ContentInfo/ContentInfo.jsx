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
      {contentInfo?.Plot}
    </div>
  );
};

export default ContentInfo;
