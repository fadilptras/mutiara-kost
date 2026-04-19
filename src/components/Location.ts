import { MAPS_EMBED_SRC, LOCATION_POINTS } from '../data'

export function renderLocation(): string {
  const locationCards = LOCATION_POINTS.map(
    (point) => /* html */ `
    <div class="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div class="w-10 h-10 rounded-xl ${point.colorClass} flex items-center justify-center ${point.iconColor} flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          ${point.svgPath
            .split(' M')
            .map((d, i) => `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${i === 0 ? d : 'M' + d}"></path>`)
            .join('')}
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 text-sm leading-tight">${point.title}</h4>
        <p class="text-xs text-slate-500 mt-1">${point.subtitle}</p>
      </div>
    </div>`
  ).join('')

  return /* html */ `
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          <!-- Map -->
          <div class="lg:col-span-6 order-2 lg:order-1 relative">
            <div class="absolute -top-6 -left-6 w-32 h-32 bg-sky-100 rounded-2xl -z-10"></div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-50 rounded-2xl -z-10"></div>
            <div class="bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[300px] lg:h-[400px] w-full relative">
              <iframe
                src="${MAPS_EMBED_SRC}"
                width="600"
                height="450"
                style="border:0; width:100%; height:100%;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Lokasi Mutiara Kost"
              ></iframe>
            </div>
          </div>

          <!-- Info -->
          <div class="lg:col-span-6 order-1 lg:order-2">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Selangkah ke mana-mana. <br />
              <span class="text-sky-600">Hemat waktu & ongkos.</span>
            </h2>
            <p class="text-slate-600 mb-8 leading-relaxed">
              Terletak di area yang hidup dan mudah diakses. Semua kebutuhan harianmu bisa dijangkau dalam hitungan menit dari depan pintu kos.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-4 gap-y-2">
              ${locationCards}
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}
