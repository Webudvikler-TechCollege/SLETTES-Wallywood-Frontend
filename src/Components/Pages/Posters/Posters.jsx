import { ContentWrapper } from "../../App/ContentWrapper/ContentWrapper"
import { PostersStyle } from "./Posters.style"
import { Outlet } from "react-router-dom"
import Main from "../../Partials/Main/Main"
import { FilterNav } from "./FilterNav/FilterNav"

export const Posters = () => {
  return (
    <Main>
      <ContentWrapper title="Plakater" description="Se vores udvalg af plakater">
        <PostersStyle>
            <FilterNav />
            <Outlet />
        </PostersStyle>
      </ContentWrapper>
    </Main>
  )
}
