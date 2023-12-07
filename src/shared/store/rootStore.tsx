import { makeAutoObservable, reaction } from 'mobx'
import { DotType } from '@/shared/types'
import { yearIndex } from '../utils'

class RootStore {
  clickedDot: DotType = 0
  yearIndex: DotType = 0

  bigIntsNew: {
    from: number
    to: number
  } = {
    from: yearIndex[0],
    to: yearIndex[0] + 6
  }
  bigIntsOld: {
    left: number
    right: number
  } = {
    left: 1995,
    right: 2002
  }

  constructor() {
    makeAutoObservable(this)

    reaction(
      (): DotType => this.yearIndex,
      (): void => {
        this.setBigIntsNew()
      }
    )
  }

  setClickedDot = (dot: DotType): void => {
    this.clickedDot = dot
  }

  setIndexIncrement = (): void => {
    if (this.yearIndex === yearIndex.length - 1) return
    this.yearIndex = (this.yearIndex + 1) as DotType
  }

  setIndexDecrement = (): void => {
    if (this.yearIndex === 0) return
    this.yearIndex = (this.yearIndex - 1) as DotType
  }

  setBigIntsNew = (): void => {
    const indexValue: DotType = yearIndex[this.yearIndex] as DotType

    if (indexValue !== undefined) {
      const newBigInts = {
        from: indexValue,
        to: indexValue + 6
      }
      this.bigIntsNew = newBigInts
    } else {
      console.error('Invalid yearIndex:', this.yearIndex)
    }
  }
}

export const rootStore = new RootStore()
