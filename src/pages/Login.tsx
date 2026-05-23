import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import ImageSlider from "../components/ImageSlider";

type Tab = "email" | "phone";

export default function Login() {
  const [tab, setTab] = useState<Tab>("email");
  const [showPass, setShowPass] = useState(false);

  return (
    <section className="bg-background min-h-screen w-screen font-serif text-text-primary flex items-center justify-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-primary/70 rounded-2xl overflow-hidden lg:h-150">

        {/* Formulário */}
        <div className="px-5 sm:px-8 py-8 sm:py-12 w-full lg:w-3/5 flex flex-col gap-4 sm:gap-6">

          <h2 className="text-2xl sm:text-3xl font-bold">
            Bem-vindo{' '}
            <span className="bg-background text-black px-1">de volta!</span>
          </h2>

          {/* Toggle */}
          <div className="flex bg-background/40 rounded-xl p-1 w-full">
            {(['email', 'phone'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all
                  ${tab === t ? "bg-background shadow text-text-primary" : "text-text-secondary"}`}
              >
                {t === 'email' ? 'E-mail' : 'Telefone'}
              </button>
            ))}
          </div>

          {/* Campos */}
          {tab === "email" ? (
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="seu@email.com"
                className="px-4 py-3 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-background text-sm"
              />
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Digite a senha"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-background text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-all"
                >
                  {showPass
                    ? <EyeOff className="w-5 h-5" strokeWidth={1.5} />
                    : <Eye className="w-5 h-5" strokeWidth={1.5} />
                  }
                </button>
              </div>
              <a href="#" className="text-xs text-text-secondary text-right hover:underline">
                Esqueceu a senha?
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <input
                type="tel"
                placeholder="+55 (11) 99999-9999"
                className="px-4 py-3 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-background text-sm"
              />
              <p className="text-xs text-text-secondary text-center">Digite o código enviado</p>
              {/* OTP — menor no mobile */}
              <div className="flex gap-2 sm:gap-3 justify-center">
                {["", "", "", ""].map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="w-11 h-11 sm:w-14 sm:h-14 text-center text-lg sm:text-xl rounded-xl border border-primary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                ))}
              </div>
            </div>
          )}

          <button className="w-full bg-text-primary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all text-sm sm:text-base">
            Entrar
          </button>

          {/* Divisor */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-primary/30" />
            <span className="text-xs text-text-secondary whitespace-nowrap">ou continue com</span>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          {/* Social */}
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl border border-primary/20 bg-background hover:bg-primary/10 transition-all text-sm font-medium">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 shrink-0" alt="Google" />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl border border-primary/20 bg-background hover:bg-primary/10 transition-all text-sm font-medium">
              <img src="https://www.svgrepo.com/show/448224/facebook.svg" className="w-5 h-5 shrink-0" alt="Facebook" />
              Facebook
            </button>
          </div>

          <p className="text-sm text-text-secondary text-center">
            Não tem uma conta?{' '}
            <a href="#" className="text-text-primary font-semibold underline underline-offset-2">
              Cadastre-se
            </a>
          </p>
        </div>

        {/* Slider — só desktop */}
        <div className="hidden lg:block lg:w-2/5 self-end h-full">
          <ImageSlider />
        </div>

      </div>
    </section>
  );
}