import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Templates, Process } from "@/components/landing/templates";
import { ContactForm } from "@/components/landing/contact";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Features />
      <Templates />
      <Process />
      <ContactForm />

      <footer className="py-12 text-center text-slate-500 border-t border-gray-900 bg-gray-950">
        <p>© {new Date().getFullYear()} CAIMÁN · Tarjetas Digitales Interactivas</p>
      </footer>
    </div>
  );
}
