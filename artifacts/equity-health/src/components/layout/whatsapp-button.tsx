import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233501515122"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp-green text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
      data-testid="button-whatsapp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
