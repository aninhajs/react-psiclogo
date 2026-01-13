import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5585989167022?text=Olá! Gostaria de agendar uma consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#25d366] to-[#128c7e] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8" />
    </a>
  );
}
