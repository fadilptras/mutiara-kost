import { FAQS } from '../data'

export function renderFAQ(): string {
  const items = FAQS.map(
    (faq) => /* html */ `
    <div
      x-data="{ expanded: false }"
      class="bg-white rounded-2xl border border-sky-100/50 shadow-sm overflow-hidden transition-all duration-300 hover:border-sky-300 h-fit"
    >
      <button
        @click="expanded = !expanded"
        class="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 focus:outline-none"
      >
        <span class="pr-2">${faq.question}</span>
        <svg
          class="w-5 h-5 text-sky-500 transition-transform duration-300 flex-shrink-0"
          :class="expanded ? 'rotate-180' : ''"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div x-show="expanded" x-collapse class="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
        ${faq.answer}
      </div>
    </div>`
  ).join('')

  return /* html */ `
    <section class="py-20 bg-sky-50 border-t border-sky-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Ada Pertanyaan?</h2>
          <p class="text-lg text-slate-500 max-w-2xl mx-auto">
            Hal-hal yang paling sering ditanyakan calon penghuni Mutiara Kost sebelum mereka memutuskan untuk pindah.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6 gap-y-2 lg:gap-y-3">
          ${items}
        </div>
      </div>
    </section>
  `
}
