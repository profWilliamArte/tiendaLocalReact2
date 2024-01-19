import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
const Detalle = ({show, handleClose, producto}) => {

    const { imagen,nombre, disponible, categoria, precio} = producto.data;

    console.log(imagen)
  return (
   <>
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>Detalle del producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <div className='col-md-6'> 
                        <img src={`img/${imagen}`} alt="" className='img-fluid' />
                    </div>
                    <div className='col-md-6'> 
                        <h2>{nombre}</h2>
                        <h5><b>Categoria: </b>{categoria}</h5>
                        <h5><b>Disponible: </b>({disponible})</h5><br/>
                         <Badge bg="danger"><h4 ><b>Precio: </b> {precio} $</h4></Badge>
                    </div>
                </div>


            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
   </>
  )
}

export default Detalle