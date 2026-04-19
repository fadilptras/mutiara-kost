import { WHATSAPP_NUMBER, PRICING_FEATURES } from '../data'

export function renderPricing(): string {
  const featureItems = PRICING_FEATURES.map(
    (f) => /* html */ `
    <li class="flex items-start gap-3">
      <span class="mt-1 w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </span>
      <div>
        <strong class="text-slate-800 block">${f.title}</strong>
        <span class="text-slate-500 text-sm">${f.description}</span>
      </div>
    </li>`
  ).join('')

  return /* html */ `
    <section class="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          <!-- Price Card -->
          <div class="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden w-full max-w-md mx-auto lg:mx-0">
            <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-sky-500/20 to-transparent pointer-events-none"></div>

            <h3 class="text-2xl font-bold text-white mb-2 text-center">Kamar Kost</h3>
            <p class="text-slate-400 text-sm text-center mb-8">Fasilitas lengkap, siap huni.</p>

            <div class="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
              <span class="text-sky-300 font-medium tracking-widest uppercase text-xs mb-2">Investasi Kenyamananmu</span>
              <div class="flex items-baseline gap-2 text-white">
                <span class="text-3xl font-bold">Rp 1.200.000</span>
                <span class="text-slate-400 font-medium text-sm">/ bulan</span>
              </div>
            </div>

            <div class="flex justify-center">
              <a
                href="https://wa.me/${WHATSAPP_NUMBER}"
                target="_blank"
                class="w-full group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base font-bold text-slate-900 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-xl hover:from-emerald-300 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_15px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] hover:-translate-y-1"
              >
                <svg class="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Tanya Ketersediaan
              </a>
            </div>
          </div>

          <!-- Features -->
          <div class="lg:col-span-7 lg:pl-6">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Langkah pertamamu menuju <span class="text-sky-600">ketenangan.</span>
            </h2>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              Kami tahu pencarian tempat tinggal bisa melelahkan. Di Mutiara Kost, kami menawarkan
              lebih dari sekadar kamar—kami menawarkan ruang personal di mana kamu bisa fokus,
              beristirahat lelap, dan merasa benar-benar di rumah.
            </p>
            <ul class="space-y-4">
              ${featureItems}
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
}
