import { Crown, Menu, Search, ShoppingBasket, User, X } from 'lucide-react'
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
const allLinks = [...navLinksLeft, ...navLinksRight]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Início')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = (label: string) =>
    `tracking-wide cursor-pointer transition-all uppercase text-sm
    ${activeLink === label
      ? 'font-bold text-text-primary bg-background/80 px-2 py-1 rounded-md'
      : 'text-text-secondary hover:text-text-primary'
    }`

  const handleLink = (label: string) => {
    setActiveLink(label)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`text-text-primary px-6 py-4 flex items-center justify-between fixed z-20 border border-primary/20 transition-all duration-500 font-serif
        ${scrolled
          ? 'bg-primary backdrop-blur-md top-0 left-0 right-0 rounded-none shadow-lg'
          : 'bg-primary top-3 left-3 right-3 rounded-2xl shadow-lg'
        }`}>

        {/* Esquerda */}
        <Search className='w-10 h-10 hover:bg-background/60 transition-all p-2 rounded-md shrink-0' strokeWidth={1.5} />

        {/* Centro — desktop */}
        <div className='hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 select-none'>
          {navLinksLeft.map(({ label, to }) => (
            <Link key={label} to={to} onClick={() => handleLink(label)} className={linkClass(label)}>
              {label}
            </Link>
          ))}

          <div className='text-center leading-tight mx-2 cursor-pointer' onClick={() => navigate('/')}>
            <Crown className='w-6 h-6 mx-auto' strokeWidth={1.3} />
            <p className='text-2xl font-semibold tracking-wide leading-none'>B</p>
          </div>

          {navLinksRight.map(({ label, to }) => (
            <Link key={label} to={to} onClick={() => handleLink(label)} className={linkClass(label)}>
              {label}
            </Link>
          ))}
        </div>

        {/* Centro — mobile (só logo) */}
        <div className='lg:hidden absolute left-1/2 -translate-x-1/2 text-center leading-tight cursor-pointer' onClick={() => navigate('/')}>
          <Crown className='w-5 h-5 mx-auto' strokeWidth={1.3} />
          <p className='text-xl font-semibold tracking-wide leading-none'>B</p>
        </div>

        {/* Direita */}
        <div className='flex items-center gap-2 shrink-0'>
          <User
            onClick={() => navigate('/login')}
            className='w-10 h-10 hover:bg-background/60 transition-all p-2 rounded-md cursor-pointer'
            strokeWidth={1.5}
          />
          <ShoppingBasket
            onClick={() => navigate('/cart')}
            className='w-10 h-10 hover:bg-background/60 transition-all p-2 rounded-md cursor-pointer'
            strokeWidth={1.5}
          />
          {/* Hamburguer — só mobile */}
          <button
            className='lg:hidden w-10 h-10 flex items-center justify-center hover:bg-background/60 rounded-md transition-all'
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile dropdown */}
      <div className={`lg:hidden fixed z-10 left-3 right-3 bg-primary border border-primary/20 rounded-2xl shadow-lg font-serif transition-all duration-300 overflow-hidden
        ${scrolled ? 'top-16' : 'top-20'}
        ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='flex flex-col p-4 gap-1'>
          {allLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => handleLink(label)}
              className={`px-4 py-3 rounded-lg transition-all uppercase text-sm tracking-wide
                ${activeLink === label
                  ? 'font-bold bg-background/80 text-text-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-background/40'
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}