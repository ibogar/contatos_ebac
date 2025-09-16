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
  background-color: #2e2e61;
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

export default GlobalStyle
