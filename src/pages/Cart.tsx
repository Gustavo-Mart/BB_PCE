import { ClipboardList, ShoppingCart, CreditCard } from 'lucide-react'
import CartItem from "../components/CartItem"

const steps = [
  { label: 'Carrinho', icon: ShoppingCart, active: true },
  { label: 'Pagamento', icon: CreditCard, active: false },
  { label: 'Resumo', icon: ClipboardList, active: false },
]

export default function CartSection() {
  return (
    <section className="bg-background h-full w-screen font-serif text-text-primary flex flex-col px-14 py-24 gap-10">

      {/* Step indicator */}
      <div className="flex items-center justify-center bg-primary rounded-xl px-10 py-5 w-full">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex items-center">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
                  ${step.active ? 'bg-text-primary text-white' :
                   'bg-background/50 text-text-secondary'}`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className={`text-sm font-medium ${step.active ? 'text-text-primary' : 'text-text-secondary'}`}>
                  {step.label}
                </span>
              </div>

              {/* Linha tracejada */}
              {i < steps.length - 1 && (
                <div className="mx-4 flex gap-0.75">
                  {Array.from({ length: 10 }).map((_, j) => (
                    <span key={j} className="w-2 h-[1.5px] bg-background/30 rounded-full" />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-row gap-10">
        <div className="flex items-start flex-col w-2/3 gap-6">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="w-1/3 max-h-160 p-6 ring-1 ring-primary/20 bg-primary rounded-lg flex items-start flex-col gap-6 justify-between">
          <h2 className="text-2xl font-semibold">Total: R$ 299,99</h2>
          <button className="px-6 py-6 bg-text-primary text-white rounded-lg hover:bg-primary/90 transition-all w-full text-xl">
            Finalizar Compra
          </button>
        </div>
      </div>

    </section>
  )
}