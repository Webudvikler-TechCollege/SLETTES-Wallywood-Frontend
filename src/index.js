import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { theme } from "./Components/Styled/Theme"
import { GlobalStyle } from "./Components/Styled/Global.style"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./Components/App/Auth/Auth"
import { CartProvider } from "./Components/App/Providers/CartProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </CartProvider>        
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
)
