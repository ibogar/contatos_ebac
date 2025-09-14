import SearchBar from './containers/Searchbar'
import GlobalStyle, { Body, Container, SearchContainer } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <SearchContainer>
        <Container>
          <SearchBar />
        </Container>
      </SearchContainer>
      <Body></Body>
    </>
  )
}

export default App
