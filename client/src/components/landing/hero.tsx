import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-8 pb-20 px-6 max-w-7xl mx-auto">
      {/* Logo & Branding - Top Left */}
      <div className="flex items-center justify-start gap-6 mb-16">
        <motion.img
          src="/caiman-logo.png"
          alt="CAIMÁN Cards"
          className="h-32 md:h-40 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="text-sm md:text-base text-slate-400 font-medium tracking-wide">
            Soluciones Digitales
          </div>
          <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            CAIMÁN
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-start"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Tu tarjeta de presentación ya no es papel.
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-400">
            Es digital, interactiva y medible.
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
            Crea una tarjeta de presentación digital interactiva con enlaces, formularios y analítica de clics.
            Conecta con tus clientes de una manera moderna y eficiente.
          </p>
          
          <div className="flex flex-col gap-4">
            <a 
              href="#formulario" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-indigo-500/30 transition-all hover:scale-105 text-center"
              data-testid="button-create-card"
            >
              Crear mi tarjeta digital
            </a>
            
            <a
              href="https://url-shortener--proyectooro69.replit.app/p7ohnc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-green-500/30 transition-all hover:scale-105"
              data-testid="button-whatsapp-contact"
            >
              <MessageCircle size={24} />
              Más información por WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right - Example Card Image */}
        <motion.div 
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/digital-card-example.png"
            alt="Ejemplo de tarjeta digital interactiva"
            className="w-full max-w-sm drop-shadow-2xl"
          />
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 rounded-full blur-[100px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
