import styled from 'styled-components'
import variables from '../../styles/variables'
import { Button } from '../../styles'

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

export const Name = styled.h3`
  font-size: 32px;
  font-weight: bold;
`
export const Tel = styled.p`
  font-size: 16px;
  padding: 1vh 0;
`

export const Email = styled.p`
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
