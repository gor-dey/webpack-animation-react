import { darkBlueColor } from '@/shared/cssConstants'
import { StyleProps } from '@/shared/types'
import styled from 'styled-components'

const Dark = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${darkBlueColor};
  cursor: pointer;
`
const Light = styled(Dark)`
  opacity: 0.3;
`

type Props = StyleProps & {
  onClick?: () => void
}

export const TinyDotDark = ({ className, children, onClick }: Props) => {
  return (
    <Dark onClick={onClick} className={className}>
      {children}
    </Dark>
  )
}
export const TinyDotLight = ({ className, children, onClick }: Props) => {
  return (
    <Light onClick={onClick} className={className}>
      {children}
    </Light>
  )
}
