import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import PRODUCTS from '../../data/productoszona.json';
import Productos from './Productos';
import Carrito from '../Carrito';




const Buscar = () => {
  
    const location = useLocation();
    const valueSearch = location.state;
   
    // Filtrar los productos según el valor de búsqueda
    const filteredProducts = PRODUCTS.filter((product) => {
      const palabrasBusqueda = valueSearch.toLowerCase().split(" ");
      const nombreNormalizado = product.nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    
      // Verificar si todas las palabras de búsqueda están presentes en el nombre del producto
      const todasLasPalabrasPresentes = palabrasBusqueda.every((palabra) =>
        nombreNormalizado.includes(palabra)
      );
      return todasLasPalabrasPresentes;
    });
 


  return (
    <>
       <div className='container'>
        <h3 className='text-center py-4'>TIENDA SUPER MARKET</h3>
        <div className='text-center'>
          <Link to="/Tienda" className='btn btn-danger'>Ir a la tienda</Link>
        </div>
        <div className=' d-flex  justify-content-between align-items-center bg-warning  py-1 mb-3'>
          <h4 className=' text-white px-3'>Buscar por: {valueSearch} ({filteredProducts.length})</h4>
          <div className='px-3'>
              <Carrito/>
          </div>
        </div>
            <div className='row'>
              {filteredProducts.map((producto, index) => (
                <Productos data={producto} key={index} />
              ))}
          </div>
       </div>
    </>
 
  )
}

export default Buscar


