import { CrossLines, Ring, Title } from '@/entities'
import { SwiperWidget } from '@/widgets'
import { SwiperList } from '@/widgets/SwiperList'
import { BigIntsPos, Div, RingPos, SwiperPos } from './style'

export const MainPage = () => {
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
