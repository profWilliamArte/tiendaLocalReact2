import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import PRODUCTS from '../../data/productoszona.json';
import Productos from './Productos';
import { ComprasContext } from '../../context/CompraProvider';
import Carrito from '../Carrito';

const Tienda = () => {
  const categorias = [...new Set(PRODUCTS.map((producto) => producto.categoria))];
  const [selectedCategory, setSelectedCategory] = useState(categorias[0]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleCategoryChange = (categoria) => {
    setSelectedCategory(categoria);
  };

  useEffect(() => {
    const filteredByCategory = PRODUCTS.filter((producto) => producto.categoria === selectedCategory);
    setFilteredProducts(filteredByCategory);
  }, [selectedCategory]);



  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          {categorias.map((categoria, index) => (
            <Button
              key={index}
              onClick={() => handleCategoryChange(categoria)}
              variant={selectedCategory === categoria ? 'success' : 'danger'}
              className='m-3'
            >
              {categoria}
            </Button>
          ))}
        </div>
        <h3 className='text-center py-4'>TIENDA SUPER MARKET</h3>
        <div className=' d-flex  justify-content-between align-items-center bg-warning  py-1 mb-3'>
          <h4 className=' text-white px-3'>
            {selectedCategory} ({filteredProducts.length})
          </h4>
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
  );
};

export default Tienda;