import { useState } from 'react'

export default function QuantityCounter({ initial = 1, min = 1, max = 99 }: {
  initial?: number
  min?: number
  max?: number
}) {
  const [qty, setQty] = useState(initial)

  return (
    <div className='flex items-center border border-primary/30 rounded-lg overflow-hidden w-fit font-serif bg-primary/70'>
      <button
        onClick={() => setQty(q => Math.max(min, q - 1))}
        className='px-4 py-2 text-xl text-text-secondary hover:text-text-primary hover:bg-background/30 transition-all '
      >
        −
      </button>

      <span className='px-4 py-2 text-lg text-text-primary select-none min-w-8 text-center'>
        {qty}
      </span>

      <button
        onClick={() => setQty(q => Math.min(max, q + 1))}
        className='px-4 py-2 text-xl text-text-secondary hover:text-text-primary hover:bg-background/30 transition-all'
      >
        +
      </button>
    </div>
  )
}