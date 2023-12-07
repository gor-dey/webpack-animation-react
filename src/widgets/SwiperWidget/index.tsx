import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { backElement, frontElement, swiperData } from '@/shared/utils'
import { useRef } from 'react'
import { ButtonRound } from '@/shared/components'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/shared/store'
import { SwiperItem } from '@/entities'
import { useMediaQuery } from 'react-responsive'

const Div = styled.div`
  display: flex;
  align-items: start;
  & > button {
    flex: 1 0 auto;
    margin-top: 25px;
    background-color: #fff;
    &:first-child {
      transform: translateX(-25px);
    }
    &:last-child {
      transform: translateX(25px);
    }
  }
`

export const SwiperWidget = observer(() => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const { clickedDot, yearIndex } = useStore()

  const swiperRef = useRef<SwiperType>()

  const handlePrevClick = (): void => {
    swiperRef.current?.slidePrev()
  }
  const handleNextClick = (): void => {
    swiperRef.current?.slideNext()
  }

  const slidesPerView = isMobile ? 1.5 : 3

  return (
    <div>
      <Div>
        {!isMobile && (
          <ButtonRound content={backElement} onClick={handlePrevClick} />
        )}
        <Swiper
          onBeforeInit={swiper => {
            swiperRef.current = swiper
          }}
          spaceBetween={50}
          slidesPerView={slidesPerView}
        >
          {swiperData(yearIndex, clickedDot).map((item: any) => (
            <SwiperSlide key={item.id}>
              <SwiperItem data={item.data} text={item.text} />
            </SwiperSlide>
          ))}
        </Swiper>
        {!isMobile && (
          <ButtonRound content={frontElement} onClick={handleNextClick} />
        )}
      </Div>
    </div>
  )
})
