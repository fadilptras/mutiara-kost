import { GALLERY_SLIDE_1_IMAGES, GALLERY_SLIDE_2_IMAGES } from '../data'

export function renderGallery(): string {
  const slide1 = renderSlide(GALLERY_SLIDE_1_IMAGES, 'Fasilitas Utama', 1)
  const slide2 = renderSlide(GALLERY_SLIDE_2_IMAGES, 'Area Kost', 7)

  return /* html */ `
    <section
      class="py-16 lg:py-24 bg-sky-50 overflow-hidden"
      x-data="{ activeSlide: 0, slideCount: 2 }"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Jelajahi Mutiara Kost</h2>
            <p class="text-slate-500">Geser untuk melihat lebih banyak fasilitas dan suasana nyaman kami.</p>
          </div>

          <div class="flex items-center gap-3">
            <button
              @click="activeSlide = activeSlide === 0 ? slideCount - 1 : activeSlide - 1"
              class="w-12 h-12 rounded-full bg-white text-slate-600 shadow-md hover:bg-sky-50 hover:text-sky-600 flex items-center justify-center transition-all duration-300"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              @click="activeSlide = activeSlide === slideCount - 1 ? 0 : activeSlide + 1"
              class="w-12 h-12 rounded-full bg-white text-slate-600 shadow-md hover:bg-sky-50 hover:text-sky-600 flex items-center justify-center transition-all duration-300"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="relative w-full overflow-hidden py-4 -my-4">
          <div class="flex transition-transform duration-700 ease-in-out" :style="\`transform: translateX(-\${activeSlide * 100}%);\`">
            ${slide1}
            ${slide2}
          </div>
        </div>

        <div class="flex justify-center mt-8 gap-2">
          <template x-for="i in slideCount" :key="i">
            <button
              @click="activeSlide = i - 1"
              class="h-2 rounded-full transition-all duration-300"
              :class="activeSlide === i - 1 ? 'w-8 bg-sky-600' : 'w-2 bg-sky-200 hover:bg-sky-400'"
            ></button>
          </template>
        </div>
      </div>
    </section>
  `
}

function renderSlide(
  images: string[],
  badge: string,
  startIndex: number
): string {
  const items = images
    .map(
      (src, idx) => /* html */ `
      <div class="group relative overflow-hidden rounded-2xl bg-white shadow-md aspect-[4/3]">
        <img src="${src}" alt="Fasilitas Mutiara Kost" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="mb-2 inline-block rounded-full bg-sky-500/90 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">${badge}</span>
          <p class="text-center text-xs sm:text-sm font-medium text-white/90">Keterangan foto ${startIndex + idx} — kenyamanan maksimal untuk penghuni.</p>
        </div>
      </div>`
    )
    .join('')

  return /* html */ `
    <div class="w-full flex-shrink-0 px-1">
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        ${items}
      </div>
    </div>`
}
