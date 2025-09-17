import styled, { css } from 'styled-components'
import variables from '../../styles/variables'
import { Button } from '../../styles'

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

export const Title = styled.label`
  font-size: 12px;
  font-style: italic;
  cursor: pointer;
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

export const ActionsContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  gap: 10px;
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
