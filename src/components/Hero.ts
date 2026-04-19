import { YOUTUBE_EMBED_SRC } from '../data'

export function renderHero(): string {
  return /* html */ `
    <section
      x-data="{ isPlaying: false }"
      class="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden"
    >
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 -left-24 w-72 h-72 bg-white/60 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          class="flex flex-col lg:flex-row items-center w-full transition-all duration-[800ms] ease-in-out"
          :class="isPlaying ? 'lg:gap-0' : 'gap-12 lg:gap-16'"
        >
          <!-- Left: Text content -->
          <div
            class="transition-all duration-[800ms] ease-in-out overflow-hidden flex-shrink-0"
            :class="isPlaying ? 'w-full lg:w-0 opacity-0 scale-95 pointer-events-none hidden lg:block' : 'w-full lg:w-1/2 opacity-100 scale-100'"
          >
            <div class="w-full lg:w-[500px] xl:w-[560px] text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-100 text-sky-600 text-sm font-semibold tracking-wide mb-6 shadow-sm">
                <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                Kamar Kosong Tersedia
              </div>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-[1.15] mb-6 whitespace-nowrap">
                Hunian nyaman, <br class="hidden sm:block" />
                <span class="text-sky-600">aman dan tentram.</span>
              </h1>
              <p class="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Temukan pengalaman ngekost terbaik dengan fasilitas modern,
                keamanan 24 jam, dan lingkungan tenang yang mendukung produktivitasmu.
              </p>
            </div>
          </div>

          <!-- Right: Video player -->
          <div
            class="transition-all duration-[800ms] ease-in-out w-full origin-right relative z-20"
            :class="isPlaying ? 'lg:w-full max-w-5xl mx-auto' : 'lg:w-1/2 max-w-lg mx-auto lg:max-w-none'"
          >
            <div
              class="absolute -inset-2 bg-gradient-to-r from-sky-300 to-indigo-300 rounded-[2rem] blur-lg transition-opacity duration-700"
              :class="isPlaying ? 'opacity-80' : 'opacity-40'"
            ></div>

            <div
              class="relative bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 aspect-video group transition-transform duration-500"
              :class="isPlaying ? 'cursor-default scale-100' : 'cursor-pointer hover:scale-[1.02]'"
              @click="if(!isPlaying) isPlaying = true"
            >
              <!-- Thumbnail overlay -->
              <div
                class="absolute inset-0 transition-opacity duration-500 z-10"
                :class="isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'"
              >
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Video Ruangan Kost"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-slate-900/20 transition-colors duration-300 group-hover:bg-slate-900/10"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-sky-600 transition-transform duration-300 group-hover:scale-110">
                    <svg class="w-8 h-8 sm:w-10 sm:h-10 ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div class="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  Lihat Kamar (1:20)
                </div>
              </div>

              <!-- YouTube embed (shown when playing) -->
              <template x-if="isPlaying">
                <div class="absolute inset-0 z-20 bg-black animate-[fadeIn_0.5s_ease-in-out]">
                  <button
                    @click.stop="isPlaying = false"
                    class="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 rounded-full p-2 text-white transition-all hover:rotate-90"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  <iframe
                    class="w-full h-full"
                    src="${YOUTUBE_EMBED_SRC}"
                    title="Video Kost"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowfullscreen
                  ></iframe>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
