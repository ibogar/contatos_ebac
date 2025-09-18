import { useNavigate } from 'react-router-dom'
import * as G from '../../styles'
import { Form, FormContainer } from './styles'

const AddContactForm = () => {
  const navigate = useNavigate()

  return (
    <FormContainer>
      <G.Title>Adicionar contato:</G.Title>
      <Form>
        <G.Label htmlFor="">Nome</G.Label>
        <G.Input type="text" />
        <G.Label htmlFor="">E-mail</G.Label>
        <G.Input type="text" />
        <G.Label htmlFor="">Telefone</G.Label>
        <G.Input type="text" />
      </Form>
      <G.ActionsContainer>
        <G.PositiveBtn>Adicionar</G.PositiveBtn>
        <G.DangerBtn onClick={() => navigate('/')}>Cancelar</G.DangerBtn>
      </G.ActionsContainer>
    </FormContainer>
  )
}

export default AddContactForm
