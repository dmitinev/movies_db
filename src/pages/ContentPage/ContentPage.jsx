import ContentInfo from '../../components/ContentInfo/ContentInfo.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import FilmsContextProvider from '../../context/FilmsContext.jsx';
import './ContentPage.scss';

const ContentPage = () => {
  return (
    <>
      <Header />
      <div className="main_container">
        <FilmsContextProvider>
          <ContentInfo />
        </FilmsContextProvider>
        <Footer />
      </div>
    </>
  );
};

export default ContentPage;
