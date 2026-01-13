import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Video, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    alert("Mensagem enviada! Entraremos em contato em breve.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      data: "(85) 98916-7022",
      href: "https://wa.me/5585989167022",
    },
    {
      icon: Mail,
      title: "Email",
      data: "anajeize27@gmail.com",
      href: "mailto:anajeize27@gmail.com",
    },
    {
      icon: MapPin,
      title: "Localização",
      data: "Fortaleza, CE",
    },
    {
      icon: Clock,
      title: "Horários",
      data: "Seg à Sex: 8h às 18h",
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Agende sua Consulta
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Estou aqui para te acolher
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Vamos conversar?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Dê o primeiro passo em direção ao seu bem-estar. Entre em contato
              para agendar sua consulta ou esclarecer dúvidas.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 lg:p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all text-center animate-fade-in touch-scale"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <Icon className="w-6 h-6 text-[#5b8fb9] mb-3 mx-auto" />
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-[#5b8fb9] transition-colors"
                      >
                        {item.data}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-600">{item.data}</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Online Consultation Banner */}
            <div className="bg-gradient-to-r from-[#5b8fb9] to-[#a8d5ba] p-6 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <Video className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Atendimento Online
                  </h4>
                  <p className="text-sm opacity-90">
                    Consultas por videochamada com a mesma qualidade do
                    presencial
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-lg focus:bg-white focus:border-[#5b8fb9] outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-lg focus:bg-white focus:border-[#5b8fb9] outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-lg focus:bg-white focus:border-[#5b8fb9] outline-none transition-all"
                />
              </div>

              {/* <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                  Modalidade
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-lg focus:bg-white focus:border-[#5b8fb9] outline-none transition-all"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="presencial">Presencial</option>
                  <option value="online">Online</option>
                </select>
              </div> */}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-lg focus:bg-white focus:border-[#5b8fb9] outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#5b8fb9] text-white rounded-full font-medium hover:bg-gray-900 transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95 touch-scale"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
