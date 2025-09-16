import { Provider } from 'react-redux'
import ContactsTable from './containers/ContactsTable'
import SearchBar from './containers/Searchbar'
import GlobalStyle, { Body, Container, SearchContainer } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <SearchContainer>
        <Container>
          <SearchBar />
        </Container>
      </SearchContainer>
      <Body>
        <ContactsTable />
      </Body>
    </Provider>
  )
}

export default App
