import { CrossLines, Title } from '@/entities'
import { SwiperList, SwiperWidget } from '@/widgets'
import { BigIntsPos, Div, RingPos, SwiperPos } from './style'

export const DesktopPage = () => {
  return (
    <Div>
      <Title />
      <BigIntsPos />
      <RingPos />
      <CrossLines />
      <SwiperPos>
        <SwiperList />
        <SwiperWidget />
      </SwiperPos>
    </Div>
  )
}
