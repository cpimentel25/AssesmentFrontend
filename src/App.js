import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getDataProducts } from './features/counter/counterSlice';
import Home from './page/Home';
import './App.css';
import Hedaer from './components/Header';
import About from './page/about';
import ProductDetail from './page/productDetail';

const App = () => {
  const dispatch = useDispatch();
  const dispatchData = () => {
    dispatch(getDataProducts())
  };

  useEffect(() => {
    dispatchData();
  },
  // eslint-disable-next-line
  []);

  return (
    <div className='App'>
      <Hedaer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
