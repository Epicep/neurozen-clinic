import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/972548082487"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="צרו קשר בוואטסאפ"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp;
