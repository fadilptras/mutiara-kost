import { WHATSAPP_NUMBER, MAPS_URL } from '../data'

export function renderNavbar(): string {
  return /* html */ `
    <nav
      x-data="{ open: false }"
      class="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/50 w-full transition-all duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20 w-full">
        <div class="flex-shrink-0 flex items-center h-full py-1">
          <img
            class="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            src="./public/mutiara kost logo.png"
            alt="Mutiara Kost Logo"
          />
        </div>

        <div class="hidden md:block flex-grow h-full"></div>

        <div class="hidden md:flex items-center gap-3 h-full">
          <a
            href="https://wa.me/${WHATSAPP_NUMBER}"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 ease-in-out rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700"
          >
            ${whatsappIcon('w-5 h-5')}
            <span>Hubungi Kami</span>
          </a>

          <a
            href="${MAPS_URL}"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold transition-colors duration-300 ease-in-out rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-100/50"
          >
            ${locationIcon('w-5 h-5')}
            <span>Lokasi</span>
          </a>
        </div>

        <div class="md:hidden flex items-center">
          <button
            @click="open = !open"
            class="inline-flex items-center justify-center p-2 rounded-full text-slate-600 hover:text-slate-900 focus:outline-none bg-white/50 hover:bg-white transition-colors duration-200"
          >
            <svg class="h-5 w-5" :class="{'hidden': open, 'block': !open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg class="h-5 w-5" :class="{'block': open, 'hidden': !open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        x-show="open"
        x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 -translate-y-2"
        x-transition:enter-end="opacity-100 translate-y-0"
        class="md:hidden border-t border-sky-100 bg-white/95 backdrop-blur-xl"
      >
        <div class="flex p-4 gap-3 max-w-7xl mx-auto">
          <a
            href="https://wa.me/${WHATSAPP_NUMBER}"
            class="flex-1 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white rounded-xl py-3 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            ${whatsappIcon('w-5 h-5')}
            <span class="text-sm font-semibold tracking-wide">WA</span>
          </a>
          <a
            href="${MAPS_URL}"
            class="flex-1 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-xl py-3 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            ${locationIcon('w-5 h-5')}
            <span class="text-sm font-semibold tracking-wide">Maps</span>
          </a>
        </div>
      </div>
    </nav>
  `
}

function whatsappIcon(cls: string): string {
  return /* html */ `
    <svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
      </path>
    </svg>`
}

function locationIcon(cls: string): string {
  return /* html */ `
    <svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z">
      </path>
    </svg>`
}
