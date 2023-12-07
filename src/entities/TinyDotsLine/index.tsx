import { TinyDotDark, TinyDotLight } from '@/shared/components'
import { useStore } from '@/shared/store'
import { ThemeDataType, themeData } from '@/shared/utils'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { ThemeName } from '@/shared/components/ThemeName'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const TinyDotsLine = observer(() => {
  const { clickedDot, setClickedDot } = useStore()

  return (
    <Div>
      <ThemeName />
      <Dots>
        {themeData.map((item: ThemeDataType) =>
          item.id === clickedDot ? (
            <TinyDotDark key={item.id} onClick={() => setClickedDot(item.id)} />
          ) : (
            <TinyDotLight
              key={item.id}
              onClick={() => setClickedDot(item.id)}
            />
          )
        )}
      </Dots>
    </Div>
  )
})
