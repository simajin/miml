import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './include/Header'
import Footer from './include/Footer'
import Mainpage from './main';
import Login from './components/Login';
import Join from './components/Join';
import Cart from './components/Cart';
import CD from './components/CD';
import MD from './components/MD';
import Artist from './components/Artist';
import Music from './components/Music';
import DetailCDPage from './components/DetailCDPage';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Mainpage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/join' element={<Join/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/musicPage' element={<Music/>} />
          <Route path='/CDpage' element={<CD/>} />
          <Route path='/MDpage' element={<MD/>} />
          <Route path='/artistPage' element={<Artist/>} />
          <Route path='/DetailCDPage' element={<DetailCDPage/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
