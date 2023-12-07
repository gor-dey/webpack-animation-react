import { blueColor, pinkColor } from '@/shared/cssConstants'
import { useStore } from '@/shared/store'
import { StyleProps } from '@/shared/types/styleTypes'
import { TweenLite } from 'gsap'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  font-size: 200px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  gap: 0.5em;

  & > span:first-child {
    color: ${blueColor};
  }
  & > span:last-child {
    color: ${pinkColor};
  }
  @media (max-width: 1440px) {
    font-size: 15vw;
  }
  @media (max-width: 768px) {
    font-size: 15vw;
    margin-top: 20px;
  }
`

export const BigInts = observer(({ className, children }: StyleProps) => {
  const { bigIntsNew: bigIntsInitial, bigIntsOld: bigIntsTotal } = useStore()
  const [totalLeft, setTotalLeft] = useState(bigIntsInitial.from)
  const [totalRight, setTotalRight] = useState(bigIntsInitial.to)

  useEffect(() => {
    TweenLite.to(bigIntsTotal, 0.5, {
      left: bigIntsInitial.from,
      roundProps: 'left',
      onUpdate: () => {
        setTotalLeft(bigIntsTotal.left)
      }
    })
    TweenLite.to(bigIntsTotal, 0.5, {
      right: bigIntsInitial.to,
      roundProps: 'right',
      onUpdate: () => {
        setTotalRight(bigIntsTotal.right)
      }
    })
  }, [bigIntsInitial, bigIntsTotal])

  return (
    <Div className={className}>
      <span>{totalLeft}</span>
      <span>{totalRight}</span>
      {children}
    </Div>
  )
})
