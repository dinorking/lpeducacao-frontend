import { Clock, Briefcase, Users, Calendar } from 'lucide-react';
import { scrollToNearestLeadForm } from '../lib/leadFormScroll';

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Flexibilidade total de horários',
      description: 'Assista às aulas no horário que der, sem faltar no trabalho ou comprometer sua renda.'
    },
    {
      icon: Briefcase,
      title: 'Compatível com quem trabalha',
      description: 'Pensado para profissionais que não podem pausar a carreira.'
    },
    {
      icon: Users,
      title: 'Apoio durante toda a jornada',
      description: 'Um consultor acompanha você desde a inscrição até a formatura, tirando dúvidas sobre matrícula, estudos e prazos.'
    },
    {
      icon: Calendar,
      title: 'Sem abandonar sua rotina',
      description: 'Continue sua vida normalmente enquanto conquista seu diploma.'
    }
  ];

  return (
    <section 
      id="benefits"
      className="py-16 md:py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-12">
          Educação que cabe na sua vida — e no seu futuro
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0055A5]/10 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-[#0055A5]" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div 
            className="inline-block bg-gradient-to-r from-[#003366] to-[#0055A5] text-white px-8 py-4 rounded-full cursor-pointer group"
            onClick={(event) => {
              scrollToNearestLeadForm(event.currentTarget);
            }}
          >
            <span className="text-lg font-semibold">Quero fazer minha pré-matricula</span>
            {/*<span className="inline-block ml-2">→</span>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
