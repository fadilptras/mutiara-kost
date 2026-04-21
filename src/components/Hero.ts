import { WHATSAPP_NUMBER } from '../data'

export function renderHero(): string {
  return /* html */ `
    <section 
      x-data="{
        scrollToUnits() {
          const target = document.getElementById('units');
          if (!target) return;
          
          const targetPos = target.getBoundingClientRect().top + window.scrollY;
          const startPos = window.scrollY;
          const distance = targetPos - startPos;
          
          // DURASI SCROLL: 1200 milidetik (1.2 detik)
          // Semakin besar angkanya, semakin lambat & santai scroll-nya
          const duration = 1200; 
          let start = null;
          
          const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Efek Easing (easeInOutCubic) agar gerakan mulus di awal dan akhir
            const ease = progress < 0.5 
              ? 4 * progress * progress * progress 
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;
              
            window.scrollTo(0, startPos + distance * ease);
            
            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          };
          
          requestAnimationFrame(animation);
        }
      }"
      class="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      
      <style>
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-kenburns {
          animation: kenburns 20s ease-in-out infinite alternate;
        }
      </style>

      <div class="absolute inset-0 z-0">
        <img
          src="/images/kamar1/1.jpeg"
          alt="Mutiara Kost"
          class="w-full h-full object-cover animate-kenburns origin-center"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/90"></div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide mb-6 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Kamar Kosong Tersedia
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.15] mb-6 drop-shadow-lg">
          Hunian nyaman, <br class="hidden sm:block" />
          <span class="text-sky-300">aman dan tentram.</span>
        </h1>

        <p class="text-base sm:text-lg text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow">
          Temukan pengalaman ngekost terbaik dengan fasilitas modern,
          keamanan 24 jam, dan lingkungan tenang yang mendukung produktivitasmu.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a 
            href="#units"
            @click.prevent="scrollToUnits()"
            class="w-full sm:w-auto px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold transition-all duration-300 shadow-lg transform hover:-translate-y-1 cursor-pointer"
          >
            Lihat Tipe Kamar
          </a>
          <a 
            href="https://wa.me/${WHATSAPP_NUMBER}"
            target="_blank" 
            class="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1"
          >
            Hubungi Sekarang
          </a>
        </div>
        
      </div>
    </section>
  `
}