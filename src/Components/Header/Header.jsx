import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import homeImg from '../../assets/Home.png';
import cartImg from '../../assets/cart.png';

const Header = ({ onSearch ,cartCount,setCartDrawerOpen}) => {
  const navigate = useNavigate();

  let registeredUser = null;
  try {
    registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
  } catch {
    registeredUser = null;
  }

  const username = registeredUser?.username || registeredUser?.email || 'Profile';
  const profileInitial = username.charAt(0).toUpperCase();

  const handleDrawerOpen=()=>{
        setCartDrawerOpen(true)
    }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.dispatchEvent(new Event('auth-change'));
    navigate('/login', { replace: true });
  };
  
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

        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
              <img src={cartImg} alt="Cart" width="40" height="40" onClick={handleDrawerOpen}/>

              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
                 )}
          </div>

          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              className="d-flex align-items-center gap-2 border-0"
              id="profile-menu"
            >
              <span
                className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold"
                style={{ width: '40px', height: '40px' }}
              >
                {profileInitial}
              </span>
              <span>{username}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>{registeredUser?.email || 'No account details'}</Dropdown.Header>
              <Dropdown.Item as="button" onClick={handleLogout}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      
      </Navbar>
      
      



        
    </div>
  )
}

export default Header
