import Alpine from 'alpinejs'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { renderNavbar } from './components/Navbar'
import { renderHero } from './components/Hero'
import { renderUnits } from './components/Units'
import { renderGallery } from './components/Gallery'
import { renderPricing } from './components/Pricing'
import { renderFAQ } from './components/FAQ'
import { renderLocation } from './components/Location'
import { renderFooter } from './components/Footer'
import { UNITS } from './data'
import type { Unit } from './types'

// ─── Render HTML structure ────────────────────────────────────────────────────

const appEl = document.getElementById('app')
if (!appEl) throw new Error('Missing #app element')

appEl.innerHTML = [
  renderNavbar(),
  renderHero(),
  renderUnits(),
  renderGallery(),
  renderPricing(),
  renderFAQ(),
  renderLocation(),
  renderFooter(),
].join('\n')

// ─── Alpine.js setup ──────────────────────────────────────────────────────────

// Register typed Alpine component for the Units section
Alpine.data('unitSection', () => ({
  units: UNITS as Unit[],
  activeUnit: 'kamar1' as string,
  get activeUnitData(): Unit {
    return (
      (this.units as Unit[]).find((u: Unit) => u.id === this.activeUnit) ??
      (this.units as Unit[])[0]
    )
  },
}))

// @ts-ignore - Alpine is globally accessible via window
window.Alpine = Alpine
Alpine.start()

// ─── Swiper initialization ────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.unit-slider', {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})
