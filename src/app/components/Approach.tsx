export function Approach() {
  const steps = [
    {
      number: "01",
      title: "Acolhimento",
      description:
        "Criação de um ambiente seguro e empático para estabelecer vínculo terapêutico.",
    },
    {
      number: "02",
      title: "Avaliação",
      description:
        "Compreensão profunda da sua história, padrões e objetivos terapêuticos.",
    },
    {
      number: "03",
      title: "Processo Terapêutico",
      description:
        "Desenvolvimento de estratégias personalizadas para mudanças positivas.",
    },
    {
      number: "04",
      title: "Evolução e Autonomia",
      description:
        "Fortalecimento da sua capacidade de autogerenciamento emocional.",
    },
  ];

  return (
    <section id="approach" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Minha Abordagem
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Terapia Cognitivo-Comportamental humanizada
          </p>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Utilizo a Terapia Cognitivo-Comportamental (TCC) integrada com
            princípios humanísticos, focando na relação entre pensamentos,
            emoções e comportamentos. Esta abordagem científica e acolhedora
            permite transformações duradouras e práticas.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in touch-scale"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[#5b8fb9] to-[#a8d5ba] flex items-center justify-center text-white font-bold text-lg lg:text-xl group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
