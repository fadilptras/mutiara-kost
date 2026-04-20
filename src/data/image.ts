/**
 * ============================================================
 *  MANAJEMEN GAMBAR — Mutiara Kost
 * ============================================================
 *
 *  Semua foto dikelola di satu tempat ini.
 *  Cara pakai:
 *    - Ganti URL dengan path foto lokal, misal: '/images/kamar1/foto1.jpg'
 *    - Atau tetap pakai URL eksternal
 *    - Tambah/kurangi foto tinggal edit array di bawah
 * ============================================================
 */

export interface UnitImage {
  src: string
  alt: string
}

export interface GalleryImage {
  src: string
  alt: string
  badge?: string       
  caption?: string     
}

export const KAMAR_1_IMAGES: UnitImage[] = [
  {
    src: '/images/kamar1/1.jpeg',
    alt: 'Kamar 02 - tampak depan',
  },
  {
    src: '/images/kamar1/2.jpeg',
    alt: 'Kamar 02 - area dalam',
  },
  {
    src: '/images/kamar1/3.jpeg',
    alt: 'Kamar 02 - kamar',
  },
  {
    src: '/images/kamar1/4.jpeg',
    alt: 'Kamar 02 - kamar',
  },
  {
    src: '/images/kamar1/5.jpeg',
    alt: 'Kamar 02 - kamar',
  },
  {
    src: '/images/kamar1/6.jpeg',
    alt: 'Kamar 02 - kamar',
  },
  {
    src: '/images/kamar1/7.jpeg',
    alt: 'Kamar 02 - kamar',
  },
  {
    src: '/images/kamar1/8.jpeg',
    alt: 'Kamar 02 - kamar',
  }
]

export const KAMAR_2_IMAGES: UnitImage[] = [
  {
    src: '/images/kamar2/1.jpeg',
    alt: 'Kamar 02 - tampak depan',
  },
  {
    src: '/images/kamar2/2.jpeg',
    alt: 'Kamar 02 - area dalam',
  },
  {
    src: '/images/kamar2/3.jpeg',
    alt: 'Kamar 02 - kamar',
  },
  {
    src: '/images/kamar2/4.jpeg',
    alt: 'Kamar 02 - kamar',
  },
  {
    src: '/images/kamar2/5.jpeg',
    alt: 'Kamar 02 - kamar',
  },
  {
    src: '/images/kamar2/6.jpeg',
    alt: 'Kamar 02 - kamar',
  },
  {
    src: '/images/kamar2/7.jpeg',
    alt: 'Kamar 02 - kamar',
  },
  {
    src: '/images/kamar2/8.jpeg',
    alt: 'Kamar 02 - kamar',
  }  
]

export const KAMAR_3_IMAGES: UnitImage[] = [
  {
    src: '/images/kamar3/1.jpeg',
    alt: 'Kamar 03 - tampak depan',
  },
  {
    src: '/images/kamar3/2.jpeg',
    alt: 'Kamar 03 - area dalam',
  },
  {
    src: '/images/kamar3/3.jpeg',
    alt: 'Kamar 03 - kamar',
  },
  {
    src: '/images/kamar3/4.jpeg',
    alt: 'Kamar 03 - kamar',
  },
  {
    src: '/images/kamar3/5.jpeg',
    alt: 'Kamar 03 - kamar',
  },
  {
    src: '/images/kamar3/6.jpeg',
    alt: 'Kamar 03 - kamar',
  },
  {
    src: '/images/kamar3/7.jpeg',
    alt: 'Kamar 03 - kamar',
  },
  {
    src: '/images/kamar3/8.jpeg',
    alt: 'Kamar 03 - kamar',
  }  
]

export const KONTRAKAN_1_IMAGES: UnitImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800',
    alt: 'Kontrakan 01 - tampak depan',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800',
    alt: 'Kontrakan 01 - ruang dalam',
  },
  // Tambahkan foto Kontrakan 01 di sini ↓
]

// ─── KONTRAKAN 02 ─────────────────────────────────────────────────────────────
export const KONTRAKAN_2_IMAGES: UnitImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800',
    alt: 'Kontrakan 02 - tampak depan',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800',
    alt: 'Kontrakan 02 - area halaman',
  },
  // Tambahkan foto Kontrakan 02 di sini ↓
]

