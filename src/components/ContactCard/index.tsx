import { useState } from 'react'
import * as S from './styles'

const ContactCard = () => {
  const [editing, setEditing] = useState(false)

  return (
    <S.Card>
      <S.Name disabled={!editing}>Iuri</S.Name>
      <S.Tel disabled={!editing}>34 1234-1234</S.Tel>
      <S.Email disabled={!editing}>iuri@example.com</S.Email>
      <S.ActionsContainer>
        <S.EditBtn onClick={() => setEditing(true)}>Editar</S.EditBtn>
        <S.DeleteBtn>Apagar</S.DeleteBtn>
      </S.ActionsContainer>
    </S.Card>
  )
}

export default ContactCard
