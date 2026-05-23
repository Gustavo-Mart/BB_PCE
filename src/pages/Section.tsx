import { BlobImage } from "../components/Blob";

export default function Section() {
  return(
    <div className='px-40 text-center h-screen flex items-center justify-center gap-40 bg-background pt-20'>
      <div className='max-w-lg text-right'>
        <h1 className='text-6xl font-bold tracking-wide mb-6'>Bem-vindo à BBG</h1>
        <p className='text-lg text-text-secondary mb-8'>Descubra a coleção mais exclusiva de calçados e perfumes. Estilo, elegância e qualidade em um só lugar.</p>
        <button className='bg-primary text-background px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all'>Explore Agora</button>
      </div>
      <BlobImage src="https://plus.unsplash.com/premium_photo-1689371956254-1a8adca96b78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="foto" className="h-180 w-140" />
    </div>
  )
}