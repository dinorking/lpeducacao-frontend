import { LeadForm } from './LeadForm';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function FinalCTA() {
  const benefits = [
    'Processo 100% online e rápido',
    'Sem compromisso nesta etapa',
    'Atendimento personalizado',
    'Tire todas as dúvidas com um consultor'
  ];

  return (
    <section id="form-final" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 px-4 py-2 rounded-full mb-4">
              <ArrowRight className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm font-semibold text-[#FF6B35]">
                Último passo
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Comece sua transformação hoje
            </h2>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Preencha o formulário e dê o primeiro passo rumo ao seu diploma. Um consultor especializado entrará em contato para te ajudar em todo o processo.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="hidden md:block p-5 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong className="text-[#003366]">Garantia de privacidade:</strong> Seus dados são protegidos conforme a LGPD. Não compartilhamos suas informações com terceiros.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div>
            <LeadForm variant="final" />
            
            <div className="md:hidden mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-gray-700 text-center">
                <strong className="text-[#003366]">Garantia de privacidade:</strong> Seus dados são protegidos conforme a LGPD.
              </p>
            </div>
          </div>
        </div>

        {/* Contador de inscrições (social proof sutil) */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            <span className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <strong className="text-green-700">2.847</strong> pessoas iniciaram a inscrição esta semana
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
