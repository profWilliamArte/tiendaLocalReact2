import { useState } from 'react';

import Button from 'react-bootstrap/Button';


import PRODUCTS from '../../data/productos.json';
import Productos from './Productos';

const Tienda = () => {
  const categorias = [...new Set(PRODUCTS.map((producto) => producto.categoria))];
  const [selectedCategory, setSelectedCategory] = useState(categorias[0]);
  const handleCategoryChange = (categoria) => {
    setSelectedCategory(categoria);
  };
  const filteredProducts = PRODUCTS.filter((producto) => producto.categoria === selectedCategory);




  return (
    <>
      <div className='container'>
        <div className='text-center'>
          {categorias.map((categoria, index) => (
            <Button
              key={index}
              onClick={() => handleCategoryChange(categoria)}
              variant={selectedCategory === categoria ? 'success' : 'danger'}
              className='m-3'
              style={{ width: '200px' }}
            >
              {categoria}
            </Button>
          ))}
        </div>
        <h3 className='text-center py-4'>TIENDA SUPER MARKET</h3>
        <h4 className='text-center py-4 bg-success-subtle'>
          {selectedCategory} ({filteredProducts.length})
        </h4>
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