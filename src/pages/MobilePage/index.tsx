import { TinyDotsLine, Title } from '@/entities'
import { BigInts, H1 } from '@/shared/components'
import { SwiperList, SwiperWidget } from '@/widgets'

export const MobilePage = () => {
  return (
    <>
      <Title />
      <BigInts />
      <TinyDotsLine />
      <SwiperWidget />
      <SwiperList />
    </>
  )
}
