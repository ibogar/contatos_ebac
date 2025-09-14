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
  align-items: center;
`

export const SearchContainer = styled.div`
  background-color: #2e2e61;
  height: 300px;
`

export const Body = styled.div`
  background-color: ${variables.mainColor};
`

export default GlobalStyle
