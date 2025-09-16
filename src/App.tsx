import ContactCard from './components/ContactCard'
import ContactsTable from './containers/ContactsTable'
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
      <Body>
        <ContactsTable />
      </Body>
    </>
  )
}

export default App
