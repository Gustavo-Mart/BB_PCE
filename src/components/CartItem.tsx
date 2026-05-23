import { Trash2 } from 'lucide-react'
import QuantityCounter from "./QuantityCounter"

export default function CartItem() {
  return (
    <div className="w-full p-4 sm:p-6 ring ring-primary/20 rounded-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <img
        src="https://placehold.co/120"
        alt="Product"
        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md shrink-0"
      />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        <h2 className="text-lg sm:text-2xl font-semibold text-center sm:text-left">Tênis Esportivo</h2>
        <QuantityCounter initial={1} min={1} max={10} />
        <p className="text-base sm:text-lg text-text-secondary">R$ 299,99</p>
        <button className="text-text-primary hover:bg-red-500 bg-primary/70 p-2 rounded-md transition-all">
          <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.3} />
        </button>
      </div>
    </div>
  )
}