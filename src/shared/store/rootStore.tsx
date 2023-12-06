import { makeAutoObservable } from 'mobx'
import { DotType } from '@/shared/types'

class RootStore {
  changedDot: DotType = null

  constructor() {
    makeAutoObservable(this)
  }

  setChangedDot = (dot: DotType) => {
    this.changedDot = dot
  }
}

export const rootStore = new RootStore()
