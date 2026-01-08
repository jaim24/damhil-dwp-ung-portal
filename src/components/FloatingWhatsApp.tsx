import { MessageCircle } from "lucide-react";
import { contact } from "@/data/contact";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open(contact.whatsappLink, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-gentle"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
    </button>
  );
};

export default FloatingWhatsApp;
