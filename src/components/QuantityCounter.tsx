import { Minus, Plus } from 'lucide-react';

export default function QuantityCounter({
  qty,
  onChange,
  min = 1,
  max = 99
}: {
  qty: number;
  onChange: (newQty: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className='flex items-center gap-3 bg-white rounded-full px-1 py-1 border border-text-primary/10 text-text-primary shadow-sm w-fit'>
      <button
        onClick={() => onChange(Math.max(min, qty - 1))}
        className='p-1.5 hover:bg-background rounded-full transition-colors text-text-primary/50 hover:text-text-primary'
      >
        <Minus size={14} />
      </button>

      <span className='font-semibold text-sm w-4 text-center select-none'>
        {qty.toString().padStart(2, '0')}
      </span>

      <button
        onClick={() => onChange(Math.min(max, qty + 1))}
        className='p-1.5 hover:bg-background rounded-full transition-colors text-text-primary/50 hover:text-text-primary'
      >
        <Plus size={14} />
      </button>
    </div>
  )
}