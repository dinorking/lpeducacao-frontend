import { Mail, Phone, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-bold text-lg mb-4">Anhanguera e Unopar</h3>
            <p className="text-blue-200 text-sm mb-4">
              Transformando vidas através da educação. Cursos reconhecidos e suporte ao aluno.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Cursos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Polos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">(32) 98700-4926</p>
                  <p className="text-xs">Segunda a Sábado, 9h às 22h</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:rian.consultoreducacional@gmail.com.br" className="hover:text-white transition-colors">
                  rian.consultoreducacional@gmail.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold">Anhanguera e Unopar Educacional</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            </div>
          </div>

          <p className="text-center text-xs text-blue-300 mt-6">
            © {new Date().getFullYear()} Anhanguera e Unopar - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}