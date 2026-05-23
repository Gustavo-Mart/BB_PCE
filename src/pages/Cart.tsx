import { ClipboardList, ShoppingCart, CreditCard } from 'lucide-react'
import CartItem from "../components/CartItem"

const steps = [
  { label: 'Carrinho', icon: ShoppingCart, active: true },
  { label: 'Pagamento', icon: CreditCard, active: false },
  { label: 'Resumo', icon: ClipboardList, active: false },
]

export default function CartSection() {
  return (
    <section className="bg-background min-h-screen w-screen font-serif text-text-primary flex flex-col px-4 sm:px-8 lg:px-14 py-24 gap-8">

      {/* Step indicator */}
      <div className="flex items-center justify-center bg-primary rounded-xl px-4 sm:px-10 py-4 w-full">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex items-center">
              <div className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shrink-0
                  ${step.active ? 'bg-text-primary text-white' : 'bg-background/50 text-text-secondary'}`}>
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <span className={`text-xs sm:text-sm font-medium hidden sm:block
                  ${step.active ? 'text-text-primary' : 'text-text-secondary'}`}>
                  {step.label}
                </span>
              </div>

              {i < steps.length - 1 && (
                <div className="mx-2 sm:mx-4 flex gap-0.5">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <span key={j} className="w-2 h-[1.5px] bg-background/30 rounded-full" />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Itens */}
        <div className="flex flex-col w-full lg:w-2/3 gap-4">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        {/* Resumo */}
        <div className="w-full lg:w-1/3 p-6 ring-1 ring-primary/20 bg-primary rounded-lg flex flex-col gap-6 justify-between">
          <h2 className="text-2xl font-semibold">Total: R$ 299,99</h2>
          <button className="px-6 py-4 bg-text-primary text-white rounded-lg hover:bg-primary/90 transition-all w-full text-lg">
            Finalizar Compra
          </button>
        </div>

      </div>
    </section>
  )
}