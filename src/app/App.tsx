import { Hero } from '../app/components/Hero';
import { Benefits } from '../app/components/Benefits';
import { HowItWorks } from '../app/components/HowItWorks';
import { EducationalConsultant } from '../app/components/EducationalConsultant';
import { About } from '../app/components/About';
import { Courses } from '../app/components/Courses';
import { Flexibility } from '../app/components/Flexibility';
import { Locations } from '../app/components/Locations';
import { Pricing } from '../app/components/Pricing';
import { Trust } from '../app/components/Trust';
import { FAQ } from '../app/components/FAQ';
import { FinalCTA } from '../app/components/FinalCTA';
import { Footer } from '../app/components/Footer';
import { ScrollToTop } from '../app/components/ScrollToTop';
import { TopBar } from '../app/components/TopBar';
import { MobileCTA } from '../app/components/MobileCTA';
import { UrgencyBanner } from '../app/components/UrgencyBanner';
import { CookieBanner } from '../app/components/CookieBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Barra de anúncio no topo */}
      <TopBar />
      
      {/* Hero com formulário inicial */}
      <Hero />


      
      {/* Alívio de objeções */}
      <Benefits />
      
      {/* Como funciona */}
      <HowItWorks />
      
      {/* Quem somos */}
      <About />
      
      {/* Consultor educacional */}
      <EducationalConsultant />
      
      {/* Cursos disponíveis */}
      <Courses />
      
      {/* Modalidades e flexibilidade */}
      <Flexibility />
      
      {/* Polos */}
      <Locations />
      
      {/* Expectativa de valores */}
      <Pricing />
      
      {/* Provas de confiança */}
      <Trust />
      
      {/* Perguntas frequentes */}
      <FAQ />
      
      {/* CTA final */}
      <FinalCTA />
      
      {/* Rodapé */}
      <Footer />
      
      {/* Botão voltar ao topo */}
      <ScrollToTop />
      
      {/* CTA fixo mobile */}
      <MobileCTA />
      
      {/* Banner de urgência (aparece após 10s) */}
      <UrgencyBanner />
      
      {/* Banner de cookies/LGPD */}
      <CookieBanner />
    </div>
  );
}