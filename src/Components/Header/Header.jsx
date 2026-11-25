import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import homeImg from '../../assets/Home.png';
import cartImg from '../../assets/cart.png';

const Header = ({ onSearch ,cartCount,setCartDrawerOpen}) => {

  const handleDrawerOpen=()=>{
        setCartDrawerOpen(true)
    }
  
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between px-4">
        
        <img src={homeImg} alt="Home" width="40" height="40" />
        

        <Form className="d-flex w-50" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => onSearch(event.target.value)}
             
            />
         </Form>

        <div className="position-relative">
            <img src={cartImg} alt="Cart" width="40" height="40" onClick={handleDrawerOpen}/>

            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
               )}
        </div>
      
      </Navbar>
      
      



        
    </div>
  )
}

export default Header
