import { useStore } from '@/shared/store'
import { themeData } from '@/shared/utils'
import { observer } from 'mobx-react-lite'
import { Line } from '../Line'

export const ThemeName = observer(() => {
  const { clickedDot } = useStore()
  return (
    <>
      <span>{themeData[clickedDot].title}</span>
      <Line />
    </>
  )
})
