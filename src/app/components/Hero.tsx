import { Calendar, Video } from "lucide-react";
import { ImageWithFallback } from "./componte-comum/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 lg:pt-20 bg-gradient-to-br from-gray-50/50 via-white to-[#a8d5ba]/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Cuidar da mente é um{" "}
              <span className="bg-gradient-to-r from-[#5b8fb9] to-[#a8d5ba] bg-clip-text text-transparent">
                ato de coragem
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Psicólogo clínico especialista em ansiedade, depressão e terapia
              de casal. Ofereço um espaço seguro e acolhedor para sua jornada de
              autoconhecimento e bem-estar emocional.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#5b8fb9] text-white rounded-full font-medium text-base sm:text-lg hover:bg-gray-900 transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95 active:bg-gray-800 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5" />
                Agendar Agora
              </a>

              <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                <Video className="w-5 h-5 text-[#5b8fb9]" />
                <span>Atendimento online e presencial</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px]">
              <div className="relative rounded-[30px_80px_60px_15px] lg:rounded-[40px_100px_80px_20px] overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 hover:rounded-[80px_30px_15px_60px] active:scale-[1.02] animate-pulse-subtle">
                <ImageWithFallback
                  src="/angelo2.png"
                  alt="Dr. Angelo Queiroz - Psicólogo Clínico"
                  className="w-full h-[400px] sm:h-[450px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#5b8fb9]/10 to-[#a8d5ba]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
