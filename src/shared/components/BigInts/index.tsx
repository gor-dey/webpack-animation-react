import { blueColor, pinkColor } from '@/shared/cssConstants'
import { StyleProps } from '@/shared/types/styleTypes'
import styled from 'styled-components'

const Div = styled.div`
  font-size: 200px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  gap: 0.5em;

  & > span:first-child {
    color: ${blueColor};
  }
  & > span:last-child {
    color: ${pinkColor};
  }
`

export const BigInts = ({ className, children }: StyleProps) => {
  return (
    <Div className={className}>
      <span>2015</span>
      <span>2022</span>
      {children}
    </Div>
  )
}
