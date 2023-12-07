import { borderColor, darkBlueColor } from '@/shared/cssConstants'
import styled from 'styled-components'
import { backSvg, frontSvg } from './content'
import { backElement, frontElement } from '@/shared/utils'

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${borderColor};
  color: ${darkBlueColor};
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background-color: #ffff;
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`

type Props = {
  content: typeof frontElement | typeof backElement | number
  onClick: () => void
}

export const ButtonRound = ({ content, onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      {content === frontElement && frontSvg}
      {content === backElement && backSvg}
      {typeof content === 'number' && content}
    </Button>
  )
}
