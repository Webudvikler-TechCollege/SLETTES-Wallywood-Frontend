import Main from "../../Partials/Main/Main"
import { ContentWrapper } from "../../App/ContentWrapper/ContentWrapper"
import { useAuth } from "../../App/Auth/Auth"
import axios from "axios"
import { useState } from "react"

// Function Component til login
export const Login = () => {
  // Destructer vars fra useAuth
  const { loginData, setLoginData } = useAuth()

  // Var til fejlmeddelelse
  const [message, setMessage] = useState("")

  // Definerer funktion til at kalde api med form data
  const sendLoginRequest = async (data) => {
    const formData = new URLSearchParams()
    formData.append("username", data.target.form.username.value)
    formData.append("password", data.target.form.password.value)

    try {
      const result = await axios.post(
        "http://localhost:4000/login",
        formData
      )
      handleSessionData(result.data)
    } catch (err) {
      /* Sætter bedsked var hvis der er en fejl */
      setMessage("Kunne ikke logge ind!")
    }
  }

  // Definerer funktion til at håndtere form data til session storage
  const handleSessionData = (data) => {
    if (data) {
      sessionStorage.setItem("token", JSON.stringify(data))
      setLoginData(data)
    }
  }

  // Definerer funktion til log out
  const logOut = () => {
    sessionStorage.removeItem("token")
    setLoginData("")
  }

  return (
    <Main area="main">
      <ContentWrapper
        title="Login på StringsOnline"
        description="Din StringsOnline"
      >
        {/* Vis form hvis loginData er false */}
        {!loginData && !loginData.username ? (
          // Sætter onSubmit event med closure function
          <form>
            <div>
              {/* Input username med form hook settings */}
              <label htmlFor="username">Brugernavn: </label>
              <input
                type="text"
                id="username"
                placeholder="Indtast brugernavn"
              />
            </div>
            <div>
              {/* Input password med form hook settings */}
              <label htmlFor="password">Adgangskode: </label>
              <input
                type="password"
                id="password"
                placeholder="Indtast adgangskode"
              />
              {/* Vis meddelelse hvis der er en fejl */}
            </div>

            {/* Tjekker om besked er true og viser den */}
            {message && <div>{message}</div>}

            <div>
              <button type="button" onClick={sendLoginRequest}>Send</button>
            </div>
          </form>
        ) : (
          // Vis logindata hvis bruger er logget ind
          <div>
            <p>Du er logget ind som {`${loginData.firstname} ${loginData.lastname} `}</p>
            <button onClick={logOut}>Log ud</button>
          </div>
        )}
      </ContentWrapper>
    </Main>
  )
}
