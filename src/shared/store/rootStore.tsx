import { makeAutoObservable, reaction } from 'mobx'
import { DotType } from '@/shared/types'
import { yearIndex } from '../utils'

class RootStore {
  clickedDot: DotType = 0
  yearIndex: DotType = 0

  bigIntsNew = {
    from: yearIndex[0],
    to: yearIndex[0] + 6
  }
  bigIntsOld = {
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

  setClickedDot = (dot: DotType) => {
    this.clickedDot = dot
  }

  setIndexIncrement = () => {
    if (this.yearIndex === 5) return
    this.yearIndex = (this.yearIndex + 1) as DotType
  }

  setIndexDecrement = () => {
    if (this.yearIndex === 0) return
    this.yearIndex = (this.yearIndex - 1) as DotType
  }

  setBigIntsNew = () => {
    const indexValue: DotType = yearIndex[this.yearIndex] as DotType

    if (indexValue !== undefined) {
      this.bigIntsNew = {
        from: indexValue,
        to: indexValue + 6
      }
    } else {
      console.error('Invalid yearIndex:', this.yearIndex)
    }
  }
}

export const rootStore = new RootStore()
