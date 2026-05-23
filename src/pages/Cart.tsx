import { useState } from 'react'
import { ClipboardList, ShoppingCart, CreditCard, Trash2 } from 'lucide-react'
import CartItem, { type ICartItem } from "../components/CartItem"

const steps = [
  { label: 'Carrinho', icon: ShoppingCart, active: true },
  { label: 'Pagamento', icon: CreditCard, active: false },
  { label: 'Resumo', icon: ClipboardList, active: false },
]

export default function CartSection() {
  // Estado principal do carrinho com dados fictícios para teste
  const [items, setItems] = useState<ICartItem[]>([
    { id: 1, 
      tag: 'Simples', 
      name: 'Conjunto Maravilhoso', 
      color: 'Vinho', 
      size: 'M', 
      price: 145.00, 
      qty: 1, 
      selected: true, 
      img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=783&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, 
      tag: 'Diário', 
      name: 'Jaqueta de lã', 
      color: 'Preto', 
      size: 'M', 
      price: 130.00, 
      qty: 1, 
      selected: true, 
      img: 'https://images.unsplash.com/photo-1594981359040-5b8ad27cca00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcXVldGElMjBkZSUyMGwlQzMlQTMlMjBmZW1pbmluYSUyMHByZXRhfGVufDB8fDB8fHww' },
    { id: 3,
      tag: 'Perfume',
      name: 'Yara - Eau de Parfum', 
      color: 'Verde/Branco', 
      size: '200ml', 
      price: 250.00, 
      qty: 1, 
      selected: false, 
      img: 'https://product-data.raiadrogasil.io/images/4603481.webp' },
  ])

  // Funções para manipular os itens
  const toggleSelect = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, selected: !item.selected } : item))
  }

  const updateQuantity = (id: number, newQty: number) => {
    setItems(items.map(item => item.id === id ? { ...item, qty: newQty } : item))
  }

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const deleteAll = () => {
    setItems([])
  }

  // Cálculos do Resumo baseados apenas nos itens selecionados (selected: true)
  const selectedItems = items.filter(item => item.selected)
  const totalItemsCount = selectedItems.reduce((acc, item) => acc + item.qty, 0)
  const subtotal = selectedItems.reduce((acc, item) => acc + (item.price * item.qty), 0)
  const delivery = subtotal > 0 ? 15.00 : 0
  const finalPayment = subtotal + delivery

  return (
    <section className="bg-background min-h-screen w-screen font-serif text-text-primary flex flex-col px-4 sm:px-8 lg:px-14 py-24 gap-8">

      {/* Step indicator mantido como o original */}
      <div className="flex items-center justify-center bg-primary/40 rounded-xl px-4 sm:px-10 py-4 w-full border border-primary/20">
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
                    <span key={j} className="w-2 h-[1.5px] bg-text-primary/10 rounded-full" />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

        {/* Lista de Itens */}
        <div className="flex flex-col w-full lg:w-2/3">

          {/* Cabeçalho da Lista */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full border border-primary/50"></div>
              <h1 className="text-2xl font-bold tracking-tight">
                CARRINHO <span className="text-sm font-semibold text-text-secondary align-top ml-1">{items.length.toString().padStart(2, '0')}</span>
              </h1>
            </div>
            {items.length > 0 && (
              <button onClick={deleteAll} className="text-primary text-xs font-bold uppercase flex items-center gap-2 hover:bg-primary/10 px-3 py-2 rounded-lg transition-colors">
                <Trash2 size={14} strokeWidth={2.5} /> APAGAR TUDO
              </button>
            )}
          </div>

          {/* Renderização do CartItem */}
          <div className="flex flex-col gap-6">
            {items.length === 0 ? (
              <p className="text-text-secondary py-8 text-center">Seu carrinho está vazio.</p>
            ) : (
              items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onToggle={toggleSelect}
                  onUpdateQty={updateQuantity}
                  onDelete={deleteItem}
                />
              ))
            )}
          </div>
        </div>

        {/* Resumo do Pedido */}
        <div className="w-full lg:w-1/3 shrink-0">
          <h2 className="text-2xl font-bold tracking-tight mb-6">RESUMO</h2>

          <div className="bg-primary/20 ring-1 ring-primary/30 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Itens selecionados</span>
              <strong className="font-bold">{totalItemsCount.toString().padStart(2, '0')} Itens</strong>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Subtotal</span>
              <strong className="font-bold">R$ {subtotal.toFixed(2).replace('.', ',')}</strong>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Frete Estimado</span>
              <strong className="font-bold">R$ {delivery.toFixed(2).replace('.', ',')}</strong>
            </div>

            <div className="w-full border-t border-dashed border-primary/30 my-1"></div>

            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Descontos</span>
              <strong className="font-bold text-emerald-600">- R$ 0,00</strong>
            </div>

            <div className="w-full border-t border-dashed border-primary/30 my-1"></div>

            <div className="flex justify-between items-center mb-2">
              <span className="text-text-primary font-medium">Total a pagar</span>
              <span className="text-2xl font-bold">R$ {finalPayment.toFixed(2).replace('.', ',')}</span>
            </div>

            {/* Input de Cupom */}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Insira o cupom"
                className="w-full bg-background border border-primary/30 rounded-full py-3.5 pl-5 pr-24 text-sm outline-none focus:border-primary transition-colors placeholder:text-text-secondary"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-text-primary text-white px-6 rounded-full text-xs font-bold tracking-wide hover:opacity-90 transition-opacity">
                APLICAR
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button className="w-full bg-text-primary text-white rounded-full py-4 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-50" disabled={selectedItems.length === 0}>
              Finalizar Compra
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}