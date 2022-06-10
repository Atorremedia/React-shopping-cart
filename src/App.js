import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/basket';

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Main></Main>
        <Basket></Basket>
     </div>
    </div>
  );
}

export default App;
