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
  badge?: string       // label kategori, misal "Kamar", "Dapur", dll
  caption?: string     // keterangan foto
}

// ─── KAMAR 01 ────────────────────────────────────────────────────────────────
export const KAMAR_1_IMAGES: UnitImage[] = [
  {
    src: './images/kamar1/foto1.jpg',
    alt: 'Kamar 01 - tampak keseluruhan',
  },
  {
    src: './images/kamar1/foto2.jpg',
    alt: 'Kamar 01 - kasur dan lemari',
  },
  // Tambahkan foto Kamar 01 di sini ↓
]

// ─── KAMAR 02 ────────────────────────────────────────────────────────────────
export const KAMAR_2_IMAGES: UnitImage[] = [
  {
    src: './images/kamar2/1.jpeg',
    alt: 'Kamar 02 - tampak depan',
  },
  {
    src: './images/kamar2/2.jpeg',
    alt: 'Kamar 02 - area dalam',
  },
  {
    src: './images/kamar2/3.jpeg',
    alt: 'Kamar 02 - kamar mandi dalam',
  },
  // Tambahkan foto Kamar 02 di sini ↓
]

// ─── KAMAR 03 ────────────────────────────────────────────────────────────────
export const KAMAR_3_IMAGES: UnitImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800',
    alt: 'Kamar 03 - tampak keseluruhan',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800',
    alt: 'Kamar 03 - kamar mandi dalam',
  },
  // Tambahkan foto Kamar 03 di sini ↓
]

// ─── KONTRAKAN 01 ─────────────────────────────────────────────────────────────
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
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600',
    alt: 'Kamar kost tampak dalam',
    badge: 'Kamar',
    caption: 'Kamar luas dengan pencahayaan alami yang baik.',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600',
    alt: 'Area tidur',
    badge: 'Kamar',
    caption: 'Kasur nyaman dengan bantal berkualitas.',
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600',
    alt: 'Meja belajar',
    badge: 'Fasilitas',
    caption: 'Meja belajar ergonomis untuk produktivitas.',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600',
    alt: 'Kamar mandi dalam',
    badge: 'Kamar Mandi',
    caption: 'Kamar mandi bersih dengan shower dan kloset duduk.',
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600',
    alt: 'Lemari pakaian',
    badge: 'Fasilitas',
    caption: 'Lemari besar dengan kapasitas penyimpanan luas.',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600',
    alt: 'AC unit',
    badge: 'Fasilitas',
    caption: 'Full AC untuk kenyamanan suhu ruangan.',
  },
  // Tambahkan foto untuk Slide 1 di sini ↓
]

export const GALLERY_SLIDE_2: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600',
    alt: 'Area dapur bersama',
    badge: 'Area Umum',
    caption: 'Dapur bersama lengkap dengan kompor dan kulkas.',
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600',
    alt: 'Area parkir',
    badge: 'Parkir',
    caption: 'Parkir motor luas dan aman 24 jam.',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600',
    alt: 'Area jemuran',
    badge: 'Area Umum',
    caption: 'Area jemur bersih dengan sirkulasi udara baik.',
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600',
    alt: 'Tampak depan kost',
    badge: 'Eksterior',
    caption: 'Tampak depan Mutiara Kost yang bersih dan modern.',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600',
    alt: 'Lorong kost',
    badge: 'Area Umum',
    caption: 'Lorong terawat dan selalu bersih.',
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600',
    alt: 'Area wastafel',
    badge: 'Fasilitas',
    caption: 'Wastafel cuci piring tersedia untuk semua penghuni.',
  },
  // Tambahkan foto untuk Slide 2 di sini ↓
]

// Daftarkan semua slide gallery di sini
// Untuk tambah slide baru: buat array GALLERY_SLIDE_3 lalu tambahkan di sini
export const GALLERY_SLIDES: GalleryImage[][] = [
  GALLERY_SLIDE_1,
  GALLERY_SLIDE_2,
]