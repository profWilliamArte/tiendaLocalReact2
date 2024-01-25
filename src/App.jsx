
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Tienda from './pages/tienda/Tienda'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home/Home'
import Buscar from './pages/tienda/Buscar'

import { ComprasProvider } from './context/CompraProvider';


function App() {


  return (
    <>
      <BrowserRouter>
        <ComprasProvider>
            <Header/>
           
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Tienda' element={<Tienda/>}/>
              <Route path='/Busqueda' element={<Buscar/>}/>
              <Route path='*' element={<Home/>}/>
            </Routes>
            <Footer/>
        </ComprasProvider>
      </BrowserRouter>
    </>
  )
}

export default App
