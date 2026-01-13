import {
  User,
  Brain,
  Heart,
  Compass,
  HandHeart,
  Users,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: User,
      title: "Terapia Individual",
      description:
        "Processo terapêutico personalizado para autoconhecimento, crescimento pessoal e resolução de questões emocionais.",
    },
    {
      icon: Brain,
      title: "Ansiedade e Depressão",
      description:
        "Tratamento especializado para transtornos de ansiedade e episódios depressivos, com técnicas comprovadas e acolhimento.",
    },
    {
      icon: Heart,
      title: "Terapia de Casal",
      description:
        "Apoio para relacionamentos em crise, melhorando a comunicação e fortalecendo vínculos afetivos.",
    },
    {
      icon: Compass,
      title: "Autoconhecimento",
      description:
        "Jornada de descoberta interior para identificar potenciais, valores e propósito de vida.",
    },
    {
      icon: HandHeart,
      title: "Orientação Emocional",
      description:
        "Suporte para momentos difíceis, luto, mudanças de vida e desenvolvimento de inteligência emocional.",
    },
    {
      icon: Users,
      title: "Terapia Familiar",
      description:
        "Mediação de conflitos familiares e fortalecimento de vínculos entre pais, filhos e outros membros.",
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Especialidades
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Áreas de atuação terapêutica
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:border-[#5b8fb9] relative overflow-hidden animate-fade-in touch-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5b8fb9] to-[#a8d5ba] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-[#5b8fb9] mb-4 transition-transform group-hover:scale-110" />

                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#5b8fb9] hover:text-gray-900 transition-colors group/link"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
