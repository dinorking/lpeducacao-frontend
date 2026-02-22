import { MapPin } from 'lucide-react';
import { scrollToNearestLeadForm } from '../lib/leadFormScroll';

export function Locations() {
  const cities = [
    { city: 'São Paulo', state: 'SP', polos: 45 },
    { city: 'Rio de Janeiro', state: 'RJ', polos: 28 },
    { city: 'Belo Horizonte', state: 'MG', polos: 22 },
    { city: 'Brasília', state: 'DF', polos: 15 },
    { city: 'Curitiba', state: 'PR', polos: 18 },
    { city: 'Porto Alegre', state: 'RS', polos: 20 },
    { city: 'Salvador', state: 'BA', polos: 16 },
    { city: 'Fortaleza', state: 'CE', polos: 14 },
    { city: 'Recife', state: 'PE', polos: 12 },
    { city: 'Manaus', state: 'AM', polos: 8 },
    { city: 'Goiânia', state: 'GO', polos: 10 },
    { city: 'Belém', state: 'PA', polos: 9 },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-4">
          Polos em todo o Brasil
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Mais de 500 polos distribuídos em todas as regiões do país
        </p>


        {/* Grid de cidades */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {cities.map((location, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#0055A5] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {location.city}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {location.state}{/* • {location.polos} polos*/}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-700 mb-4">
            <strong>Não encontrou sua cidade?</strong> Temos polos em centenas de municípios.
          </p>
          <button
            onClick={(event) => {
              scrollToNearestLeadForm(event.currentTarget);
            }}
            className="bg-[#FF6B35] hover:bg-[#E55A28] text-white font-bold px-6 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Encontrar polo mais próximo
          </button>
        </div>
      </div>
    </section>
  );
}
