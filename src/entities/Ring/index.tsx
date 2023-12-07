import { useStore } from '@/shared/store'
import { DotType } from '@/shared/types'
import { StyleProps } from '@/shared/types/styleTypes'
import { observer } from 'mobx-react-lite'
import { Div, Dot, DotBig } from './style'
import { dotCount, themeData } from '@/shared/utils'

export const Ring: React.FC<StyleProps> = observer(
  ({ className, children }) => {
    const { clickedDot, setClickedDot } = useStore()

    const angleIncrement: number = 360 / dotCount
    const rotationAngle = 360 - clickedDot * (360 / dotCount)

    const generateDots = () => {
      return themeData.map(item => {
        const angle: number =
          (item.id != null ? item.id - 1 : 0) * angleIncrement
        const x: number = Math.cos((angle * Math.PI) / 180) * 265
        const y: number = Math.sin((angle * Math.PI) / 180) * 265

        return (
          <Dot
            key={item.id}
            data-id={item.id}
            style={{
              top: `calc(50% - 5px + ${y}px)`,
              left: `calc(50% - 5px + ${x}px)`,
              transform: `rotate(${-rotationAngle}deg)`
            }}
            onClick={() => setClickedDot(item.id as DotType)}
          >
            <DotBig className={clickedDot === item.id ? 'new-class' : ''}>
              <span>{item.id + 1}</span>
              <span>{item.title}</span>
            </DotBig>
          </Dot>
        )
      })
    }

    return (
      <div className={`ring ${className}`}>
        {generateDots()}
        <Div>{children}</Div>
      </div>
    )
  }
)
