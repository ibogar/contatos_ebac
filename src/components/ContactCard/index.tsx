import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { edit } from '../../store/reducers/contacts'
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
      <S.Name
        disabled={!editing}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <S.Tel
        disabled={!editing}
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <S.Email
        disabled={!editing}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {editing ? (
        <S.ActionsContainer>
          <S.PositiveBtn onClick={saveEdit}>Salvar</S.PositiveBtn>
          <S.DangerBtn onClick={cancelEdit}>Cancelar</S.DangerBtn>
        </S.ActionsContainer>
      ) : (
        <S.ActionsContainer>
          <S.EditBtn onClick={() => setEditing(true)}>Editar</S.EditBtn>
          <S.DangerBtn>Apagar</S.DangerBtn>
        </S.ActionsContainer>
      )}
    </S.Card>
  )
}

export default ContactCard
