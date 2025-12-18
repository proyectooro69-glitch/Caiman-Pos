import { motion } from "framer-motion";
import { 
  Briefcase, Users, ShoppingBag, Palette, Zap, FileText, 
  MessageCircle, Share2, Paperclip, Check
} from "lucide-react";

const uses = [
  { icon: Briefcase, text: "Uso profesional" },
  { icon: Users, text: "Networking" },
  { icon: Check, text: "Ventas" },
  { icon: Palette, text: "Portafolios" },
  { icon: ShoppingBag, text: "Catálogos" },
  { icon: Zap, text: "Contacto rápido" },
];

const analytics = [
  { icon: MessageCircle, text: "WhatsApp" },
  { icon: Share2, text: "Redes Sociales" },
  { icon: Paperclip, text: "Servicios" },
];

export function Features() {
  return (
    <>
      {/* USOS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Para qué se utilizan?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Adaptable a cualquier profesión o negocio.</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {uses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-gray-800 hover:border-indigo-500/50 transition-all group"
            >
              <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-colors">
                <item.icon size={28} />
              </div>
              <span className="font-medium text-slate-200 text-center">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ANALÍTICA */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lo que la hace diferente</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              No es solo una imagen estática. Analiza los clics de cada enlace y optimiza tu estrategia digital con datos reales. 
              Sabrás exactamente qué interesa más a tus clientes.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                Mide efectividad de campañas
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                Descubre qué red social te trae más tráfico
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                Optimiza tu portafolio de servicios
              </li>
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {analytics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-xl flex flex-col items-center text-center gap-3"
              >
                 <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400">
                  <item.icon size={24} />
                </div>
                <div className="font-semibold text-white">{item.text}</div>
                <div className="text-xs text-green-400 font-mono bg-green-900/30 px-2 py-1 rounded">
                  +{(index + 1) * 14}%
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENLACES */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Enlaces que puede contener</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Centraliza toda tu presencia digital en un solo lugar.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
           {["Redes Sociales", "WhatsApp Directo", "Email", "Descarga de PDFs", "Formularios", "Catálogos", "Ubicación GPS", "Pagos", "Videos"].map((tag, i) => (
             <span key={i} className="px-6 py-3 rounded-full bg-gray-800 text-slate-300 border border-gray-700 hover:border-indigo-500 hover:text-white transition-colors cursor-default">
               {tag}
             </span>
           ))}
        </div>
      </section>
    </>
  );
}
