import React from 'react';
import { Calculator, Phone, Mail, Building2, MapPin, Scale, FileCheck, GraduationCap, BadgeCheck } from 'lucide-react';

const cities = ["Kragujevac", "Aranđelovac", "Topola", "Rača", "Jagodina", "Paraćin", "Ćuprija", "Velika Plana", "Kraljevo", "Čačak", "Vrnjačka Banja", "Trstenik", "Novi Pazar", "Raška"];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">Jelena Olarević</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Početna</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Usluge</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">O Meni</a>
              <a href="#locations" className="text-gray-700 hover:text-blue-600">Lokacije</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative h-[600px]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000"
              alt="Kancelarija za procenu nekretnina u Kragujevcu"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative container mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Pouzdana procena vrednosti vaše nepokretnosti</h1>
              <p className="text-xl mb-8">Brzo, tačno i profesionalno!</p>
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition inline-block">
                Zatražite Procenu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Usluge Procene</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Calculator className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Procena Tržišne Vrednosti</h3>
              <p className="text-gray-600">Stručna procena tržišne vrednosti stambenih i poslovnih nekretnina za različite namene</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Procena za Osiguranje</h3>
              <p className="text-gray-600">Procena vrednosti nekretnina za potrebe osiguranja i procene štete</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FileCheck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Sudska Veštačenja</h3>
              <p className="text-gray-600">Izrada elaborata za potrebe sudskih postupaka i eksproprijacije</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">O Meni</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <p className="text-gray-600">
                  Bilo da kupujete, prodajete, uzimate kredit ili planirate investiciju, tačna procena vrednosti vaše nekretnine je ključna. 
                </p>
                <p className="text-gray-600">
                  Licencirani procenitelj vrednosti nepokretnosti od strane Ministarstva finansija Republike Srbije, procenu vrednosti nepokretnosti izrađuje nezavisno i profesionalno po metodama koje su u skladu sa Nacionalnim standardima procena kao i Međunarodnim standardima procene (TEGOVA; IVSC i RICS).
                </p>
                <p className="text-gray-600">
                  Precizne i nepristasne procene tržišne vrednosti stanova, poslovnih prostora i zemljišta.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Kvalifikacije</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Licencirani procenitelj nekretnina</li>
                      <li>Član udruženja samostalnih sudskih veštaka i procenitelja vrednosti nepokretnosti (USSVP)</li>
                      <li>Sertifikat Ministarstva finansija</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Oblasti Procene</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Stambene nekretnine</li>
                      <li>Poslovni prostori</li>
                      <li>Industrijski objekti</li>
                      <li>Zemljište i placevi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Locations */}
      <section id="locations" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Gde Procenjujem</h2>
          <p className="text-gray-600 text-center mb-10">
            Procene vrednosti nepokretnosti vršim na teritoriji sledećih gradova i opština:
          </p>
          <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {cities.map((city) => (
              <li key={city} className="px-5 py-2 rounded-full border border-blue-200 text-gray-700 bg-white">
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-23">
          <h2 className="text-3xl font-bold text-center mb-12">Kontaktirajte Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Kontakt Informacije</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <a href="tel:+381658070708" className="hover:text-blue-600 hover:underline">+381 65 8070 708</a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <a href="mailto:elena.jelena@hotmail.com" className="hover:text-blue-600 hover:underline">elena.jelena@hotmail.com</a>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-blue-600 mr-3" />
                      <span>Master ekonomista</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                      <span>Kragujevac, Srbija</span>
                    </div>
                    <div className="flex items-center">
                      <BadgeCheck className="h-5 w-5 text-blue-600 mr-3" />
                      <span>Br. licence ovlašćenog procenitelja: 338</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Scale className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-semibold">Jelena Olarević</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Jelena Olarević - Procena Nekretnina. Sva prava zadržana.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;