import {
  Heart,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const quickLinks = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Abordagem", href: "#approach" },
    { label: "Conteúdos", href: "#blog" },
  ];

  const specialties = [
    { label: "Terapia Individual", href: "#services" },
    { label: "Ansiedade e Depressão", href: "#services" },
    { label: "Terapia de Casal", href: "#services" },
    { label: "Autoconhecimento", href: "#services" },
  ];

  const legalLinks = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Código de Ética", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    {
      icon: MessageCircle,
      href: "https://wa.me/5585989167022",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center gap-2 mb-4 group"
            >
              <Heart className="w-6 h-6 text-[#5b8fb9] transition-transform group-hover:scale-110" />
              <span className="text-xl font-semibold">Dr. Angelo Queiroz</span>
            </a>
            <p className="text-sm text-gray-400 italic leading-relaxed mb-6">
              "Cada jornada de cura começa com um passo corajoso. Estou aqui
              para caminhar ao seu lado."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#5b8fb9] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Especialidades</h3>
            <ul className="space-y-2">
              {specialties.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#5b8fb9] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5585989167022"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#5b8fb9] transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (85) 98916-7022
                </a>
              </li>
              <li>
                <a
                  href="mailto:anajeize27@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#5b8fb9] transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  anajeize27@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Fortaleza, CE
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-[#5b8fb9] flex items-center justify-center hover:bg-[#a8d5ba] transition-all hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © 2024 Dr. Angelo Queiroz - CRP 06/123456. Todos os direitos
              reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#5b8fb9] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
