import {
  BookOpen,
  Code,
  Briefcase,
  HeartPulse,
  Scale,
  Calculator,
  Users,
  Building
} from 'lucide-react';
import { scrollToNearestLeadForm } from '../lib/leadFormScroll';

export function Courses() {
  const courses = [
    { icon: Code, name: 'Analise e Desenvolvimento de Sistemas', category: 'Tecnologia' },
    { icon: Briefcase, name: 'Administracao', category: 'Gestao' },
    { icon: Calculator, name: 'Ciencias Contabeis', category: 'Financas' },
    { icon: HeartPulse, name: 'Enfermagem', category: 'Saude' },
    { icon: BookOpen, name: 'Pedagogia', category: 'Educacao' },
    { icon: Scale, name: 'Direito', category: 'Juridico' },
    { icon: Users, name: 'Gestao de Recursos Humanos', category: 'Gestao' },
    { icon: Building, name: 'Engenharia Civil', category: 'Engenharia' }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-4">
          Cursos disponiveis
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Graduacoes reconhecidas pelo MEC em diversas areas do conhecimento
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0055A5]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0055A5]/20 transition-colors">
                    <course.icon className="w-6 h-6 text-[#0055A5] group-hover:text-[#003366] transition-colors" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">{course.category}</p>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-[#003366] transition-colors">
                    {course.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">E muitos outros cursos disponiveis</p>
          <button
            type="button"
            onClick={(event) => {
              scrollToNearestLeadForm(event.currentTarget);
            }}
            className="inline-block px-6 py-3 bg-white border-2 border-[#0055A5] text-[#0055A5] font-semibold rounded-lg hover:bg-[#0055A5] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Ver todos os cursos no formulario
          </button>
        </div>
      </div>
    </section>
  );
}
