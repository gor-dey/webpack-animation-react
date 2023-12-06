import { H1, VerticalElement } from '@/shared/components'
import { mainPadding } from '@/shared/cssConstants'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;

  & > :first-child {
    transform: translateX(-${mainPadding});
  }
`

export const Title = () => {
  return (
    <Div>
      <VerticalElement />
      <H1 />
    </Div>
  )
}
