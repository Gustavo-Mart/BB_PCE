export default function Footer() {
  return (
    <footer className="bg-text-primary text-background pt-16 pb-8 px-4 sm:px-8 lg:px-14 w-full font-serif">
      <div className="max-w-full mx-auto flex flex-col gap-16">

        {/* Seção Superior: Marca, Newsletter e Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">

          {/* Marca e Newsletter */}
          <div className="flex flex-col gap-6 lg:w-2/5 shrink-0">
            <h2 className="text-3xl font-bold tracking-tighter">Bruna Boutique.</h2>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              Passos autênticos para mentes criativas. Inscreva-se para receber lançamentos antecipados e 15% de desconto na primeira compra.
            </p>

            <div className="flex items-center mt-2 relative max-w-sm">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full bg-transparent border-b border-background/30 py-3 pr-12 outline-none focus:border-primary transition-colors text-sm placeholder:text-background/40"
              />
              <button
                className="absolute right-0 text-primary hover:text-primary/80 transition-colors p-2 flex items-center justify-center"
                title="Inscrever-se"
              >
                {/* Ícone Arrow Right */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="flex flex-wrap gap-12 sm:gap-24 w-full lg:w-auto">
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-xs tracking-widest uppercase text-primary">Shop</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Coleção Completa</a>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Mais Vendidos</a>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Lançamentos</a>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Sale</a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-xs tracking-widest uppercase text-primary">Ajuda</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Rastrear Pedido</a>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Trocas e Devoluções</a>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">FAQ</a>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Fale Conosco</a>
              </div>
            </div>
          </div>

        </div>

        {/* Seção Inferior: Copyright, Termos e Redes Sociais */}
        <div className="pt-8 border-t border-background/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-xs text-background/50">

          <p>© {new Date().getFullYear()} Bruna Boutique. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          </div>

          <div className="flex items-center gap-3 text-background">
            <a href="#" className="hover:text-primary transition-colors p-2 bg-background/5 rounded-full hover:bg-background/10 flex items-center justify-center">
              {/* Ícone Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a href="#" className="hover:text-primary transition-colors p-2 bg-background/5 rounded-full hover:bg-background/10 flex items-center justify-center">
              {/* Ícone Twitter/X */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>

            <a href="#" className="hover:text-primary transition-colors p-2 bg-background/5 rounded-full hover:bg-background/10 flex items-center justify-center">
              {/* Ícone Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}