import ImageSlider from "../components/ImageSlider";

export default function Login() {
  return (
    <section className="bg-background h-screen w-screen font-serif text-text-primary flex items-center justify-center">
      <div className="h-150 w-4xl flex bg-primary/70 rounded-xl overflow-hidden">

        {/* Formulário */}
        <div className="px-14 py-10 w-3/5 flex items-center justify-center flex-col">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="flex flex-col gap-4 w-full">
            <input type="email" placeholder="Email" className="px-4 py-2 rounded-md border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-background" />
            <input type="password" placeholder="Senha" className="px-4 py-2 rounded-md border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-background placeholder:text-text-primary/60" />
            <button type="submit" className="bg-text-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-background hover:text-text-primary transition-all">Entrar</button>
          </form>
          <p className="text-sm text-text-secondary mt-4 text-center">Não tem uma conta? <a href="#" className="text-background hover:underline">Cadastre-se</a></p>
        </div>

        {/* Imagem */}
        <div className="w-3/5 self-end h-full">
          <ImageSlider />
        </div>

      </div>
    </section>
  )
}