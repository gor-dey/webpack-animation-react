import { BigInts } from '@/shared/components'
import { RingWidget } from '@/widgets/RingWidget'
import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
export const BigIntsPos = styled(BigInts)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const RingPos = styled(RingWidget)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const SwiperPos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  & > div:first-child {
    transform: translateX(50px);
    max-width: fit-content;
  }
`
