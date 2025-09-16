import { useSelector } from 'react-redux'
import ContactCard from '../../components/ContactCard'
import { RootReducer } from '../../store'

const ContactsTable = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  return (
    <>
      {items.map((t) => (
        <ContactCard
          key={t.id}
          id={t.id}
          name={t.name}
          telephone={t.telephone}
          email={t.email}
        />
      ))}
    </>
  )
}

export default ContactsTable
