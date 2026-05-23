import { useRef, useEffect, useState } from 'react'

const images = [
  'https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1768189746400-44d7a977e586?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1760061751299-3b64b56ab850?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1740020265541-85563190b375?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8',
]

const looped = [...images, ...images]
const SPEED = 0.6
const LERP = 0.05

export default function ParallaxGallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const halfW = useRef(0)
  const isDragging = useRef(false)
  const isHovered = useRef(false)
  const startX = useRef(0)
  const dragStart = useRef(0)
  const dragVel = useRef(0)
  const lastX = useRef(0)
  const targetSpeed = useRef(SPEED)
  const curSpeed = useRef(SPEED)
  const animRef = useRef(0)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    halfW.current = track.scrollWidth / 2

    const tick = () => {
      // lerp da velocidade
      curSpeed.current += (targetSpeed.current - curSpeed.current) * LERP

      if (!isDragging.current) {
        offsetRef.current -= curSpeed.current
      }

      // loop infinito
      const hw = halfW.current
      if (hw > 0) {
        offsetRef.current = ((offsetRef.current % hw) - hw) % hw
      }

      // aplica direto no DOM — sem setState, sem re-render
      if (track) {
        track.style.transform = `translateX(${offsetRef.current}px)`
      }

      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  const onMouseEnter = () => {
    isHovered.current = true
    targetSpeed.current = 0
  }

  const onMouseLeave = () => {
    isHovered.current = false
    if (!isDragging.current) targetSpeed.current = SPEED
    if (isDragging.current) onDragEnd()
  }

  const onDragEnd = () => {
    isDragging.current = false
    setDragging(false)
    if (!isHovered.current) targetSpeed.current = SPEED

    // momentum
    const momentum = () => {
      if (Math.abs(dragVel.current) < 0.3) return
      offsetRef.current += dragVel.current
      dragVel.current *= 0.93
      const hw = halfW.current
      if (hw > 0) offsetRef.current = ((offsetRef.current % hw) - hw) % hw
      animRef.current = requestAnimationFrame(momentum)
    }
    requestAnimationFrame(momentum)
  }

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    setDragging(true)
    startX.current = e.pageX
    dragStart.current = offsetRef.current
    lastX.current = e.pageX
    dragVel.current = 0
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    const dx = e.pageX - startX.current
    dragVel.current = e.pageX - lastX.current
    lastX.current = e.pageX
    let next = dragStart.current + dx
    const hw = halfW.current
    if (hw > 0) next = ((next % hw) - hw) % hw
    offsetRef.current = next
  }

  const onMouseUp = () => onDragEnd()

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    setDragging(true)
    targetSpeed.current = 0
    startX.current = e.touches[0].pageX
    dragStart.current = offsetRef.current
    lastX.current = e.touches[0].pageX
    dragVel.current = 0
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    const dx = e.touches[0].pageX - startX.current
    dragVel.current = e.touches[0].pageX - lastX.current
    lastX.current = e.touches[0].pageX
    let next = dragStart.current + dx
    const hw = halfW.current
    if (hw > 0) next = ((next % hw) - hw) % hw
    offsetRef.current = next
  }

  const onTouchEnd = () => onDragEnd()

  return (
    <div className="bg-background w-full h-screen flex items-center overflow-hidden">
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="flex gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-8 lg:px-16 w-max select-none will-change-transform"
        style={{ cursor: dragging ? 'grabbing' : 'grab' }}
      >
        {looped.map((src, i) => (
          <div
            key={i}
            className="shrink-0 rounded-2xl overflow-hidden
              w-64 h-120
              sm:w-60 sm:h-96
              lg:w-96 lg:h-[70vh]"
          >
            <img
              src={src}
              alt=""
              draggable={false}
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  )
}