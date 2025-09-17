import { useSelector } from 'react-redux'
import ContactCard from '../../components/ContactCard'
import { RootReducer } from '../../store'

const ContactsTable = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { searchType, searchQuery } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterContacts = () => {
    let filteredContacts = items
    if (searchQuery !== undefined) {
      if (searchType === 'name') {
        filteredContacts = filteredContacts.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
      if (searchType === 'telephone') {
        filteredContacts = filteredContacts.filter(
          (item) => item.telephone && item.telephone.includes(searchQuery)
        )
      }
      if (searchType === 'email') {
        filteredContacts = filteredContacts.filter(
          (item) => item.email && item.email.includes(searchQuery.toLowerCase())
        )
      }
      return filteredContacts
    } else {
      return items
    }
  }

  const contacts = filterContacts()
  return (
    <>
      {contacts.map((c) => (
        <ContactCard
          key={c.id}
          id={c.id}
          name={c.name}
          telephone={c.telephone ? c.telephone : ''}
          email={c.email ? c.email : ''}
        />
      ))}
    </>
  )
}

export default ContactsTable
