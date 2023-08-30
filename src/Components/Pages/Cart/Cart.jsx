import { useCartData } from "../../App/Providers/CartProvider"
import { CartStyle } from "./Cart.style"
import Main from "../../Partials/Main/Main"
import { ContentWrapper } from "../../App/ContentWrapper/ContentWrapper"
import { ReactComponent as TrashCan } from "../../../Assets/svg/trash.svg"
import axios from "axios"
import { useAuth } from "../../App/Auth/Auth"
import { Link } from 'react-router-dom'

const Cart = () => {
  const { loginData } = useAuth()
  const { cartItems, setCartItems } = useCartData()

  let sum = cartItems.reduce((prev, current) => {
    return prev + +current.poster.price
  }, 0)

  const deleteItem = async (id) => {
    const options = {
      headers: {
        authorization: `Bearer ${loginData.access_token}`,
      },
    }

    const endpoint = `http://localhost:4000/cart/${id}`
    const result = await axios.delete(endpoint, options)
    if (result.data) {
      const endpoint = `http://localhost:4000/cart`
      const cart = await axios.get(endpoint, options)

      setCartItems(cart.data)
    }
  }

  return (
    <Main area="main">
      <ContentWrapper title="Indkøbskurv">
        {!loginData ? (
          <>
          <p>Du skal være logget ind for at se indkøbskurven</p>
          <Link to="/login">Gå til login</Link>
          </>
          ) : (
          <CartStyle>
            <div>
              <div>
                <b>Tekst</b>
              </div>
              <div>
                <b>Antal</b>
              </div>
              <div>
                <b>Pris</b>
              </div>
            </div>

            {cartItems &&
              cartItems.map((item) => {
                return (
                  <div key={item.id}>
                    <div>{item.poster.name}</div>
                    <div>{item.quantity}</div>
                    <div>{item.poster.price},00</div>
                    <div>
                      <TrashCan onClick={(e) => deleteItem(item.id)} />
                    </div>
                  </div>
                )
              })}
            <div>
              <div></div>
              <div></div>
              <div>
                <b>DKK {sum},00</b>
              </div>
            </div>
          </CartStyle>
        )}
      </ContentWrapper>
    </Main>
  )
}

export default Cart
