import AddBtn from '../../components/AddBtn'
import ContactsTable from '../../containers/ContactsTable'
import SearchBar from '../../containers/Searchbar'
import { Body, Container, SearchContainer } from '../../styles'

const Home = () => {
  return (
    <>
      <SearchContainer>
        <Container>
          <SearchBar />
        </Container>
      </SearchContainer>
      <Body>
        <ContactsTable />
        <AddBtn />
      </Body>
    </>
  )
}

export default Home
