import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { edit, remove } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contact'

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
      <S.Title htmlFor={name}>Nome</S.Title>
      <S.Name
        id={name}
        type="text"
        disabled={!editing}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <S.Title htmlFor={email}>E-mail</S.Title>
      <S.Email
        id={email}
        type="email"
        disabled={!editing}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Title htmlFor={telephone}>Telefone</S.Title>
      <S.Tel
        id={telephone}
        type="tel"
        disabled={!editing}
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      {editing ? (
        <S.ActionsContainer>
          <S.PositiveBtn onClick={saveEdit}>Salvar</S.PositiveBtn>
          <S.DangerBtn onClick={cancelEdit}>Cancelar</S.DangerBtn>
        </S.ActionsContainer>
      ) : (
        <S.ActionsContainer>
          <S.EditBtn onClick={() => setEditing(true)}>Editar</S.EditBtn>
          <S.DangerBtn onClick={() => dispatch(remove(id))}>Apagar</S.DangerBtn>
        </S.ActionsContainer>
      )}
    </S.Card>
  )
}

export default ContactCard
