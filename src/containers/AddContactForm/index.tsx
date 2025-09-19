import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as G from '../../styles'
import { Form, FormContainer } from './styles'
import { add } from '../../store/reducers/contacts'

const AddContactForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')

  function addContact(e: FormEvent) {
    e.preventDefault()
    dispatch(
      add({
        name: name,
        email: email,
        telephone: telephone
      })
    )
    navigate('/')
  }
  return (
    <FormContainer>
      <G.Title>Adicionar contato:</G.Title>
      <Form onSubmit={addContact}>
        <G.Label htmlFor="name">Nome</G.Label>
        <G.Input
          required
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <G.Label htmlFor="email">E-mail</G.Label>
        <G.Input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <G.Label htmlFor="tel">Telefone</G.Label>
        <G.Input
          type="tel"
          id="tel"
          onChange={(e) => setTelephone(e.target.value)}
        />
        <G.ActionsContainer>
          <G.PositiveBtn type="submit">Adicionar</G.PositiveBtn>
          <G.DangerBtn onClick={() => navigate('/')}>Cancelar</G.DangerBtn>
        </G.ActionsContainer>
      </Form>
    </FormContainer>
  )
}

export default AddContactForm
