import styled, { css } from 'styled-components'
import variables from '../../styles/variables'

const sharedInput = css`
  background: inherit;
  color: inherit;
  border: none;
  outline: none;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
`

export const Card = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${variables.highlightMainClr};
  color: ${variables.textColor};
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  padding: 3vh;
  position: relative;
`

export const Name = styled.input`
  ${sharedInput};
  font-size: 24px;
`
export const Tel = styled.input`
  ${sharedInput};
  font-size: 12px;
`

export const Email = styled.input`
  ${sharedInput};
  font-size: 12px;
`
