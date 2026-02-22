import { GraduationCap, Star, ChevronDown } from 'lucide-react'
import { LeadForm } from './LeadForm'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#003366] to-[#0055A5] text-white py-6 md:py-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start mb-8">
          <GraduationCap className="h-10 w-10 mr-3" />
          <div>
            <h1 className="text-2xl font-bold">Anhanguera e Unopar</h1>
            <p className="text-xs text-blue-200">
              Grupo Cogna Educação
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Texto */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-300 text-amber-300"
                />
              ))}
              <span className="ml-2 text-sm text-blue-100">
                4.8/5 - Mais de 15 mil avaliações
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Conquiste seu diploma sem interromper sua rotina
            </h2>

            <p className="text-lg md:text-xl text-blue-100 mb-6">
              Graduação reconhecida pelo MEC, com a flexibilidade que quem trabalha precisa para crescer profissionalmente.
            </p>

            <div className="md:hidden space-y-2 mb-8">
              <span className="bg-white/20 px-3 py-1 rounded-full block text-sm">
                ✓ Cursos reconhecidos pelo MEC
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full block text-sm">
                ✓ Estude no seu horário, sem faltar no trabalho
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full block text-sm">
                ✓ Diploma reconhecido pelo MEC
              </span>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div>
            <div className="w-full max-w-md mx-auto relative z-50 pointer-events-auto">
              <LeadForm variant="hero" />
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="flex justify-center mt-12">
          <div
            className="text-center cursor-pointer group"
            onClick={() => {
              document
                .getElementById('benefits')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <ChevronDown className="w-6 h-6 mx-auto group-hover:text-amber-300 transition-colors" />
            <span className="text-sm text-blue-200 group-hover:text-white transition-colors">
              Descubra mais
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
