import { DotType } from '../types'
import { dotCount } from './utilConstants'

export type SwiperDataType = {
  id: number
  data: number
  text: string
}

export const swiperData: SwiperDataType[] = Array.from(
  { length: dotCount },
  (_: unknown, index: number) => ({
    id: index + 1,
    data: 2010 + index,
    text: 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Агентство, строчка всеми.'
  })
)

export const frontElement = 'frontElement'
export const backElement = 'backElement'

export const themeData: { id: DotType; title: string }[] = [
  { id: 0, title: 'Скульптура' },
  { id: 1, title: 'Спорт' },
  { id: 2, title: 'Музыка' },
  { id: 3, title: 'Кино' },
  { id: 4, title: 'Искусство' },
  { id: 5, title: 'Наука' }
]
