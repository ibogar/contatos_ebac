import { useSelector } from 'react-redux'
import ContactCard from '../../components/ContactCard'
import { RootReducer } from '../../store'

const ContactsTable = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  return (
    <>
      {items.map((c) => (
        <ContactCard
          key={c.id}
          id={c.id}
          name={c.name}
          telephone={c.telephone ? c.telephone : ' '}
          email={c.email ? c.email : ' '}
        />
      ))}
    </>
  )
}

export default ContactsTable
