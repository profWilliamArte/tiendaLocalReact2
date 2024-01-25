import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Detalle from "./Detalle"

import { useContext, useState } from 'react';
import { ComprasContext } from '../../context/CompraProvider';


const Productos = (props) => {
    const { imagen,nombre, disponible, categoria, precio} = props.data;
    const prod=props.data;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const { compras, setCompras } = useContext(ComprasContext);
    const { total, setTotal } = useContext(ComprasContext);

    function comprar(producto) {
        Swal.fire({
          title: 'Indique la Cantidad:',
          input: 'text',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          customClass: {
            confirmButton: 'btn btn-success me-2', // Cambia el color del botón de confirmación a verde
            cancelButton: 'btn btn-secondary', // Cambia el color del botón de cancelación a rojo
          },
          buttonsStyling: false, // Desactiva los estilos de botón por defecto de Swal
          inputValidator: (value) => {
            if (!value || isNaN(value)) {
              return 'Por favor, ingrese solo números';
            }
          },
        }).then((result) => {
          if (result.isConfirmed) {
            const value = Number(result.value);
            const cant = value;
            const prod = { ...producto, cant };

            const productoExistenteIndex = compras.findIndex((item) => item.id === prod.id);
            if (productoExistenteIndex !== -1) {
                if (cant === 0) {
                    const carritoActualizado = compras.filter((item, index) => index !== productoExistenteIndex);
                    setCompras(carritoActualizado);
                  } else {
                    const carritoActualizado = [...compras];
                    carritoActualizado[productoExistenteIndex] = prod;
                    setCompras(carritoActualizado);
                    
                  }
                 
            } else {
              setCompras([...compras, prod]);
              
            }
    
            // Almacenar en el localStorage
            localStorage.setItem('compras', JSON.stringify([...compras, prod]));
            //console.log(compras)
    
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            // No se seleccionó ningún valor, se canceló el cuadro de diálogo
            // Puedes agregar aquí el código que deseas ejecutar en caso de cancelación
          }
        });
      }
      
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
            <Button className="btn btn-danger btn-sm" onClick={() => comprar(prod)}>Comprar</Button>
            <Button variant="success" size="sm"  className='mx-1' onClick={handleShow}>Detalle</Button>
        </div>
        </div>
        <Detalle show={show} handleClose={handleClose} producto={props}/>
    </div>
    
  )
}

export default Productos