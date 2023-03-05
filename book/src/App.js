import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Top from './Components/Top/Top';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='app'>
      <Top />
      <Header />
      <Main />
    </div>
  );
}

export default App;
