import { CrossLines, Ring, Title } from '@/entities'
import { BigInts } from '@/shared/components'
import { SwiperWidget } from '@/widgets'
import styled from 'styled-components'

const BigIntsPos = styled(BigInts)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const RingPos = styled(Ring)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const MainPage = () => {
  return (
    <Div>
      <Title />
      <BigIntsPos />
      <RingPos />
      <CrossLines />
      <SwiperWidget />
    </Div>
  )
}
