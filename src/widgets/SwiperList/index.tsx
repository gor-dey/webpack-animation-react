import { backElement, fishTextsArray, frontElement } from '@/shared/utils'
import { ButtonRound } from '@/shared/components'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/shared/store'

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`

export const SwiperList = observer(() => {
  const { yearIndex, setIndexIncrement, setIndexDecrement } = useStore()

  return (
    <div>
      <p>
        {yearIndex + 1} / {fishTextsArray.length}
      </p>
      <br />
      <Div>
        <ButtonRound
          content={backElement}
          onClick={() => setIndexDecrement()}
        />
        <ButtonRound
          content={frontElement}
          onClick={() => setIndexIncrement()}
        />
      </Div>
    </div>
  )
})
