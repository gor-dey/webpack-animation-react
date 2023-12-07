import { blueColor, pinkColor } from '@/shared/cssConstants'
import styled from 'styled-components'

const Div = styled.div`
  background: rgb(56, 119, 238);
  background: linear-gradient(180deg, ${blueColor} 0%, ${pinkColor} 100%);
  height: 120px;
  width: 5px;
  margin-top: 5px;

  @media (max-width: 768px) {
    opacity: 0;
  }
`

export const VerticalElement = () => {
  return <Div />
}
