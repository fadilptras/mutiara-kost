import { UNITS, WHATSAPP_NUMBER } from '../data'
import { UNIT_IMAGES } from '../data/image'
import type { Unit, UnitFeature } from '../types'

export function renderUnits(): string {
  // Update: Menggunakan fungsi selectUnit agar logic perpindahan terpusat
  const kamarButtons = ['1', '2', '3']
    .map(
      (i) => /* html */ `
      <button
        @click="selectUnit('kamar${i}')"
        class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
        :class="activeUnit === 'kamar${i}' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-500 hover:text-sky-600'"
      >Kamar 0${i}</button>`
    )
    .join('')

  const kontrakanButtons = ['1', '2']
    .map(
      (i) => /* html */ `
      <button
        @click="selectUnit('kontrakan${i}')"
        class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
        :class="activeUnit === 'kontrakan${i}' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-indigo-600'"
      >Kontrakan ${i}</button>`
    )
    .join('')

  const unitPanels = UNITS.map(renderUnitPanel).join('')

  return /* html */ `
    <section id="units" class="py-20 bg-white relative overflow-hidden" x-data="unitSection()">
      <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Pilih Hunianmu</h2>
          <p class="text-slate-500">Pilihan unit terbaik untuk kenyamanan istirahatmu.</p>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div class="flex p-1.5 bg-slate-50/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200">
            ${kamarButtons}
          </div>
          <div class="hidden md:block w-px h-8 bg-slate-200"></div>
          <div class="flex p-1.5 bg-slate-50/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200">
            ${kontrakanButtons}
          </div>
        </div>

        <div class="bg-slate-900 rounded-[2.5rem] p-5 md:p-8 shadow-2xl border border-slate-800 flex flex-col lg:flex-row gap-8 lg:items-center relative overflow-hidden">
          
          <div class="w-full lg:w-1/2 aspect-video bg-sky-950 rounded-3xl overflow-hidden relative border border-sky-800 shadow-inner z-10">
            <div x-ref="unitSlider" class="swiper unit-slider w-full h-full">
              <div class="swiper-wrapper">
                <template x-for="(img, index) in activeUnitImages" :key="index">
                  <div class="swiper-slide">
                    <img @click="openImageModal(index)" :src="img.src" class="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity duration-300" :alt="img.alt">
                  </div>
                </template>
              </div>
              <div class="swiper-button-next !w-10 !h-10 !after:text-[16px] bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-sky-600 transition-colors"></div>
              <div class="swiper-button-prev !w-10 !h-10 !after:text-[16px] bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-sky-600 transition-colors"></div>
              <div class="swiper-pagination !bottom-4"></div>
            </div>
          </div>

          <div class="w-full lg:w-1/2 z-10 flex flex-col justify-center px-2">
            <div class="flex items-center justify-between gap-4 mb-5">
              <div>
                <h3 class="text-2xl font-bold text-white capitalize tracking-tight" x-text="activeUnitData.label"></h3>
                <p class="text-sky-400 text-[13px] mt-1 flex items-center gap-2 font-medium">
                  <span x-text="activeUnitData.size"></span>
                  <span class="w-1 h-1 rounded-full bg-sky-600"></span>
                  <span x-text="activeUnitData.bathroomInfo"></span>
                </p>
              </div>
            </div>

            <div class="border-b border-sky-800/50 pb-3 mb-4">
              <h4 class="font-bold text-sky-200 text-[13px] flex items-center gap-2">
                <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                Fasilitas Kamar
              </h4>
            </div>

            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
              <template x-for="feature in activeUnitData.features" :key="feature.title">
                <li class="flex items-start gap-3 group">
                  <div class="mt-0.5 w-7 h-7 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 flex-shrink-0 border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-white text-[13px] leading-tight mb-0.5" x-text="feature.title"></p>
                    <p class="text-[11px] text-sky-400/80 leading-snug" x-text="feature.description"></p>
                  </div>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>

      <div x-show="isImageModalOpen" 
           style="display: none;"
           class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl"
           x-transition:enter="transition ease-out duration-300"
           x-transition:enter-start="opacity-0 scale-95"
           x-transition:enter-end="opacity-100 scale-100"
           x-transition:leave="transition ease-in duration-200"
           x-transition:leave-start="opacity-100 scale-100"
           x-transition:leave-end="opacity-0 scale-95"
           @keydown.window.escape="closeImageModal()"
           @keydown.window.left="prevImage()"
           @keydown.window.right="nextImage()">
        
        <button @click="closeImageModal()" class="absolute top-6 right-6 z-[110] text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div class="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none">
          <button @click="prevImage()" class="pointer-events-auto p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button @click="nextImage()" class="pointer-events-auto p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        <div class="relative max-w-5xl w-full flex flex-col items-center">
          <img :src="activeUnitImages[activeImageIndex]?.src" 
               class="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10" 
               :alt="activeUnitImages[activeImageIndex]?.alt">
          
          <div class="mt-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/70 text-xs font-medium">
            <span x-text="activeImageIndex + 1"></span> / <span x-text="activeUnitImages.length"></span>
          </div>
        </div>
      </div>
    </section>
    ${unitPanels}
  `
}

function renderUnitPanel(_unit: Unit): string { return '' }

export function getUnitSectionData(units: Unit[]) {
  return {
    units,
    activeUnit: 'kamar1' as string,
    isImageModalOpen: false,
    activeImageIndex: 0,

    // Fungsi untuk ganti unit & reset slider
    selectUnit(id: string) {
      this.activeUnit = id;
      this.$nextTick(() => {
        const swiperEl = this.$refs.unitSlider;
        if (swiperEl && swiperEl.swiper) {
          swiperEl.swiper.update();
          swiperEl.swiper.slideTo(0); // Memastikan selalu mulai dari gambar ke-1
        }
      });
    },

    openImageModal(index: number) {
      this.activeImageIndex = index;
      this.isImageModalOpen = true;
      document.body.style.overflow = 'hidden';
    },

    closeImageModal() {
      this.isImageModalOpen = false;
      document.body.style.overflow = '';
    },

    nextImage() {
      this.activeImageIndex = (this.activeImageIndex + 1) % this.activeUnitImages.length;
    },

    prevImage() {
      this.activeImageIndex = (this.activeImageIndex - 1 + this.activeUnitImages.length) % this.activeUnitImages.length;
    },

    get activeUnitData(): Unit {
      return this.units.find((u: Unit) => u.id === this.activeUnit) ?? this.units[0]
    },

    get activeUnitImages() {
      return UNIT_IMAGES[this.activeUnit] || []
    }
  }
}