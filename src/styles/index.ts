import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    }

  body {
    background-color: ${variables.mainColor};
  }
`

export const Container = styled.div`
  width: 60%;
  max-width: 900px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const SearchContainer = styled.div`
  background-color: ${variables.highlightMainClr};
  height: 30vh;
`

export const Body = styled.div`
  background-color: ${variables.mainColor};
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  padding: 4vh 10vw;
  overflow-y: scroll;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
`

export const DangerBtn = styled(Button)`
  background-color: ${variables.dangerColor};
  color: ${variables.mainColor};
`

export const EditBtn = styled(Button)`
  background-color: ${variables.neutralColor};
  color: ${variables.mainColor};
`
export const PositiveBtn = styled(Button)`
  background-color: ${variables.positiveColor};
  color: ${variables.mainColor};
`
export const ActionsContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  gap: 10px;
`

export const Title = styled.h1`
  color: ${variables.textColor};
  font-weight: bold;
  font-size: 20px;
`

export const Label = styled.label`
  font-size: 12px;
  font-style: italic;
  cursor: pointer;
`

export const Input = styled.input`
  flex: 1;
  margin-top: 20px;
  margin-right: 10px;
  padding: 10px 14px;
  border: 1px solid ${variables.mainColor};
  border-radius: 10px;
  background-color: ${variables.mainColor};
  color: ${variables.textColor};
  font-size: 16px;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${variables.textColor};
    box-shadow: 0 0 0 2px rgba(192, 105, 12, 0.3);
  }
`

export default GlobalStyle
