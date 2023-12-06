import { useStore } from '@/shared/store'
import { DotType } from '@/shared/types'
import { StyleProps } from '@/shared/types/styleTypes'
import { observer } from 'mobx-react-lite'
import { Div, Dot, DotBig } from './style'
import { dotCount, themeData } from '@/shared/utils'
import { useState } from 'react'

export const Ring = observer(({ className, children }: StyleProps) => {
  const store = useStore()
  const [clickedDot, setClickedDot] = useState<number | null>(null)

  const angleIncrement: number = 360 / dotCount

  const handleDotHover = (dotId: DotType) => {
    store.setChangedDot(dotId)
  }

  const handleDotClick = (dotId: DotType) => {
    if (clickedDot !== null) {
      const prevClickedDot = document.querySelector(
        `.dot-big[data-id="${clickedDot}"]`
      )
      if (prevClickedDot) {
        prevClickedDot.classList.remove('new-class')
      }
    }

    setClickedDot(dotId)
  }

  const generateDots = () => {
    return themeData.map(item => {
      const angle: number = (item.id != null ? item.id - 1 : 0) * angleIncrement
      const x: number = Math.cos((angle * Math.PI) / 180) * 265
      const y: number = Math.sin((angle * Math.PI) / 180) * 265

      return (
        <Dot
          key={item.id}
          data-id={item.id}
          style={{
            top: `calc(50% - 5px + ${y}px)`,
            left: `calc(50% - 5px + ${x}px)`
          }}
          onClick={() => {
            handleDotHover(item.id as DotType)
            handleDotClick(item.id as DotType)
          }}
        >
          <DotBig className={clickedDot === item.id ? 'new-class' : ''}>
            <span>{item.id! + 1}</span>
            <span>{item.title}</span>
          </DotBig>
        </Dot>
      )
    })
  }

  return (
    <div className={className}>
      {generateDots()}
      <Div>{children}</Div>
    </div>
  )
})
