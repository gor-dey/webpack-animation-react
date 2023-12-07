import { DotType } from '../types'
import { SwiperDataType, fishTextsArray } from './mockDB'
import { dotCount } from './utilConstants'

export const swiperData = (
  yearIndex: DotType,
  themeIndex: DotType
): SwiperDataType[] =>
  Array.from({ length: dotCount }, (_, index: number) => ({
    id: index + 1,
    data: fishTextsArray[yearIndex].year + index,
    text: fishTextsArray[yearIndex].text[themeIndex]
  }))
