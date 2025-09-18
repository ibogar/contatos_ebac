import styled from 'styled-components'
import variables from '../../styles/variables'

export const FormContainer = styled.div`
  height: 60vh;
  width: 30vw;
  margin: 20vh auto;
  background-color: ${variables.highlightMainClr};
  color: ${variables.textColor};
  padding: 2rem;
  position: relative;

  Label {
    margin-top: 1rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
