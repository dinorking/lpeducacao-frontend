import { Shield, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export function Trust() {
  const trustBadges = [
    {
      icon: Shield,
      title: 'Credenciado MEC',
      description: 'Instituição reconhecida e autorizada pelo Ministério da Educação'
    },
    {
      icon: Award,
      title: '55+ anos de história',
      description: 'Mais de duas décadas formando profissionais de sucesso'
    },
    {
      icon: Users,
      title: '2,4 milhões alunos',
      description: 'Milhões de estudantes confiam na nossa educação'
    },
    {
      icon: TrendingUp,
      title: 'Alta empregabilidade',
      description: 'Nossos formados são valorizados pelo mercado'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#003366] to-[#0055A5] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Confiança que você pode sentir
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Parte de um dos maiores grupos educacionais do Brasil
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustBadges.map((badge, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
            >
              <badge.icon className="w-10 h-10 mb-4 text-amber-300" />
              <h3 className="font-bold text-lg mb-2">
                {badge.title}
              </h3>
              <p className="text-blue-100 text-sm">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Depoimentos simplificados */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-300">★</span>
              ))}
            </div>
            <p className="text-blue-50 italic mb-3">
              &ldquo;Consegui me formar sem sair do emprego. A flexibilidade foi essencial.&rdquo;
            </p>
            <p className="text-sm text-blue-200">
              — Maria, Administração
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-300">★</span>
              ))}
            </div>
            <p className="text-blue-50 italic mb-3">
              &ldquo;Suporte incrível durante todo o curso. Nunca me senti sozinho.&rdquo;
            </p>
            <p className="text-sm text-blue-200">
              — João, Engenharia Civil
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-300">★</span>
              ))}
            </div>
            <p className="text-blue-50 italic mb-3">
              &ldquo;Melhor investimento que fiz. Consegui uma promoção antes de formar.&rdquo;
            </p>
            <p className="text-sm text-blue-200">
              — Ana, Gestão de RH
            </p>
          </div>
        </div>

        {/* Selos */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-green-300" />
            <span className="font-semibold">MEC</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-green-300" />
            <span className="font-semibold">ISO 9001</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-green-300" />
            <span className="font-semibold">Nota Máxima EAD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
