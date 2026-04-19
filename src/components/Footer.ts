import { WHATSAPP_NUMBER } from '../data'

export function renderFooter(): string {
  const quickLinks = ['Beranda', 'Fasilitas', 'Galeri Foto', 'Lokasi Kami'].map(
    (label) => /* html */ `
    <li><a href="#" class="text-slate-400 hover:text-sky-400 transition-colors">${label}</a></li>`
  ).join('')

  return /* html */ `
    <footer class="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          <!-- Brand -->
          <div class="md:col-span-5">
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span class="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                  </path>
                </svg>
              </span>
              Mutiara Kost
            </h2>
            <p class="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Pilihan hunian kost modern dengan fasilitas lengkap, lingkungan aman, dan akses mudah. Cocok untuk mahasiswa dan pekerja.
            </p>
          </div>

          <!-- Quick links -->
          <div class="md:col-span-3">
            <h3 class="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Tautan Cepat</h3>
            <ul class="space-y-3">${quickLinks}</ul>
          </div>

          <!-- Contact -->
          <div class="md:col-span-4">
            <h3 class="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Hubungi Kami</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                  </path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-slate-400">
                  Jl. Pajajaran indah V Gg Sawah No. 11 , Kelurahan Baranansiang Indah, Bogor Timur, Kota Bogor, Jawa Barat 16143
                </span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                  </path>
                </svg>
                <a href="https://wa.me/${WHATSAPP_NUMBER}" class="text-slate-400 hover:text-emerald-400 transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm text-center md:text-left">
            &copy; <span x-data x-text="new Date().getFullYear()"></span> Mutiara Kost. Hak Cipta Dilindungi.
          </p>
          <div class="flex items-center gap-4">
            <a href="#" class="text-slate-500 hover:text-white transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `
}
