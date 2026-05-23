import { Link } from 'react-router-dom'
import Scroller from "../components/Scroller"

const newCollections = [
  { id: 1, img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600', name: 'Vestido Branco' },
  { id: 2, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600', name: 'Blazer Bege' },
  { id: 3, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600', name: 'Look Neutro' },
]

export default function Section() {
  return (
    <div className='bg-background font-serif text-text-primary'>

      {/* Hero */}
      <div className='relative w-full h-[90vh] overflow-hidden rounded-b-3xl'>
        <img
          src="https://images.unsplash.com/photo-1679136342508-08ff0864221f?q=80&w=1470&auto=format&fit=crop"
          alt="hero"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Texto esquerda */}
        <div className="absolute bottom-24 sm:bottom-28 left-6 sm:left-12 lg:left-16">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white uppercase leading-none tracking-tight font-stardom">
            Bruna<br />Boutique
          </h1>
          <p className="text-white/70 text-xs uppercase tracking-widest mt-2 font-stardom">Coleção do ano</p>
        </div>

        {/* Texto direita */}
        <div className="absolute bottom-24 sm:bottom-28 right-6 sm:right-12 lg:right-16 text-right">
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white uppercase leading-none tracking-tight font-stardom">
            Estilo<br />2026
          </h2>
        </div>

        {/* Botão centro — sobe no mobile pra não colidir */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <Link
            to="/colecao"
            className="text-white text-xs sm:text-sm uppercase tracking-widest border border-white/60 px-4 sm:px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all"
          >
            Explorar Coleção
          </Link>
        </div>
      </div>

      {/* New Collections */}
      <div className="px-4 sm:px-10 lg:px-20 py-16 sm:py-24">

        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Novidades</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Nova Coleção</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {newCollections.map(p => (
            <div key={p.id} className="relative group overflow-hidden rounded-2xl">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-80 sm:h-96 lg:h-120 object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />

              <Link
                to="/colecao"
                className="absolute top-4 right-4 bg-white/90 text-black text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 duration-300"
              >
                Shop
              </Link>

              <p className="absolute bottom-4 left-4 text-white text-sm font-semibold uppercase tracking-wide">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Galeria */}
      <Scroller />

    </div>
  )
}