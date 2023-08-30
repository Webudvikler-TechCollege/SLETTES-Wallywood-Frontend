import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "../Auth/Auth"

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const { loginData } = useAuth();

  useEffect(() => {
      const getCartData = async () => {
        const options = {
          headers: {
            Authorization: `Bearer ${loginData.access_token}`,
          }
        }
  
        const endpoint = `http://localhost:4000/cart`
        try {
          if(loginData && loginData.access_token) {
            const result = await axios.get(endpoint, options)
            sessionStorage.setItem('cartitems', JSON.stringify(result.data));
            setCartItems(result.data)
          }
        } 
        catch(err) {
          console.error(`Fejl i kald: ${err}`)
        }  
      }
      getCartData()
  

}, [children, loginData])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartData = () => useContext(CartContext)

export { CartProvider, useCartData }
