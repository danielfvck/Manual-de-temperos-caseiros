
import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CountdownTimer from './components/CountdownTimer';

const PAYMENT_LINK = "https://ambienteseguro.org.ua/c/d55998c7c6";

const testimonials = [
  {
    name: "Mariana Oliveira",
    role: "Gastronomia Funcional",
    text: "A metodologia apresentada no manual permitiu que eu eliminasse completamente os temperos industrializados da minha cozinha sem perder o prazer de comer. É prático e direto ao ponto.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Ricardo Santos",
    role: "Entusiasta Culinário",
    text: "Sempre tive dificuldade em equilibrar os sabores usando apenas ervas naturais. O guia de Blends Desidratados mudou meu jogo. Meus pratos agora têm nível de restaurante.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    rating: 4.5
  },
  {
    name: "Carlos Eduardo",
    role: "Cozinheiro Amador",
    text: "Muito bom o conteúdo! As receitas de pastas de conservação me ajudaram a economizar muito tempo na correria da semana. Os sabores são incríveis e bem equilibrados.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    rating: 4
  },
  {
    name: "Ana Beatriz",
    role: "Nutricionista",
    text: "Recomendo para meus pacientes que precisam reduzir o sódio. Os blends são aromáticos e realmente entregam o sabor que prometem. Um excelente material de apoio para uma vida saudável.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    rating: 4.5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = star <= Math.floor(rating);
        const isHalf = !isFull && star === Math.ceil(rating) && rating % 1 !== 0;
        
        return (
          <svg 
            key={star} 
            className={`w-4 h-4 ${isFull || isHalf ? 'text-amber-400' : 'text-stone-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            {isHalf ? (
              <defs>
                <linearGradient id={`half-${star}`}>
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="#d6d3d1" stopOpacity="1" />
                </linearGradient>
              </defs>
            ) : null}
            <path 
              fill={isHalf ? `url(#half-${star})` : 'currentColor'}
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
            />
          </svg>
        );
      })}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 relative">
      {/* Selo Flutuante Animado - 93% OFF com Link de Pagamento */}
      <a 
        href={PAYMENT_LINK}
        className="fixed bottom-6 right-6 z-[60] animate-bounce block"
      >
        <div className="bg-red-600 text-white font-black p-4 rounded-full shadow-[0_15px_40px_-10px_rgba(220,38,38,0.5)] border-4 border-white flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rotate-12 transition-transform hover:rotate-0 hover:scale-110 active:scale-90 cursor-pointer">
          <span className="text-xl md:text-2xl leading-none tracking-tighter">93%</span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold">OFF</span>
        </div>
      </a>

      <main className="flex-1">
        <Hero />
        
        <Features />

        {/* Social Proof com Estilo de Captura de Tela */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-stone-900 uppercase tracking-widest">Quem adquiriu e gostou!!!</h2>
            <p className="text-emerald-600 font-bold mb-12 md:mb-16 text-sm md:text-lg animate-pulse">
              Mais de 3.876 pessoas já adquiriram e estão usando o segredo dos temperos a seu favor!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-left">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-stone-50 border border-stone-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative overflow-hidden">
                  {/* Selo de Verificação Discreto */}
                  <div className="absolute top-4 right-4 text-[8px] font-black uppercase tracking-tighter text-emerald-600 bg-emerald-50 px-2 py-1 border border-emerald-100">
                    Compra Verificada
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-stone-900 uppercase text-xs tracking-widest">{t.name}</h4>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-stone-700 font-serif leading-relaxed italic relative z-10 mb-6">
                    "{t.text}"
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-stone-200 flex justify-between items-center">
                    <StarRating rating={t.rating} />
                    <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-stone-400">Feedback Real</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bloco de Oferta Irresistível */}
        <section className="py-20 md:py-32 bg-emerald-950 text-white overflow-hidden relative border-t-8 border-emerald-600">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
            <CountdownTimer />
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-10 tracking-tighter uppercase italic">OFERTA ILIMITADA</h2>
            <p className="text-base md:text-xl text-emerald-100/60 mb-10 md:mb-12 max-w-2xl mx-auto font-medium">
              Acesso digital imediato ao manual completo, guias de conservação e tabelas de equivalência.
            </p>
            
            <div className="inline-block bg-white/5 backdrop-blur-sm p-8 md:p-12 mb-10 md:mb-12 border border-white/10 w-full max-md mx-auto">
              <div className="flex flex-col items-center gap-2">
                <span className="text-emerald-500/50 line-through text-xl md:text-2xl font-bold">R$ 87,00</span>
                <span className="text-5xl md:text-7xl font-black tracking-tighter text-white">R$ 5,90</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-emerald-400 mt-4">Somente esta semana</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-xl mx-auto">
              <a 
                href={PAYMENT_LINK}
                className="w-full inline-block px-8 py-6 md:px-12 md:py-8 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-none text-xl md:text-2xl transition-all shadow-[0_20px_60px_-15px_rgba(16,185,129,0.4)] uppercase tracking-widest animate-cta text-center decoration-none"
              >
                Sim, quero garantir o meu agora
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 text-stone-700 py-12 md:py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="font-bold text-[10px] md:text-xs uppercase tracking-[0.5em] text-emerald-500 mb-6 md:mb-8">Manual de Temperos Caseiros!!!</div>
          <p className="text-[9px] md:text-[10px] max-w-xl mx-auto leading-relaxed uppercase tracking-widest opacity-40 px-4">
            Aviso Legal: Os resultados podem variar de pessoa para pessoa. As informações aqui contidas não substituem aconselhamento médico profissional.
          </p>
          <div className="mt-8 text-[9px] md:text-[10px] uppercase tracking-widest">
            © 2026 Cantinho da receita
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