// ─── MAP: id unit → array foto ────────────────────────────────────────────────
// Dipakai oleh komponen Units.ts untuk mencari foto berdasarkan activeUnit
export const UNIT_IMAGES: Record<string, UnitImage[]> = {
  kamar1:      KAMAR_1_IMAGES,
  kamar2:      KAMAR_2_IMAGES,
  kamar3:      KAMAR_3_IMAGES,
  kontrakan1:  KONTRAKAN_1_IMAGES,
  kontrakan2:  KONTRAKAN_2_IMAGES,
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────
// Dibagi per slide (1 slide = 6 foto di grid)
// Tambah slide baru? Tinggal tambah array baru dan masukkan ke GALLERY_SLIDES

export const GALLERY_SLIDE_1: GalleryImage[] = [
  {
    src: 'images/gallery/1.jpeg', // Ganti path gambarnya nanti
    alt: 'Akses dari jalan',
    badge: 'Akses',
    caption: 'Akses gang dan jalan masuk menuju kost yang mudah dijangkau dan aman.',
  },
  {
    src: 'images/gallery/2.jpeg',
    alt: 'Tampak depan kost',
    badge: 'Eksterior',
    caption: 'Tampak depan Mutiara Kost yang memiliki desain rapi dan lingkungan bersih.',
  },
  {
    src: 'images/gallery/3.jpeg', 
    alt: 'Area garasi parkir',
    badge: 'Parkir',
    caption: 'Area garasi yang luas dan aman untuk memarkirkan kendaraan penghuni.',
  },
  {
    src: 'images/gallery/4.jpeg',
    alt: 'Area cuci kaki dan wudhu',
    badge: 'Fasilitas Umum',
    caption: 'Area khusus untuk cuci-cuci, cuci kaki, atau wudhu yang airnya mengalir lancar.',
  },
  {
    src: 'images/gallery/5.jpeg',
    alt: 'Akses tangga',
    badge: 'Area Umum',
    caption: 'Akses tangga penghubung antar lantai yang kokoh dengan pencahayaan baik.',
  },
  {
    src: 'images/gallery/6.jpeg',
    alt: 'Area ruang tamu',
    badge: 'Ruang Santai',
    caption: 'Ruang tamu yang nyaman untuk bersantai atau sekadar menerima tamu kunjungan.',
  }
]

export const GALLERY_SLIDE_2: GalleryImage[] = [
  {
    src: 'images/gallery/7.jpeg',
    alt: 'Lubang angin sirkulasi',
    badge: 'Sirkulasi',
    caption: 'Lubang angin dan ventilasi memastikan sirkulasi udara di dalam kost tetap segar dan sehat.',
  },
  {
    src: 'images/gallery/8.jpeg',
    alt: 'Area jemuran',
    badge: 'Fasilitas Umum',
    caption: 'Area jemuran khusus dengan sirkulasi udara bagus agar pakaian cepat kering.',
  },
  {
    src: 'images/gallery/9.jpeg',
    alt: 'Foto 3 Kamar',
    badge: 'Kamar',
    caption: 'Tampilan variasi 3 tipe kamar kami yang nyaman dan siap huni.',
  },
  {
    src: 'images/gallery/10.jpeg',
    alt: 'Area lorong kamar 1',
    badge: 'Area Umum',
    caption: 'Lorong area kamar pertama yang selalu dijaga kebersihannya setiap hari.',
  },
  {
    src: 'images/gallery/11.jpeg',
    alt: 'Area lorong kamar 2',
    badge: 'Area Umum',
    caption: 'Akses lorong kedua yang tenang dengan pencahayaan alami yang cukup.',
  },
  {
    src: 'images/gallery/12.jpeg',
    alt: 'Peralatan dan kelengkapan',
    badge: 'Fasilitas',
    caption: 'Ketersediaan berbagai peralatan bersama untuk menunjang kemudahan aktivitas sehari-hari.',
  }
]

// Daftarkan semua slide gallery di sini
export const GALLERY_SLIDES: GalleryImage[][] = [
  GALLERY_SLIDE_1,
  GALLERY_SLIDE_2,
]
