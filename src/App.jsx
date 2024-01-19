
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Tienda from './pages/tienda/Tienda'
import Carrito from './pages/Carrito'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home/Home'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Tienda' element={<Tienda/>}/>
          <Route path='/Carrito' element={<Carrito/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
