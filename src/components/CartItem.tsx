import { Trash2, Copy, ChevronDown, Check } from 'lucide-react'
import QuantityCounter from "./QuantityCounter"

// Definimos o tipo de dado do item para o TypeScript ajudar a gente
export interface ICartItem {
  id: number;
  tag: string;
  name: string;
  color: string;
  size: string;
  price: number;
  qty: number;
  selected: boolean;
  img: string;
}

interface CartItemProps {
  item: ICartItem;
  onToggle: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
  onDelete: (id: number) => void;
}

export default function CartItem({ item, onToggle, onUpdateQty, onDelete }: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 border-b border-primary/20 pb-8 w-full">

      {/* Checkbox de seleção */}
      <button
        onClick={() => onToggle(item.id)}
        className="mt-8 shrink-0 focus:outline-none"
      >
        {item.selected ? (
          <div className="w-5 h-5 bg-text-primary rounded-full flex items-center justify-center">
            <Check size={12} className="text-background" strokeWidth={3} />
          </div>
        ) : (
          <div className="w-5 h-5 border border-primary/50 rounded-full hover:border-text-primary transition-colors"></div>
        )}
      </button>

      {/* Imagem do Produto */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
      </div>

      {/* Detalhes do Produto */}
      <div className="flex-1 w-full">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-[10px] font-bold text-text-secondary uppercase border border-primary/30 px-2 py-0.5 rounded-sm inline-block mb-2">
              {item.tag}
            </span>
            <h3 className="text-lg font-bold">{item.name}</h3>
          </div>
          <div className="text-lg font-bold">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </div>
        </div>

        {/* Variações (Cor / Tamanho) */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-text-secondary mb-4">
          <button className="flex items-center gap-1 hover:text-text-primary transition-colors">
            Cor : <span className="font-medium text-text-primary">{item.color}</span> <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1 hover:text-text-primary transition-colors">
            Tamanho : <span className="font-medium text-text-primary">{item.size}</span> <ChevronDown size={14} />
          </button>
        </div>

        {/* Ações Inferiores (Deletar, Copiar, Quantidade) */}
        <div className="flex items-center justify-end gap-3 sm:gap-5 text-text-secondary">
          <button
            onClick={() => onDelete(item.id)}
            className="hover:text-primary transition-colors p-1"
            title="Remover item"
          >
            <Trash2 size={16} />
          </button>
          <button className="hover:text-text-primary transition-colors p-1" title="Duplicar">
            <Copy size={16} />
          </button>

          {/* Usando o QuantityCounter atualizado com props */}
          <QuantityCounter
            qty={item.qty}
            onChange={(newQty) => onUpdateQty(item.id, newQty)}
            min={1}
            max={10}
          />
        </div>
      </div>

    </div>
  )
}