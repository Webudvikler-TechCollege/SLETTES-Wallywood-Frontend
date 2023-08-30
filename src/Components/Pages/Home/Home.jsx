import { ContentWrapper } from "../../App/ContentWrapper/ContentWrapper"
import { SlideWrapper } from "../../App/SlideWrapper/SlideWrapper"
import Main from "../../Partials/Main/Main"

const Home = () => {
  return (
	<>
	<SlideWrapper area="hero" />
	<Main area="main">
		<ContentWrapper title="Sidste nyt">
			
		</ContentWrapper>
	</Main>
	</>
  )
}

export default Home
