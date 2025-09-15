import styled from 'styled-components'
import variables from '../../styles/variables'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 54px;

  div {
    display: flex;
  }
`

export const Label = styled.label`
  color: ${variables.textColor};
  font-weight: bold;
  font-size: 20px;
`

export const SearchInput = styled.input`
  flex: 1;
  margin-top: 20px;
  margin-right: 10px;
  padding: 10px 14px;
  border: 1px solid ${variables.mainColor};
  border-radius: 10px;
  background-color: ${variables.mainColor};
  color: ${variables.textColor};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${variables.textColor};
    box-shadow: 0 0 0 2px rgba(192, 105, 12, 0.3);
  }
`

export const Select = styled.select`
  margin-top: 20px;
  padding: 10px 14px;
  border: 1px solid ${variables.mainColor};
  border-radius: 10px;
  background-color: ${variables.mainColor};
  color: ${variables.textColor};
  font-size: 16px;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
    border-color: ${variables.textColor};
    box-shadow: 0 0 0 2px rgba(192, 105, 12, 0.3);
  }
`
