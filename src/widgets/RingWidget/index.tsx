import { Ring } from '@/entities'
import { useStore } from '@/shared/store'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import gsap from 'gsap'
import { StyleProps } from '@/shared/types'
import { dotCount } from '@/shared/utils'

export const RingWidget = observer(({ className, children }: StyleProps) => {
  const { clickedDot } = useStore()

  useEffect((): (() => void) => {
    const rotationAngle = 360 - clickedDot * (360 / dotCount)

    const rotateAnimation = gsap.to('.ring-widget', {
      rotation: rotationAngle,
      ease: 'power2.inOut',
      duration: 1
    })

    return () => rotateAnimation.kill()
  }, [clickedDot])

  return (
    <div className={`ring-widget ${className}`}>
      <Ring className="ring">{children}</Ring>
    </div>
  )
})
