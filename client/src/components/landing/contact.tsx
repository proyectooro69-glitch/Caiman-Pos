import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto"),
  telefono: z.string().min(5, "Ingresa un número válido"),
  email: z.string().email("Email inválido"),
  plantilla: z.string().optional(),
  comentarios: z.string().optional(),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      email: "",
      plantilla: "",
      comentarios: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Primero enviar a Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbwU29nq1r0DfZu_RQwhyb8IXNzzhYJkyLj8JQZ_SnDa1J7WjOrihHcC8p5sRTMxppm6xA/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: values.nombre,
        telefono: values.telefono,
        email: values.email,
        plantilla: values.plantilla || "No especificada",
        comentarios: values.comentarios || "Sin comentarios"
      })
    })
    .then(() => {
      // Luego abrir WhatsApp
      const mensaje = `Hola, soy ${values.nombre}.
Teléfono: ${values.telefono}
Email: ${values.email}
Plantilla: ${values.plantilla || "No especificada"}
Comentarios: ${values.comentarios || "Sin comentarios"}`;

      const url = "https://wa.me/5358875135?text=" + encodeURIComponent(mensaje);
      window.open(url, "_blank");
      
      setIsSubmitting(false);
      form.reset();
    })
    .catch((error) => {
      console.error("Error al enviar datos:", error);
      alert("Hubo un error al enviar los datos. Por favor intenta nuevamente.");
      setIsSubmitting(false);
    });
  }

  return (
    <section id="formulario" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gray-950 border-gray-800 shadow-2xl overflow-hidden relative">
          {/* Background gradient effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]"></div>

          <CardHeader className="text-center pb-8 relative z-10">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Crear mi tarjeta digital
            </CardTitle>
            <p className="text-slate-400 mt-2">
              Completa el formulario y te contactaremos por WhatsApp para iniciar.
            </p>
          </CardHeader>

          <CardContent className="relative z-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Nombre completo" 
                            className="bg-gray-900 border-gray-800 focus:border-indigo-500 h-12 rounded-xl"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Número de móvil" 
                            type="tel"
                            className="bg-gray-900 border-gray-800 focus:border-indigo-500 h-12 rounded-xl"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Correo electrónico" 
                            type="email"
                            className="bg-gray-900 border-gray-800 focus:border-indigo-500 h-12 rounded-xl"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="plantilla"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Código de plantilla (Opcional)" 
                            className="bg-gray-900 border-gray-800 focus:border-indigo-500 h-12 rounded-xl"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="comentarios"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          placeholder="Comentarios adicionales o dudas..." 
                          className="bg-gray-900 border-gray-800 focus:border-indigo-500 min-h-[120px] rounded-xl resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-lg hover:shadow-cyan-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar información
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
