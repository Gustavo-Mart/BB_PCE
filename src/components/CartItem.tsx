import { Trash2 } from 'lucide-react'
import QuantityCounter from "./QuantityCounter"

export default function CartItem() {
  return (
    <div className="w-full max-h-64 p-6 ring ring-primary/20 rounded-lg flex items-center flex-row gap-6 outline-2 outline-primary/30 outline-offset-3">
      <img src="https://placehold.co/200" alt="Product" />
      <div className="flex items-center flex-row justify-evenly gap-6 w-full">
        <h2 className="text-2xl font-semibold">Tênis Esportivo</h2>
        <QuantityCounter initial={1} min={1} max={10} />
        <p className="text-lg text-text-secondary mt-2">R$ 299,99</p>
        <button className="text-text-primary hover:bg-red-500 bg-primary/70 p-2 rounded-md transition-all">
          <Trash2 className="w-6 h-6" strokeWidth={1.3} />
        </button>
      </div>
    </div>
  )
}