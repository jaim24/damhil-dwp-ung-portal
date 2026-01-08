// Dekorasi background dengan unsur anak-anak
// Komponen ini menampilkan elemen dekoratif seperti mainan

const BackgroundDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {/* Bola-bola kecil */}
      <div 
        className="absolute top-20 left-[5%] w-8 h-8 rounded-full animate-float" 
        style={{ backgroundColor: 'hsl(340 82% 88% / 0.4)', animationDelay: '0s' }} 
      />
      <div 
        className="absolute top-40 right-[8%] w-6 h-6 rounded-full animate-float" 
        style={{ backgroundColor: 'hsl(199 89% 85% / 0.4)', animationDelay: '1s' }} 
      />
      <div 
        className="absolute top-[60%] left-[3%] w-10 h-10 rounded-full animate-float" 
        style={{ backgroundColor: 'hsl(45 93% 85% / 0.4)', animationDelay: '2s' }} 
      />
      <div 
        className="absolute top-[80%] right-[5%] w-7 h-7 rounded-full animate-float" 
        style={{ backgroundColor: 'hsl(142 52% 80% / 0.4)', animationDelay: '0.5s' }} 
      />
      
      {/* Bintang-bintang */}
      <svg 
        className="absolute top-[15%] right-[12%] w-6 h-6 animate-bounce-gentle" 
        style={{ color: 'hsl(45 93% 70%)', animationDelay: '0.3s' }} 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg 
        className="absolute top-[45%] left-[6%] w-5 h-5 animate-bounce-gentle" 
        style={{ color: 'hsl(270 67% 75%)', animationDelay: '1.5s' }} 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      
      {/* Balok mainan */}
      <div 
        className="absolute top-[25%] left-[2%] w-8 h-8 rounded-lg rotate-12 animate-float" 
        style={{ backgroundColor: 'hsl(25 95% 80% / 0.5)', animationDelay: '1.2s' }} 
      />
      <div 
        className="absolute top-[70%] right-[3%] w-6 h-6 rounded-lg -rotate-12 animate-float" 
        style={{ backgroundColor: 'hsl(199 89% 80% / 0.5)', animationDelay: '0.8s' }} 
      />
      
      {/* Segitiga (seperti topi pesta) */}
      <svg 
        className="absolute top-[55%] right-[10%] w-8 h-8 animate-bounce-gentle" 
        style={{ color: 'hsl(340 82% 80% / 0.5)', animationDelay: '2s' }} 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 3L2 21h20L12 3z" />
      </svg>
      
      {/* Hati kecil */}
      <svg 
        className="absolute top-[35%] right-[4%] w-5 h-5 animate-float" 
        style={{ color: 'hsl(340 82% 75%)', animationDelay: '1.8s' }} 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      
      {/* Lingkaran dengan outline */}
      <div 
        className="absolute top-[85%] left-[8%] w-10 h-10 rounded-full animate-bounce-gentle" 
        style={{ border: '3px solid hsl(142 52% 70% / 0.5)', animationDelay: '0.6s' }} 
      />

      {/* Crayon/Pensil warna */}
      <div 
        className="absolute top-[30%] right-[6%] w-3 h-12 rounded-t-full animate-float rotate-45" 
        style={{ backgroundColor: 'hsl(0 85% 70% / 0.4)', animationDelay: '1.4s' }} 
      />
      <div 
        className="absolute top-[75%] left-[4%] w-3 h-10 rounded-t-full animate-float -rotate-12" 
        style={{ backgroundColor: 'hsl(199 89% 70% / 0.4)', animationDelay: '0.9s' }} 
      />

      {/* Awan kecil */}
      <svg 
        className="absolute top-[10%] left-[15%] w-12 h-8 animate-float" 
        style={{ color: 'hsl(199 89% 90% / 0.5)', animationDelay: '2.5s' }} 
        viewBox="0 0 24 16" 
        fill="currentColor"
      >
        <ellipse cx="8" cy="10" rx="6" ry="5" />
        <ellipse cx="14" cy="8" rx="5" ry="4" />
        <ellipse cx="18" cy="11" rx="4" ry="4" />
      </svg>

      {/* Kupu-kupu */}
      <svg 
        className="absolute top-[50%] right-[2%] w-8 h-8 animate-bounce-gentle" 
        style={{ color: 'hsl(280 70% 75% / 0.5)', animationDelay: '1.7s' }} 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <ellipse cx="7" cy="9" rx="5" ry="4" />
        <ellipse cx="17" cy="9" rx="5" ry="4" />
        <ellipse cx="7" cy="15" rx="4" ry="3" />
        <ellipse cx="17" cy="15" rx="4" ry="3" />
        <rect x="11" y="6" width="2" height="14" rx="1" />
      </svg>
    </div>
  );
};

export default BackgroundDecorations;
