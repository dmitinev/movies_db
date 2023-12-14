import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Main from '../../components/Main/Main.jsx';
import './MainPage.scss';
const MainPage = () => {
  return (
    <>
      <Header />
      <div className="main_container">
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
