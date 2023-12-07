import { TinyDotsLine, Title } from '@/entities'
import { BigInts, H1, ThemeName } from '@/shared/components'
import { SwiperList, SwiperWidget } from '@/widgets'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MobilePage = () => {
  return (
    <Div>
      <Title />
      <BigInts />
      <ThemeName />
      <SwiperWidget />
      <Flex>
        <SwiperList />
        <TinyDotsLine />
        <div />
      </Flex>
    </Div>
  )
}
