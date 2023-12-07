import { CrossLines, TinyDotsLine, Title } from '@/entities'
import { SwiperList, SwiperWidget } from '@/widgets'
import { BigIntsPos, Div, Flex, RingPos, SwiperPos } from './style'
import { useMediaQuery } from 'react-responsive'
import { ThemeName } from '@/shared/components'

export const DesktopPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 })
  return (
    <Div>
      <Title />
      <BigIntsPos />
      {!isTablet && (
        <>
          <RingPos /> <CrossLines />
        </>
      )}
      <SwiperPos>
        <Flex>
          <SwiperList />
          {isTablet && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <ThemeName />
              <TinyDotsLine />
            </div>
          )}
        </Flex>

        <SwiperWidget />
      </SwiperPos>
    </Div>
  )
}
