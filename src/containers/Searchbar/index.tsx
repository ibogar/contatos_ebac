import { useDispatch, useSelector } from 'react-redux'
import { InputContainer, Label, SearchInput, Select } from './styles'
import { setQuery, setType } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { searchQuery } = useSelector((state: RootReducer) => state.filter)

  return (
    <>
      <InputContainer>
        <Label>Buscar contato:</Label>
        <div>
          <SearchInput
            type="text"
            value={searchQuery}
            onChange={(e) => dispatch(setQuery(e.target.value))}
          />
          <Select onChange={(e) => dispatch(setType(e.target.value))}>
            <option value="name">Nome</option>
            <option value="telephone">Telefone</option>
            <option value="email">E-mail</option>
          </Select>
        </div>
      </InputContainer>
    </>
  )
}

export default SearchBar
