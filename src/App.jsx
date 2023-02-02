import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CheckOut from './components/CheckOut';
import ItemDetails from './components/ItemDetails';
import Navbar from './components/Navbar';
import ShoppingContainer from './components/ShoppingContainer';
import { total } from './components/state/slice/cartSlice';
import { motion } from 'framer-motion';

function App() {
  const {isOpen} = useSelector((state) => state.checkout);
  const {cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);
  
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5, ease: "easeOut"}}
    >
      <Navbar />
      <ShoppingContainer />
      {isOpen && <CheckOut />}
    </motion.div>
  )
}

export default App
