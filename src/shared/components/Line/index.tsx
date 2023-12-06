import { borderColor } from '@/shared/cssConstants'
import { StyleProps } from '@/shared/types/styleTypes'
import styled from 'styled-components'

const Div = styled.div`
  background-color: ${borderColor};
`

export const Line = ({ className, children }: StyleProps) => {
  return <Div className={className}>{children}</Div>
}
