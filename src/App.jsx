import Header from "./Components/Partials/Header/Header"
import NavBar from "./Components/Partials/NavBar/NavBar"
import Footer from "./Components/Partials/Footer/Footer"
import { ContainerStyle } from "./Components/Styled/Container.style"
import { GridPrimary } from "./Components/App/Grid/Grids"
import AppRouter from "./Components/App/AppRouter/AppRouter"
import CartIcon from "./Components/Pages/Cart/CartIcon/CartIcon"

function App() {
  return (
    <ContainerStyle maxwidth="1024">
        <GridPrimary>
          <Header area="header" />
          <div>
            <CartIcon />
            <NavBar area="navbar" />
          </div>
          <AppRouter />
          <Footer area="footer">Footer</Footer>
        </GridPrimary>
    </ContainerStyle>
  )
}

export default App
