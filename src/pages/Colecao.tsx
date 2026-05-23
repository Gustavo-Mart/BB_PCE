import { useState } from 'react'
import { ChevronDown, ChevronUp, Grid2x2, List, X } from 'lucide-react'

const categories = [
  { label: 'Calçados', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300' },
  { label: 'Perfumes', img: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=300' },
  { label: 'Bolsas', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300' },
  { label: 'Joias', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300' },
  { label: 'Roupas', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300' },
]

const products = [
  { id: 1, name: 'Perfume Forever', price: 'R$ 349,90', category: 'Perfumes', tag: 'Novo', img: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400' },
  { id: 2, name: 'Vestido Preto', price: 'R$ 219,90', category: 'Roupas', tag: 'Destaque', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400' },
  { id: 3, name: 'Pulseira Gold', price: 'R$ 189,90', category: 'Joias', tag: 'Exclusivo', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400' },
  { id: 4, name: 'Tênis Branco', price: 'R$ 429,90', category: 'Calçados', tag: 'Novo', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
  { id: 5, name: 'Bolsa Couro', price: 'R$ 599,90', category: 'Bolsas', tag: 'Destaque', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400' },
  { id: 6, name: 'Perfume Rose', price: 'R$ 289,90', category: 'Perfumes', tag: '', img: 'https://images.unsplash.com/photo-1588514912908-1f9279c13a59?w=400' },
]

const availability = ['Em Estoque', 'Fora de Estoque']
const productTypes = ['Calçados', 'Perfumes', 'Bolsas', 'Joias', 'Roupas']

export default function Colecao() {
  const [grid, setGrid] = useState(true)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [openSections, setOpenSections] = useState({ availability: true, type: true })
  const [sort, setSort] = useState('Relevância')

  const toggleFilter = (f: string) =>
    setActiveFilters(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f])

  const toggleSection = (key: keyof typeof openSections) =>
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }))

  const filtered = products.filter(p =>
    activeFilters.length === 0 || activeFilters.includes(p.category)
  )

  return (
    <div className="bg-background min-h-screen font-serif text-text-primary pt-24 px-4 sm:px-8 lg:px-14 pb-14">

      {/* Breadcrumb */}
      <p className="text-sm text-text-secondary mb-2">Home / Coleção</p>
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">Toda a Coleção</h1>

      {/* Categorias */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-10 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat.label}
            onClick={() => toggleFilter(cat.label)}
            className={`shrink-0 flex flex-col gap-2 items-start transition-all ${activeFilters.includes(cat.label) ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
          >
            <div className={`w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden ring-2 transition-all ${activeFilters.includes(cat.label) ? 'ring-text-primary' : 'ring-transparent'}`}>
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium">{cat.label}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-8">

        {/* Sidebar filtros — esconde no mobile */}
        <aside className="hidden lg:flex flex-col gap-6 w-56 shrink-0">

          {/* Disponibilidade */}
          <div>
            <button
              onClick={() => toggleSection('availability')}
              className="flex items-center justify-between w-full font-semibold text-sm mb-3"
            >
              Disponibilidade
              {openSections.availability ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {openSections.availability && availability.map(a => (
              <label key={a} className="flex items-center gap-2 text-sm text-text-secondary mb-2 cursor-pointer hover:text-text-primary transition-all">
                <input type="checkbox" className="accent-text-primary" />
                {a}
              </label>
            ))}
          </div>

          <div className="h-px bg-primary/20" />

          {/* Tipo de produto */}
          <div>
            <button
              onClick={() => toggleSection('type')}
              className="flex items-center justify-between w-full font-semibold text-sm mb-3"
            >
              Tipo de produto
              {openSections.type ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {openSections.type && productTypes.map(t => (
              <label key={t} className="flex items-center gap-2 text-sm text-text-secondary mb-2 cursor-pointer hover:text-text-primary transition-all">
                <input
                  type="checkbox"
                  className="accent-text-primary"
                  checked={activeFilters.includes(t)}
                  onChange={() => toggleFilter(t)}
                />
                {t}
              </label>
            ))}
          </div>

        </aside>

        {/* Conteúdo */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Barra de controles */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-text-secondary">{filtered.length} de {products.length} resultados</span>
              {activeFilters.map(f => (
                <button
                  key={f}
                  onClick={() => toggleFilter(f)}
                  className="flex items-center gap-1 text-xs bg-primary/20 px-3 py-1 rounded-full hover:bg-primary/40 transition-all"
                >
                  {f} <X className="w-3 h-3" />
                </button>
              ))}
              {activeFilters.length > 0 && (
                <button onClick={() => setActiveFilters([])} className="text-xs text-text-secondary hover:text-text-primary underline">
                  Limpar tudo
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-text-secondary">Ordenar por</span>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="text-sm bg-background border border-primary/20 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {['Relevância', 'Menor Preço', 'Maior Preço', 'Mais Novo'].map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <button onClick={() => setGrid(true)} className={`p-1.5 rounded-md transition-all ${grid ? 'bg-primary/30' : 'hover:bg-primary/10'}`}><Grid2x2 className="w-4 h-4" /></button>
              <button onClick={() => setGrid(false)} className={`p-1.5 rounded-md transition-all ${!grid ? 'bg-primary/30' : 'hover:bg-primary/10'}`}><List className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Grid de produtos */}
          <div className={grid
            ? 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'
            : 'flex flex-col gap-4'
          }>
            {filtered.map(p => (
              <div key={p.id} className={`bg-primary/10 rounded-2xl overflow-hidden hover:shadow-md transition-all cursor-pointer group
                ${!grid ? 'flex flex-row gap-4 p-4' : ''}`}>

                <div className={`overflow-hidden ${grid ? 'w-full h-56 sm:h-64' : 'w-32 h-32 rounded-xl shrink-0'}`}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className={`${grid ? 'p-4' : 'flex flex-col justify-center'}`}>
                  {p.tag && (
                    <span className="text-xs bg-primary/30 px-2 py-0.5 rounded-full mb-2 inline-block">{p.tag}</span>
                  )}
                  <p className="text-xs text-text-secondary">{p.category}</p>
                  <h3 className="font-semibold text-sm sm:text-base">{p.name}</h3>
                  <p className="text-sm font-bold mt-1">{p.price}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}