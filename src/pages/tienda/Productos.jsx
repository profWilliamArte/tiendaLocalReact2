
import Button from 'react-bootstrap/Button';
import Detalle from "./Detalle"

import { useState } from 'react';


const Productos = (props) => {
    const { imagen,nombre, disponible, categoria, precio} = props.data;


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
  return (
    <div className='col-md-4 col-lg-3 col-xl-2 mb-4'>
        <div className='card h-100'>
        <div className='card-header p-0'>
            <img src={`img/${imagen}`} alt="" className='img-fluid' />
        </div>
        <div className='card-body text-center d-flex flex-column justify-content-between'>
            <p>{nombre}</p>
            <div>
                <p className='small'>(Disponible: {disponible})<br/>
                <b>{categoria}</b></p>
            </div>

            <h5 className='text-secondary'> {precio} $</h5>
        </div>
        <div className='card-footer text-center'>
            <Button variant="danger" size="sm">Comprar</Button>
            <Button variant="success" size="sm"  className='mx-1' onClick={handleShow}>Detalle</Button>
        </div>
        </div>
        <Detalle show={show} handleClose={handleClose} producto={props}/>
    </div>
    
  )
}

export default Productos