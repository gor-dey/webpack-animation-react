import { Line } from '@/shared/components'
import { StyleProps } from '@/shared/types/styleTypes'
import styled from 'styled-components'

const VerticalLine = styled(Line)`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  height: 100vh;
  width: 1px;
`

const HorizontalLine = styled(Line)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 1px;
  width: 100vw;
  max-width: 1440px;
`

export const CrossLines = ({ className, children }: StyleProps) => {
  return (
    <div className={className}>
      <VerticalLine />
      <HorizontalLine />
      {children}
    </div>
  )
}
