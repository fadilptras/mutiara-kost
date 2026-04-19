import { UNITS, WHATSAPP_NUMBER } from '../data'
import type { Unit, UnitFeature } from '../types'

export function renderUnits(): string {
  const kamarButtons = ['1', '2', '3']
    .map(
      (i) => /* html */ `
      <button
        @click="activeUnit = 'kamar${i}'"
        class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
        :class="activeUnit === 'kamar${i}' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-500 hover:text-sky-600'"
      >Kamar 0${i}</button>`
    )
    .join('')

  const kontrakanButtons = ['1', '2']
    .map(
      (i) => /* html */ `
      <button
        @click="activeUnit = 'kontrakan${i}'"
        class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
        :class="activeUnit === 'kontrakan${i}' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-indigo-600'"
      >Kontrakan ${i}</button>`
    )
    .join('')

  const unitPanels = UNITS.map(renderUnitPanel).join('')

  return /* html */ `
    <section class="py-16 bg-white" x-data="unitSection()">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Pilih Hunianmu</h2>
          <p class="text-slate-500">Tersedia pilihan kamar kost eksklusif dan unit kontrakan mandiri.</p>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div class="flex p-1.5 bg-slate-50 rounded-2xl shadow-sm border border-slate-200">
            ${kamarButtons}
          </div>
          <div class="hidden md:block w-px h-8 bg-slate-200"></div>
          <div class="flex p-1.5 bg-slate-50 rounded-2xl shadow-sm border border-slate-200">
            ${kontrakanButtons}
          </div>
        </div>

        <div class="bg-slate-900 rounded-[2.5rem] p-5 md:p-8 shadow-2xl border border-slate-800 flex flex-col lg:flex-row gap-8 lg:items-center relative overflow-hidden">

          <!-- Slider -->
          <div class="w-full lg:w-1/2 aspect-video bg-sky-950 rounded-3xl overflow-hidden relative border border-sky-800 shadow-inner z-10">
            <div class="absolute top-4 left-4 z-20">
              <span class="px-3 py-1 bg-sky-800 text-sky-200 text-[10px] font-bold rounded-full border border-sky-600 shadow-lg">Tersedia</span>
            </div>
            <div class="swiper unit-slider w-full h-full">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800" class="w-full h-full object-cover" alt="Unit slide 1"></div>
                <div class="swiper-slide"><img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800" class="w-full h-full object-cover" alt="Unit slide 2"></div>
              </div>
              <div class="swiper-button-next !w-8 !h-8 !after:text-[14px] bg-black/30 backdrop-blur-md rounded-full text-white"></div>
              <div class="swiper-button-prev !w-8 !h-8 !after:text-[14px] bg-black/30 backdrop-blur-md rounded-full text-white"></div>
              <div class="swiper-pagination !bottom-2"></div>
            </div>
          </div>

          <!-- Info Panel -->
          <div class="w-full lg:w-1/2 z-10 flex flex-col justify-center">
            <h3 class="text-2xl font-bold text-sky-100 uppercase mb-1" x-text="activeUnitData.label"></h3>
            <p class="text-sky-400 text-xs mb-4 flex items-center gap-2">
              <span x-text="activeUnitData.size"></span>
              <span class="w-1 h-1 rounded-full bg-sky-400"></span>
              <span x-text="activeUnitData.bathroomInfo"></span>
            </p>

            <h4 class="font-semibold text-sky-200 mb-4 text-sm border-b border-sky-800/50 pb-4 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Fasilitas Lengkap
            </h4>

            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 mb-6">
              <template x-for="feature in activeUnitData.features" :key="feature.title">
                <li class="flex items-start gap-2.5">
                  <div class="mt-0.5 w-6 h-6 rounded-md bg-sky-800/50 flex items-center justify-center text-sky-400 flex-shrink-0 border border-sky-700/50">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-sky-100 text-[13px] leading-tight mb-0.5" x-text="feature.title"></p>
                    <p class="text-[11px] text-sky-400/90 leading-snug" x-text="feature.description"></p>
                  </div>
                </li>
              </template>
            </ul>

          </div>
        </div>
      </div>
    </section>
    ${unitPanels}
  `
}

// Render hidden data panels (used by Alpine to populate)
function renderUnitPanel(_unit: Unit): string {
  return ''
}

// Exported function for Alpine component registration
export function getUnitSectionData(units: Unit[]) {
  return {
    units,
    activeUnit: 'kamar1' as string,
    get activeUnitData(): Unit {
      return this.units.find((u: Unit) => u.id === this.activeUnit) ?? this.units[0]
    },
  }
}

// Generate feature list HTML (used for static fallback only)
export function renderFeatureItem(feature: UnitFeature): string {
  return /* html */ `
    <li class="flex items-start gap-2.5">
      <div class="mt-0.5 w-6 h-6 rounded-md bg-sky-800/50 flex items-center justify-center text-sky-400 flex-shrink-0 border border-sky-700/50">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div>
        <p class="font-semibold text-sky-100 text-[13px] leading-tight mb-0.5">${feature.title}</p>
        <p class="text-[11px] text-sky-400/90 leading-snug">${feature.description}</p>
      </div>
    </li>`
}
