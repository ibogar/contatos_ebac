import { InputContainer, Label, SearchInput, Select } from './styles'

const SearchBar = () => {
  return (
    <>
      <InputContainer>
        <Label>Buscar contato:</Label>
        <div>
          <SearchInput type="text" />
          <Select>
            <option value="">Nome</option>
            <option value="">Telefone</option>
          </Select>
        </div>
      </InputContainer>
    </>
  )
}

export default SearchBar
