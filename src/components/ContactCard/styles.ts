import styled, { css } from 'styled-components'
import variables from '../../styles/variables'
import { Button } from '../../styles'

const sharedTextarea = css`
  background: inherit;
  color: inherit;
  border: none;
  outline: none;
  resize: none;
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

export const Name = styled.textarea`
  ${sharedTextarea};
  font-size: 32px;
  font-weight: bold;
`
export const Tel = styled.textarea`
  ${sharedTextarea};
  font-size: 16px;
`

export const Email = styled.textarea`
  ${sharedTextarea};
  font-size: 16px;
`

export const ActionsContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  gap: 10px;
`

export const DeleteBtn = styled(Button)`
  background-color: ${variables.dangerColor};
  color: ${variables.mainColor};
`

export const EditBtn = styled(Button)`
  background-color: ${variables.neutralColor};
  color: ${variables.mainColor};
`
