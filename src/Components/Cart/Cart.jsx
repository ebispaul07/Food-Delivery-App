import React,{useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';


const Cart = ({cartDrawerOpen,setCartDrawerOpen,ItemToCart,setItemToCart}) => {

    const handleDrawerClose=()=>{
        setCartDrawerOpen(false)
    }

    const [itemCount, setItemCount] = useState({});

    const handleItemIncreaser=(item)=> {
        setItemCount((previousItem)=>({
            ...previousItem,[item]:(previousItem[item]||1)+1,
        }));
    }
    
    const handleItemDecreaser=(item)=> {
        setItemCount((previousItem)=>({
            ...previousItem,[item]:Math.max(1,(previousItem[item]||1)-1),
        }));
    }

    let sum=0;

    const handleDeleteItem=(itemId)=>{
      setItemToCart((previousItem)=>previousItem.filter((item)=>item.id!==itemId)
    )}

    const [isBuying,setIsBuying]=useState(false);
    const [popupShow,setPopupShow]=useState(false);
    
  return (
    <div>
        <Offcanvas 
      show={cartDrawerOpen} 
      onHide={handleDrawerClose} 
      placement="end" 
      style={{ width: '50vw' }}
    >
      
      <Offcanvas.Header closeButton className="border-bottom">
        <Offcanvas.Title className="fw-bold">Your Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body >
        {ItemToCart.length=== 0 ? (<h4>Your Cart is EMpty</h4>):(
        
        ItemToCart.map((item)=>(
            
            
            <div key={item.id} className="mb-3" 
        style={{display: 'flex',alignItems: 'center',gap: '15px',padding: '10px',}}>
            
            <img src={item.image} alt={item.name} style={{ width: '100px' }} />

            <div style={{display: 'flex',flexDirection: 'column',gap: '5px',}}>
            <h6>{item.name}</h6>
            <p>Price: ${item.caloriesPerServing*(itemCount[item.id] || 1)}</p>
            {void (sum = sum + item.caloriesPerServing * (itemCount[item.id] || 1))}
            

           <div>
            <Button onClick={()=>handleItemDecreaser(item.id)}>-</Button>
             {itemCount[item.id]||1}
            <Button onClick={()=>handleItemIncreaser(item.id)}>+</Button>
             <Button className='bg-danger m-3 p-1' onClick={()=>handleDeleteItem(item.id)}>Delete</Button>
            </div>

            </div>
            

            </div>
        )))}


        <h1 className="text-dark">Total:${sum}</h1>

          <div>
              <Button className='bg-warning m-3' disabled={ItemToCart.length===0}>View Cart</Button>
              <Button className='bg-success' onClick={()=>{setIsBuying(true);setTimeout(() => { setIsBuying(false); setItemToCart([]); setCartDrawerOpen(false); setPopupShow(true);}, 3000); }} disabled={ItemToCart.length === 0}>Buy Now!</Button>
            </div>

      {isBuying && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 1060 }}
  >
    <div className="d-flex gap-2">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="dark" />
    </div>
    <h5 className="mt-3 text-dark">Placing your order...</h5>
  </div>
)}
        
      </Offcanvas.Body>
    </Offcanvas>

    <Modal
        show={popupShow}
        onHide={() => setPopupShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Confirmed!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Thank you for your purchase :)</h4>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setPopupShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

    

    </div>
  )
}

export default Cart