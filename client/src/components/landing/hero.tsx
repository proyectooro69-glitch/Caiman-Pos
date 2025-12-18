import { motion } from "framer-motion";
import { User, Smartphone, Camera, BarChart2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
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
        <a 
          href="#formulario" 
          className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-indigo-500/30 transition-all hover:scale-105"
        >
          Crear mi tarjeta digital
        </a>
      </motion.div>

      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-gray-900 border border-gray-800 rounded-[2rem] p-8 shadow-2xl relative z-10 max-w-sm mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
          {/* Notch simulation */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-950 rounded-b-xl z-20"></div>
          
          <div className="space-y-4 pt-4">
             {/* Profile Header */}
            <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-inner">
              <div className="bg-indigo-600 p-3 rounded-full text-white">
                <User size={24} />
              </div>
              <div>
                <div className="font-bold text-white">Claricel Rodríguez</div>
                <div className="text-xs text-slate-400">Diseñadora Digital</div>
              </div>
            </div>

            {/* Links */}
            <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-inner hover:bg-slate-700 transition-colors cursor-pointer group">
              <div className="bg-green-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <div className="text-slate-200 font-medium">WhatsApp</div>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-inner hover:bg-slate-700 transition-colors cursor-pointer group">
              <div className="bg-pink-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                <Camera size={24} />
              </div>
              <div className="text-slate-200 font-medium">Instagram</div>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-inner border border-indigo-500/30">
              <div className="bg-blue-600 p-3 rounded-full text-white animate-pulse">
                <BarChart2 size={24} />
              </div>
              <div>
                <div className="text-slate-200 font-medium">Estadísticas en vivo</div>
                <div className="text-xs text-green-400 font-bold">+32 clics hoy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 rounded-full blur-[100px] -z-10"></div>
      </motion.div>
    </section>
  );
}
