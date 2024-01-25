import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo2.png'


const Header = () => {




  const [valueSearch, setValueSearch]=useState("");
  const navigate = useNavigate();



//240806

  const onSearchChange = (e) => {
    setValueSearch(e.target.value);
   // console.log(valueSearch);
  };
 const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(valueSearch)
    navigate('/Busqueda', {
      state: valueSearch
    });	
  };


  
  return (
    <Navbar expand="lg" className="bg-menu justify-content-between" data-bs-theme="linght" >
    <Container fluid>
      <Navbar.Brand href="#"><img src={logo} alt="logo" width={200} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/Home" className='fs-4'>Home</Nav.Link>
          <Nav.Link href="/Tienda" className='fs-4'>Tienda</Nav.Link>

        </Nav>
       <Form className="d-flex" onSubmit={onSearchSubmit}>
          <Form.Control
            value={valueSearch} 
            onChange={onSearchChange}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" type='submit' className='me-5'>Search</Button>


        </Form>



       


        
      </Navbar.Collapse>
       
    </Container>
  </Navbar>
  )
}

export default Header