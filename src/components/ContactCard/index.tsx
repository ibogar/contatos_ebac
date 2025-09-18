import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { edit, remove } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contact'
import * as G from '../../styles'

type Props = ContactClass

const ContactCard = ({
  id,
  name: ogName,
  telephone: ogTelephone,
  email: ogEmail
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (ogName.length >= 0) {
      setName(ogName)
    }
    if (ogTelephone && ogTelephone.length >= 0) {
      setTelephone(ogTelephone)
    }
    if (ogEmail && ogEmail.length >= 0) {
      setEmail(ogEmail)
    }
  }, [ogName, ogTelephone, ogEmail])

  function saveEdit() {
    setEditing(false)
    dispatch(
      edit({
        id,
        name,
        telephone,
        email
      })
    )
  }

  function cancelEdit() {
    setEditing(false)
    setName(ogName)
    if (ogTelephone) {
      setTelephone(ogTelephone)
    }
    if (ogEmail) {
      setEmail(ogEmail)
    }
  }

  return (
    <S.Card>
      <G.Label htmlFor={name}>Nome</G.Label>
      <S.Name
        id={name}
        type="text"
        disabled={!editing}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <G.Label htmlFor={email}>E-mail</G.Label>
      <S.Email
        id={email}
        type="email"
        disabled={!editing}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <G.Label htmlFor={telephone}>Telefone</G.Label>
      <S.Tel
        id={telephone}
        type="tel"
        disabled={!editing}
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      {editing ? (
        <G.ActionsContainer>
          <G.PositiveBtn onClick={saveEdit}>Salvar</G.PositiveBtn>
          <G.DangerBtn onClick={cancelEdit}>Cancelar</G.DangerBtn>
        </G.ActionsContainer>
      ) : (
        <G.ActionsContainer>
          <G.EditBtn onClick={() => setEditing(true)}>Editar</G.EditBtn>
          <G.DangerBtn onClick={() => dispatch(remove(id))}>Apagar</G.DangerBtn>
        </G.ActionsContainer>
      )}
    </S.Card>
  )
}

export default ContactCard
