import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

const templates = [
  { id: "C-01", name: "Corporativo", image: "/template-corporativo.png" },
  { id: "P-05", name: "Personal", image: "/template-personal.png" },
  { id: "B-09", name: "Business", image: "/template-business.png" },
];

export function Templates() {
  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plantillas disponibles</h2>
          <p className="text-slate-400">Elige el estilo que mejor se adapte a tu marca.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {templates.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative h-96 rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl"
            >
              {/* Template Image */}
              <img 
                src={t.image} 
                alt={t.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{t.name}</h3>
                <p className="text-slate-400 text-sm">Plantilla {t.id}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1zfEfW0y7XHGJvZixMaBWtWvakTd51g3b?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
            data-testid="button-view-templates"
          >
            <FolderOpen size={24} />
            Ver todas nuestras plantillas
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">¿Cómo funciona?</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
        {/* Connector Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -z-10 -translate-y-1/2"></div>

        {[
          { step: "1", title: "Eliges plantilla" },
          { step: "2", title: "Envío de datos" },
          { step: "3", title: "Revisión" },
          { step: "4", title: "Pago" },
          { step: "5", title: "Entrega final" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-4 bg-background z-10 px-4"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
              {item.step}
            </div>
            <span className="font-medium text-slate-300 text-center">{item.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
