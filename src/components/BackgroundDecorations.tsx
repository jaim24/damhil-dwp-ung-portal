// Dekorasi background dengan unsur anak-anak
// Komponen ini menampilkan elemen dekoratif seperti mainan

const BackgroundDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Bola-bola kecil */}
      <div className="absolute top-20 left-[5%] w-8 h-8 rounded-full bg-pastel-pink/30 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-[8%] w-6 h-6 rounded-full bg-pastel-blue/30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[60%] left-[3%] w-10 h-10 rounded-full bg-pastel-yellow/30 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[80%] right-[5%] w-7 h-7 rounded-full bg-pastel-green/30 animate-float" style={{ animationDelay: '0.5s' }} />
      
      {/* Bintang-bintang */}
      <svg className="absolute top-[15%] right-[12%] w-6 h-6 text-pastel-yellow/40 animate-bounce-gentle" style={{ animationDelay: '0.3s' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg className="absolute top-[45%] left-[6%] w-5 h-5 text-pastel-purple/40 animate-bounce-gentle" style={{ animationDelay: '1.5s' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      
      {/* Balok mainan */}
      <div className="absolute top-[25%] left-[2%] w-8 h-8 bg-pastel-orange/25 rounded-lg rotate-12 animate-float" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-[70%] right-[3%] w-6 h-6 bg-pastel-blue/25 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '0.8s' }} />
      
      {/* Segitiga (seperti topi pesta) */}
      <svg className="absolute top-[55%] right-[10%] w-8 h-8 text-pastel-pink/30 animate-bounce-gentle" style={{ animationDelay: '2s' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 21h20L12 3z" />
      </svg>
      
      {/* Hati kecil */}
      <svg className="absolute top-[35%] right-[4%] w-5 h-5 text-pastel-pink/35 animate-float" style={{ animationDelay: '1.8s' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      
      {/* Lingkaran dengan outline */}
      <div className="absolute top-[85%] left-[8%] w-10 h-10 border-2 border-pastel-green/30 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.6s' }} />
    </div>
  );
};

export default BackgroundDecorations;
