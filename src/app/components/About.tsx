import { Award, Building2, Users2 } from 'lucide-react';

export function About() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjb2xsZWdlJTIwY2FtcHVzfGVufDF8fHx8MTc2OTg4ODIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Estudantes da instituição"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          {/* Conteúdo */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Quem somos
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Fazemos parte do grupo Cogna Educação, uma das maiores redes de ensino do Brasil, com décadas de experiência na formação de profissionais que atuam em todo o país.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Por meio das instituições Anhanguera e Unopar, oferecemos ensino superior acessível, com qualidade, flexibilidade e estrutura para quem precisa estudar sem abrir mão do trabalho.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Building2 className="w-8 h-8 text-[#0055A5] mx-auto mb-2" />
                <p className="font-bold text-2xl text-[#003366]">3000+</p>
                <p className="text-sm text-gray-600">Polos</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Users2 className="w-8 h-8 text-[#0055A5] mx-auto mb-2" />
                <p className="font-bold text-2xl text-[#003366]">2,4 milhões</p>
                <p className="text-sm text-gray-600">Alunos</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Award className="w-8 h-8 text-[#0055A5] mx-auto mb-2" />
                <p className="font-bold text-2xl text-[#003366]">55+</p>
                <p className="text-sm text-gray-600">Anos</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#0055A5] p-4 rounded">
              <p className="text-sm font-semibold text-[#003366] mb-1">
                ✓ Reconhecido pelo MEC
              </p>
              <p className="text-sm text-gray-700">
                Todos os cursos são credenciados e possuem validade nacional, garantindo segurança e reconhecimento do seu diploma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
