import { Crown, Search, ShoppingBasket, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const navLinksLeft = [
  { label: 'Início', to: '/' },
  { label: 'Lançamento', to: '/lancamento' },
  { label: 'Coleção', to: '/colecao' },
]
const navLinksRight = [
  { label: 'Calçados', to: '/calcados' },
  { label: 'Perfumes', to: '/perfumes' },
  { label: 'Contato', to: '/contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Início')
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = (label: string) =>
    `text-md tracking-wide cursor-pointer transition-all uppercase
    ${activeLink === label
      ? 'font-bold text-text-primary bg-background/80 px-2 py-1 rounded-md'
      : 'text-text-secondary hover:text-text-primary'
    }`

  return (
    <nav className={`text-text-primary px-8 py-4 flex items-center justify-between fixed z-10 border border-primary/20 transition-all duration-500 font-serif
      ${scrolled
        ? 'bg-primary backdrop-blur-md top-0 left-0 right-0 rounded-none shadow-lg'
        : 'bg-primary top-3 left-3 right-3 rounded-2xl shadow-lg'
      }`}>

      {/* Esquerda */}
      <Search className='w-10 h-10 hover:text-secondary hover:bg-background/60 transition-all p-2 rounded-md shrink-0' strokeWidth={1.5} />

      {/* Centro absoluto — links + logo + links */}
      <div className='absolute left-1/2 -translate-x-1/2 flex items-center gap-7 select-none'>
        {navLinksLeft.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            onClick={() => setActiveLink(label)}
            className={linkClass(label)}
          >
            {label}
          </Link>
        ))}

        <div className='text-center leading-tight mx-2 cursor-pointer' onClick={() => navigate('/')}>
          <Crown className='w-6 h-6 mx-auto' strokeWidth={1.3} />
          <p className='text-2xl font-semibold tracking-wide leading-none'>B</p>
        </div>

        {navLinksRight.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            onClick={() => setActiveLink(label)}
            className={linkClass(label)}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Direita */}
      <div className='flex items-center gap-5 shrink-0'>
        <User
          onClick={() => navigate('/login')}
          className='w-10 h-10 hover:text-secondary hover:bg-background/60 transition-all p-2 rounded-md shrink-0 cursor-pointer'
          strokeWidth={1.5}
        />
        <ShoppingBasket
          onClick={() => navigate('/cart')}
          className='w-10 h-10 hover:text-secondary hover:bg-background/60 transition-all p-2 rounded-md shrink-0 cursor-pointer'
          strokeWidth={1.5}
        />
      </div>

    </nav>
  )
}