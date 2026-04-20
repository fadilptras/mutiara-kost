import Alpine from 'alpinejs'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import { renderNavbar } from './components/Navbar'
import { renderHero } from './components/Hero'
import { renderUnits, getUnitSectionData } from './components/Units'
import { renderPricing } from './components/Pricing'
import { renderGallery } from './components/Gallery'
import { renderLocation } from './components/Location'
import { renderFAQ } from './components/FAQ'
import { renderFooter } from './components/Footer'
import { UNITS } from './data'

// Setup Alpine
window.Alpine = Alpine
Alpine.data('unitSection', () => getUnitSectionData(UNITS))
Alpine.start()

// Render Page Content
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  ${renderNavbar()}
  <main>
    ${renderHero()}
    ${renderUnits()}
    ${renderPricing()}
    ${renderGallery()}
    ${renderLocation()}
    ${renderFAQ()}
  </main>
  ${renderFooter()}
`

// Initialize Swiper for Units
new Swiper('.unit-slider', {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // --- TAMBAHKAN BAGIAN INI ---
    observer: true, 
    observeParents: true,
    observeSlideChildren: true
    // ----------------------------
})