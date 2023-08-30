import Main from "../../Partials/Main/Main"
import { ContentWrapper } from "../../App/ContentWrapper/ContentWrapper"

const Contact = () => {
  const handleClick = (e) => {
    console.dir(e.target)
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
