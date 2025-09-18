import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { setQuery, setType } from '../../store/reducers/filter'
import { RootReducer } from '../../store'
import { Input, Title } from '../../styles'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { searchQuery } = useSelector((state: RootReducer) => state.filter)

  return (
    <>
      <S.InputContainer>
        <Title>Buscar contato:</Title>
        <div>
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => dispatch(setQuery(e.target.value))}
          />
          <S.Select onChange={(e) => dispatch(setType(e.target.value))}>
            <option value="name">Nome</option>
            <option value="telephone">Telefone</option>
            <option value="email">E-mail</option>
          </S.Select>
        </div>
      </S.InputContainer>
    </>
  )
}

export default SearchBar
