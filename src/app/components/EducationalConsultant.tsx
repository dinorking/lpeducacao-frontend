import { CheckCircle, GraduationCap, MessageCircle } from 'lucide-react';
import consultantPhoto from "../../assets/images/consultant-photo.jpg";
import whatsappIcon from "../../assets/images/whatsapp-icon.png";

export function EducationalConsultant() {
  const responsibilities = [
    {
      icon: GraduationCap,
      text: 'Orientação na escolha do curso e do polo mais adequado'
    },
    {
      icon: MessageCircle,
      text: 'Esclarecimento de valores, bolsas e condições disponíveis'
    },
    {
      icon: CheckCircle,
      text: 'Acompanhamento durante o processo de inscrição e matrícula'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-3">
            Acompanhamento durante todo o processo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um consultor educacional da instituição para orientar você em cada etapa, desde a pré-matrícula
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-0">
            {/* Foto do consultor */}
            <div className="bg-gradient-to-b from-[#003366]/5 to-[#003366]/10 flex items-center justify-center p-8 md:p-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF6B35]/10 rounded-full blur-2xl"></div>
                <img
                  src={consultantPhoto}
                  alt="Consultor Educacional"
                  className="relative rounded-full w-48 h-48 object-cover border-4 border-white shadow-xl mx-auto"
                />
              </div>
            </div>

            {/* Informações do consultor */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Rian Oliveira
                </h3>
                <p className="text-[#FF6B35] font-semibold text-sm tracking-wide uppercase">
                  Consultor Educacional
                </p>
              </div>

              <div className="space-y-4">
                {responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <item.icon className="w-5 h-5 text-[#003366]" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Botão de WhatsApp */}
              <div className="mt-6">
                <a
                  href="https://wa.me/5532987004926?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20processo%20de%20matr%C3%ADcula.%20Poderia%20me%20ajudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/20 hover:border-white/40 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-inner">
                    <img
                      src={whatsappIcon}
                      alt="WhatsApp"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-lg">Tirar dúvidas</div>
                    <div className="text-xs opacity-90 font-medium">Converse com o consultor</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  Nosso papel é garantir que você tenha todas as informações necessárias para tomar a melhor decisão sobre sua formação acadêmica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nota de tranquilização */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#003366]/5 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5 text-[#FF6B35]" />
            <p className="text-sm text-gray-700">
              Você não ficará sozinho em nenhuma etapa do processo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
