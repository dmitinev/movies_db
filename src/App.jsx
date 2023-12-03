import './App.scss';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';

function App() {
  return (
    <div className="main_container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
