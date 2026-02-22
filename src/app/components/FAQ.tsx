import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Posso estudar trabalhando?',
      answer: 'Sim! Nossos cursos são pensados especialmente para quem trabalha. Você estuda no seu ritmo, com aulas gravadas disponíveis 24h e suporte online completo.'
    },
    {
      question: 'O diploma é reconhecido pelo MEC?',
      answer: 'Sim, todos os nossos cursos são credenciados e reconhecidos pelo Ministério da Educação. Seu diploma tem a mesma validade de cursos presenciais tradicionais.'
    },
    {
      question: 'Quanto custa a mensalidade?',
      answer: 'Os valores variam conforme o curso, modalidade (EAD, presencial ou semipresencial) e polo escolhido. No formulário de pré-matrícula você terá acesso a todas as condições e valores específicos para sua escolha.'
    },
    {
      question: 'Preciso ir ao polo presencialmente?',
      answer: 'Depende da modalidade escolhida. No EAD 100% online, as provas podem ser feitas em casa. No semipresencial, você vai ao polo de 1 a 2 vezes na semana. No presencial, as aulas são no polo.'
    },
    {
      question: 'Como funciona o processo de matrícula?',
      answer: 'Primeiro, você preenche seus dados aqui nesta página. Depois, será direcionado ao formulário oficial onde escolherá curso e polo. Por fim, um consultor entra em contato para finalizar sua matrícula e tirar dúvidas.'
    },
    {
      question: 'Há algum compromisso ao preencher o formulário?',
      answer: 'Não! Ao preencher seus dados você apenas manifesta interesse. Não há cobrança nem compromisso nesta etapa. É apenas para conhecer melhor nossas opções.'
    },
    {
      question: 'Quanto tempo dura o curso?',
      answer: 'A duração varia por curso. Bacharelados geralmente duram de 4 a 5 anos, licenciaturas 4 anos, e tecnólogos de 2 a 3 anos. Você pode consultar a duração específica no formulário de pré-matrícula.'
    },
    {
      question: 'Posso usar FIES ou ProUni?',
      answer: 'Sim! Como somos credenciados pelo MEC, nossos alunos podem se candidatar a programas governamentais de financiamento e bolsas. Nossos consultores podem te orientar sobre essas opções.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-4">
          Perguntas frequentes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Tire suas dúvidas sobre o processo de inscrição e nossos cursos
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-[#0055A5]/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#0055A5] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-gray-800 mb-3">
            <strong className="text-[#003366]">Ainda tem dúvidas?</strong>
          </p>
          <p className="text-sm text-gray-700">
            Nossos consultores estão prontos para te ajudar. Preencha o formulário e receba atendimento personalizado.
          </p>
        </div>
      </div>
    </section>
  );
}
