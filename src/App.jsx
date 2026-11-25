import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Session from './Components/Sessions/Session.jsx'
import ProductApi from './Components/Products/ProductApi.jsx'
import Cart from './Components/Cart/Cart.jsx'
function App() {
  const [search, setSearch] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  // const [cartCount,setCartCount]=useState(0);
  const [cartDrawerOpen,setCartDrawerOpen]=useState(false);
  const [ItemToCart,setItemToCart]=useState([]);
  const cartCount = ItemToCart.length;


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      
      <Header onSearch={setSearch} cartCount={cartCount} setCartDrawerOpen={setCartDrawerOpen} />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        <div style={{ flexShrink: 0 }}>
          <Session selectedSession={selectedSession} setSelectedSession={setSelectedSession}/>
        </div>

       
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <ProductApi search={search} selectedSession={selectedSession}   setItemToCart={setItemToCart}/>
        </div>
        
      </div>
      <Cart cartDrawerOpen={cartDrawerOpen} setCartDrawerOpen={setCartDrawerOpen} ItemToCart={ItemToCart} setItemToCart={setItemToCart}/>

    </div>
  )
}

export default App


    
