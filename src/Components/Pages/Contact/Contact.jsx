import Main from "../../Partials/Main/Main"
import { ContentWrapper } from "../../App/ContentWrapper/ContentWrapper"
import axios from 'axios'

const Contact = () => {
  const handleClick = async (e) => {
    const formdata = new URLSearchParams()
    formdata.append('name', e.target.form.name.value)
    formdata.append('email', e.target.form.email.value)
    formdata.append('comment', e.target.form.comment.value)
    
    const endpoint = `http://localhost:4000/contact`
    const result = await axios.post(endpoint, formdata)
    console.log(result)
  }

  return (
    <Main area="main">
      <ContentWrapper title="Kontakt os">
        <form action="">
          <div>
            <label htmlFor="name">Navn:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="comment">Kommentar:</label>
            <textarea name="comment" id="comment"></textarea>
          </div>
          <div>
            <button type="button" onClick={(e) => handleClick(e)}>
              Send
            </button>
          </div>
        </form>
      </ContentWrapper>
    </Main>
  )
}

export default Contact
