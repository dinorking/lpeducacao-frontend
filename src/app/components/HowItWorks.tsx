import { Edit3, BookOpen, Headphones } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Edit3,
      title: 'Você preenche seus dados',
      description: 'Informe nome, WhatsApp e e-mail para iniciar sua inscrição.'
    },
    {
      number: '2',
      icon: BookOpen,
      title: 'Escolhe curso e polo',
      description: 'No formulário oficial, você seleciona o curso desejado e a unidade mais próxima.'
    },
    {
      number: '3',
      icon: Headphones,
      title: 'Recebe acompanhamento',
      description: 'Um consultor entra em contato para explicar os próximos passos e tirar dúvidas antes da matrícula.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-4">
          Como funciona
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Processo simples e rápido em apenas 3 passos
        </p>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Linha conectora - apenas desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-[#0055A5]/20" />
              )}
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF6B35] text-white rounded-full mb-4 font-bold text-2xl relative">
                  {step.number}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <step.icon className="w-8 h-8 opacity-20 absolute" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
