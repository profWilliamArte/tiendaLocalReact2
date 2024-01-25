import Button from 'react-bootstrap/Button';
import { ComprasContext } from '../context/CompraProvider';
import Swal from 'sweetalert2';
import { useContext, useEffect } from 'react';

const Carrito = () => {
  const { compras, setCompras } = useContext(ComprasContext);
  const { total, setTotal } = useContext(ComprasContext);

  useEffect(()=>{
    setTotal(compras.length)
  })

  useEffect(()=>{
    setTotal(compras.length)
  })


  const formatearMoneda = (valor) => {
    const resultado = valor.toLocaleString("es", {
      style: "currency",
      currency: "USD",
      useGrouping: true,
    });
    return resultado.replace("US$", "");
  };

  const verCarrito = () => {
    let totalCantidad = 0;
    let totalPrecio = 0;
    let contador = 0;
  
    const carritoTabla = compras.map((producto) => {
      const subtotal = producto.precio * producto.cant;
      totalCantidad += producto.cant;
      totalPrecio += subtotal;
      contador++;
  
      const precioFormateado = formatearMoneda(producto.precio);
      const subtotalFormateado = formatearMoneda(subtotal);
  
      return `
        <tr>
          <td>${contador}</td>
          <td class="text-start">${producto.nombre}</td>
          <td>${producto.cant.toLocaleString("es", { useGrouping: true })}</td>
          <td>${precioFormateado}</td>
          <td>${subtotalFormateado}</td>
        </tr>`;
    }).join("");
  
    const totalPrecioFormateado = formatearMoneda(totalPrecio);
  
    const tablaHTML = `
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-sm tablaCarrito fs-6">
          <thead class="table-dark">
            <tr className='text-center'>
              <th>Id</th>
              <th>Nombre</th>
              <th>Cant</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${carritoTabla}
            <tr class="fw-bold">
              <td colspan="2"></td>
              <td>${totalCantidad.toLocaleString("es", { useGrouping: true })}</td>
              <td></td>
              <td>${totalPrecioFormateado}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  
    Swal.fire({
      position: "top-center",
      title: "Carrito",
      html: tablaHTML,
      width: '800px',
    });
  }


  function enviarDatos() {
    Swal.fire({
      title: '¿Estás seguro de cerrar la Compra?',
      text: "Esta acción vaciará el carrito y enviará los datos. ¿Deseas continuar?",
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar datos',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'btn btn-success me-2',
        cancelButton: 'btn btn-secondary',
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          compras: compras,
        };
        
        // Create a new HTMLFormElement
        const form = document.createElement('form');
        form.method = 'POST';

        form.action = 'http://back/recibeCompra.php'; // Replace with the correct URL
        
        // Create an input element to hold the data
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'compras';
        input.value = JSON.stringify(data);
        
        // Append the input element to the form
        form.appendChild(input);
        
        // Append the form to the document body and submit it
        document.body.appendChild(form);
        /*form.submit();*/
        
        setCompras([]);
        localStorage.removeItem('compras');
        Swal.fire('Carrito vaciado', 'El carrito ha sido Enviado correctamente', 'success');
      }
    });
  }
  function limpiarCompra() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción vaciará el carrito y eliminará todos los productos. ¿Deseas continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'btn btn-danger me-2',
        cancelButton: 'btn btn-secondary',
      },
      buttonsStyling: false, 
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove all items from the shopping cart
        setCompras([]);
        
        // Clear the localStorage
        localStorage.removeItem('compras');
  
        Swal.fire('Carrito vaciado', 'El carrito ha sido vaciado correctamente', 'success');
      }
    });
  }





  return (
    <>

      <div className=' py-3 '>

   
        <Button variant="outline-primary" type='submit' className='position-relative mx-2' onClick={() => limpiarCompra()}>  
            <i className="bi bi-trash fs-6"></i> Vaciar Carrito
        </Button>

        <Button variant="outline-success" type='submit' className='position-relative mx-2' onClick={() => enviarDatos()}>  
            <i className="bi bi-arrow-up-right fs-6"></i> Cerrar Carrito
        </Button>
        <Button variant="outline-danger" type='submit' className='position-relative mx-2' onClick={() =>  verCarrito() }>  
            <i className="bi bi-cart4 fs-6"></i> Ver Carrito
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark fs-6">{total}</span>
        </Button>

      </div>
    
    </>
  )
}

export default Carrito