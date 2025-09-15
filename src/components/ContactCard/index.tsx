import * as S from './styles'

const ContactCard = () => {
  return (
    <S.Card>
      <S.Name>Iuri</S.Name>
      <S.Tel>34 1234-1234</S.Tel>
      <S.Email>iuri@example.com</S.Email>
      <S.ActionsContainer>
        <S.EditBtn>Editar</S.EditBtn>
        <S.DeleteBtn>Apagar</S.DeleteBtn>
      </S.ActionsContainer>
    </S.Card>
  )
}

export default ContactCard
