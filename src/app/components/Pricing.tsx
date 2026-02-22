import { DollarSign, CreditCard, Tag, FileText } from 'lucide-react';

export function Pricing() {
  const highlights = [
    {
      icon: Tag,
      title: 'Mensalidades acessíveis',
      description: 'Valores que cabem no seu orçamento, sem comprometer suas finanças.'
    },
    {
      icon: CreditCard,
      title: 'Diversas formas de pagamento',
      description: 'Boleto, cartão de crédito e outras opções para facilitar.'
    },
    {
      icon: FileText,
      title: 'Condições especiais',
      description: 'Descontos e programas de financiamento disponíveis.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1612200116836-dd1f35662adf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBzdHVkeWluZ3xlbnwxfHx8fDE3Njk4ODgyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profissional planejando finanças"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          {/* Conteúdo */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 px-4 py-2 rounded-full mb-4">
              <DollarSign className="w-5 h-5 text-[#FF6B35]" />
              <span className="text-sm font-semibold text-[#FF6B35]">
                Investimento acessível
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Educação de qualidade que cabe no seu bolso
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Os valores variam conforme o curso, modalidade e polo escolhidos. No formulário de pré-matrícula, você terá acesso a todas as condições.
            </p>

            <div className="space-y-5">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#0055A5]/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#0055A5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-amber-50 border-l-4 border-amber-400 rounded">
              <p className="text-sm text-gray-800">
                <strong className="text-amber-700">Transparência total:</strong> Todos os valores e condições serão apresentados de forma clara no próximo passo, sem surpresas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
