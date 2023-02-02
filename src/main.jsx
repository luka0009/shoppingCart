import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import ItemDetails from './components/ItemDetails'
import Navbar from './components/Navbar';
import CheckOut from './components/CheckOut'
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar /> 
        {/* <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/ItemDetails/:id' element={<ItemDetails />}/>
        </Routes> */}
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
