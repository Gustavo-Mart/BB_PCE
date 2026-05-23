import { BlobImage } from "../components/Blob";
import Scroller from "../components/Scroller";

export default function Section() {
  return (
    <div className='bg-background'>

      {/* Landing */}
      <div className='px-6 sm:px-16 lg:px-40 text-center min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-40 pt-24 lg:pt-20'>
        <div className='max-w-lg text-center lg:text-right order-2 lg:order-1'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-6'>Bem-vindo à BBG</h1>
          <p className='text-base sm:text-lg text-text-secondary mb-8'>
            Descubra a coleção mais exclusiva de calçados e perfumes. Estilo, elegância e qualidade em um só lugar.
          </p>
          <button className='bg-primary text-background px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all'>
            Explore Agora
          </button>
        </div>

        <BlobImage
          src="https://plus.unsplash.com/premium_photo-1689371956254-1a8adca96b78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="foto"
          className="order-1 lg:order-2 w-72 h-96 sm:w-96 sm:h-120 lg:w-140 lg:h-180"
        />
      </div>

      {/* Galeria */}
      <Scroller />

    </div>
  )
}