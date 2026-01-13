import { Heart, Shield, Laptop } from "lucide-react";
import { ImageWithFallback } from "./componte-comum/ImageWithFallback";

export function About() {
  const qualities = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cada sessão é conduzida com empatia e respeito individual.",
    },
    {
      icon: Shield,
      title: "Sigilo e Ética",
      description:
        "Compromisso total com a confidencialidade e ética profissional.",
    },
    {
      icon: Laptop,
      title: "Online & Presencial",
      description: "Flexibilidade de atendimento conforme sua necessidade.",
    },
  ];

  const info = [
    { title: "CRP", value: "06/123456" },
    { title: "Formação", value: "Psicologia USP" },
    { title: "Experiência", value: "8+ Anos" },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Sobre Mim
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Conheça minha trajetória e propósito
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[280px] lg:max-w-none">
              <ImageWithFallback
                src="/angelo1.png"
                alt="Dr. Angelo Queiroz em seu consultório"
                className="w-full h-[350px] lg:h-[450px] object-cover rounded-2xl shadow-xl transition-transform hover:scale-105 hover:shadow-2xl touch-scale animate-fade-in"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
              Sou Angelo Queiroz, psicólogo clínico com mais de 8 anos de
              experiência, formado pela Universidade Federal e especializado em
              Terapia Cognitivo-Comportamental. Minha missão é oferecer um
              espaço de escuta empática e acolhimento, onde cada pessoa possa
              encontrar ferramentas para superar seus desafios e viver com mais
              leveza.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 mb-8 lg:mb-12">
              {info.map((item, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-4 rounded-lg shadow-sm animate-fade-in touch-scale"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm sm:text-xs lg:text-sm text-gray-600">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Qualities */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {qualities.map((quality, index) => {
                const Icon = quality.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-4 lg:p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in touch-scale"
                    style={{animationDelay: `${(index + 3) * 0.1}s`}}
                  >
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#5b8fb9] mb-3 lg:mb-4 mx-auto lg:mx-0" />
                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {quality.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {quality.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
