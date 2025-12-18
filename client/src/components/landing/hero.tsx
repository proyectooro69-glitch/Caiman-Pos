import { useState } from "react";
import { motion } from "framer-motion";
import { User, Smartphone, Camera, BarChart2, Edit2, Check } from "lucide-react";

export function Hero() {
  const [isEditing, setIsEditing] = useState(false);
  const [cardData, setCardData] = useState({
    nombre: "Claricel Rodríguez",
    titulo: "Diseñadora Digital",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    clicks: "+32 clics hoy",
  });

  const [tempData, setTempData] = useState(cardData);

  const handleEdit = () => {
    setIsEditing(true);
    setTempData(cardData);
  };

  const handleSave = () => {
    setCardData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <section className="relative pt-20 pb-20 px-6 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex justify-center mb-12">
        <motion.img
          src="/caiman-logo.png"
          alt="CAIMÁN Cards"
          className="h-24 md:h-32 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
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
          <div className="bg-gray-900 border border-gray-800 rounded-[2rem] p-8 shadow-2xl relative z-10 max-w-sm mx-auto transform hover:rotate-0 transition-transform duration-500">
            {/* Notch simulation */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-950 rounded-b-xl z-20"></div>
            
            <div className="space-y-4 pt-4">
              {/* Profile Header */}
              <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between gap-4 shadow-inner">
                <div className="flex items-center gap-4 flex-1">
                  <div className="bg-indigo-600 p-3 rounded-full text-white">
                    <User size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white">{cardData.nombre}</div>
                    <div className="text-xs text-slate-400">{cardData.titulo}</div>
                  </div>
                </div>
                <button
                  onClick={handleEdit}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                  title="Editar tarjeta"
                  data-testid="button-edit-card"
                >
                  <Edit2 size={18} className="text-slate-400 hover:text-white" />
                </button>
              </div>

              {/* Links */}
              <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-inner hover:bg-slate-700 transition-colors cursor-pointer group">
                <div className="bg-green-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
                </div>
                <div className="text-slate-200 font-medium">{cardData.whatsapp}</div>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-inner hover:bg-slate-700 transition-colors cursor-pointer group">
                <div className="bg-pink-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Camera size={24} />
                </div>
                <div className="text-slate-200 font-medium">{cardData.instagram}</div>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-inner border border-indigo-500/30">
                <div className="bg-blue-600 p-3 rounded-full text-white animate-pulse">
                  <BarChart2 size={24} />
                </div>
                <div>
                  <div className="text-slate-200 font-medium">Estadísticas en vivo</div>
                  <div className="text-xs text-green-400 font-bold">{cardData.clicks}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 rounded-full blur-[100px] -z-10"></div>

          {/* Edit Modal */}
          {isEditing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={handleCancel}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md w-full"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Editar tarjeta</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
                    <input
                      type="text"
                      value={tempData.nombre}
                      onChange={(e) => setTempData({ ...tempData, nombre: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 outline-none transition-colors"
                      data-testid="input-card-name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Título/Profesión</label>
                    <input
                      type="text"
                      value={tempData.titulo}
                      onChange={(e) => setTempData({ ...tempData, titulo: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 outline-none transition-colors"
                      data-testid="input-card-title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">WhatsApp</label>
                    <input
                      type="text"
                      value={tempData.whatsapp}
                      onChange={(e) => setTempData({ ...tempData, whatsapp: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 outline-none transition-colors"
                      data-testid="input-whatsapp"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Instagram</label>
                    <input
                      type="text"
                      value={tempData.instagram}
                      onChange={(e) => setTempData({ ...tempData, instagram: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 outline-none transition-colors"
                      data-testid="input-instagram"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Clicks de hoy</label>
                    <input
                      type="text"
                      value={tempData.clicks}
                      onChange={(e) => setTempData({ ...tempData, clicks: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 outline-none transition-colors"
                      data-testid="input-clicks"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={handleSave}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    data-testid="button-save-card"
                  >
                    <Check size={18} />
                    Guardar
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 px-4 py-3 bg-gray-800 text-slate-300 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                    data-testid="button-cancel-edit"
                  >
                    Cancelar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
