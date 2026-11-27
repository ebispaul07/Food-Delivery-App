import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Session from './Components/Sessions/Session.jsx'
import ProductApi from './Components/Products/ProductApi.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Register from './Components/RegisterAndLogin/Register.jsx'
import Login from './Components/RegisterAndLogin/Login.jsx'

function App() {
  const [search, setSearch] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  // const [cartCount,setCartCount]=useState(0);
  const [cartDrawerOpen,setCartDrawerOpen]=useState(false);
  const [ItemToCart,setItemToCart]=useState([]);
  const cartCount = ItemToCart.length;

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('isLoggedIn') === 'true'
  );

  useEffect(() => {
    const syncLoginState = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('auth-change', syncLoginState);
    window.addEventListener('storage', syncLoginState);

    return () => {
      window.removeEventListener('auth-change', syncLoginState);
      window.removeEventListener('storage', syncLoginState);
    };
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/products"
        element={
          isLoggedIn ? (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
              <Header
                onSearch={setSearch}
                cartCount={cartCount}
                setCartDrawerOpen={setCartDrawerOpen}
              />

              <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                <div style={{ flexShrink: 0 }}>
                  <Session
                    selectedSession={selectedSession}
                    setSelectedSession={setSelectedSession}
                  />
                </div>

                <div style={{ flex: 1, overflowY: 'auto' }}>
                  <ProductApi
                    search={search}
                    selectedSession={selectedSession}
                    setItemToCart={setItemToCart}
                  />
                </div>
              </div>

              <Cart
                cartDrawerOpen={cartDrawerOpen}
                setCartDrawerOpen={setCartDrawerOpen}
                ItemToCart={ItemToCart}
                setItemToCart={setItemToCart}
              />
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? '/products' : '/login'} replace />}
      />
    </Routes>
  )
}

export default App


    
