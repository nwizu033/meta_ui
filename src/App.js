import './App.css';
import Header from './components/Header';
import PlaceToStay from './components/PlaceToStay';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/placetostay' element={<PlaceToStay/>}/>
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
