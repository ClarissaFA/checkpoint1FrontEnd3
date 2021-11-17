/* eslint-disable react/jsx-no-undef */
import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Projeto from './components/Projeto';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Projeto/>
      <Footer/>
    </div>
  );
}

export default App;
