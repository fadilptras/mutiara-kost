import type { Unit, FAQ, LocationPoint, PricingFeature } from '../types'

export const WHATSAPP_NUMBER = '6281804953761'
export const MAPS_URL = 'https://maps.app.goo.gl/FsyqMDN5QjKpUQJq7'
export const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.816959644849!2d106.81569506955438!3d-6.613607299586276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e2be97360f%3A0x9363c01f7d9f53e3!2sMutiara%20Kost%20Exclusive!5e0!3m2!1sid!2sid!4v1775919640198!5m2!1sid!2sid'
export const YOUTUBE_EMBED_SRC =
  'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=0'

export const UNITS: Unit[] = [
  {
    id: 'kamar1',
    label: 'Kamar 01',
    type: 'kamar',
    size: 'Luas Kamar: 7.05 m²',
    bathroomInfo: 'K. Mandi: 1.09 m²',
    features: [
      {
        title: 'K. Mandi Dalam',
        description: 'Shower, kloset duduk, rak sabun & gantungan baju.',
      },
      {
        title: 'Full Furnished',
        description: 'Kasur, lemari, meja belajar, wastafel dan rak sepatu.',
      },
      {
        title: 'Full AC',
        description: 'Kamar difasilitasi AC untuk kenyamanan suhu ruangan.',
      },
      {
        title: 'Free WiFi 24 Jam',
        description: 'Koneksi internet ngebut & stabil untuk nugas atau streaming.',
      },
      {
        title: 'Fasilitas & Keamanan',
        description: 'Keamanan CCTV 24 jam, parkir motor dan area jemur.',
      },
      {
        title: 'Listrik Token',
        description: 'Biaya listrik menyesuaikan pemakaian masing-masing penghuni.',
      },
    ],
  },
  {
    id: 'kamar2',
    label: 'Kamar 02',
    type: 'kamar',
    size: 'Luas Kamar: 7.05 m²',
    bathroomInfo: 'K. Mandi: 1.09 m²',
    features: [
      {
        title: 'K. Mandi Dalam',
        description: 'Shower, kloset duduk, rak sabun & gantungan baju.',
      },
      {
        title: 'Full Furnished',
        description: 'Kasur, lemari, meja belajar, wastafel dan rak sepatu.',
      },
      {
        title: 'Full AC',
        description: 'Kamar difasilitasi AC untuk kenyamanan suhu ruangan.',
      },
      {
        title: 'Free WiFi 24 Jam',
        description: 'Koneksi internet ngebut & stabil untuk nugas atau streaming.',
      },
      {
        title: 'Fasilitas & Keamanan',
        description: 'Keamanan CCTV 24 jam, parkir motor dan area jemur.',
      },
      {
        title: 'Listrik Token',
        description: 'Biaya listrik menyesuaikan pemakaian masing-masing penghuni.',
      },
    ],
  },
  {
    id: 'kamar3',
    label: 'Kamar 03',
    type: 'kamar',
    size: 'Luas Kamar: 7.05 m²',
    bathroomInfo: 'K. Mandi: 1.09 m²',
    features: [
      {
        title: 'K. Mandi Dalam',
        description: 'Shower, kloset duduk, rak sabun & gantungan baju.',
      },
      {
        title: 'Full Furnished',
        description: 'Kasur, lemari, meja belajar, wastafel dan rak sepatu.',
      },
      {
        title: 'Full AC',
        description: 'Kamar difasilitasi AC untuk kenyamanan suhu ruangan.',
      },
      {
        title: 'Free WiFi 24 Jam',
        description: 'Koneksi internet ngebut & stabil untuk nugas atau streaming.',
      },
      {
        title: 'Fasilitas & Keamanan',
        description: 'Keamanan CCTV 24 jam, parkir motor dan area jemur.',
      },
      {
        title: 'Listrik Token',
        description: 'Biaya listrik menyesuaikan pemakaian masing-masing penghuni.',
      },
    ],
  },
  {
    id: 'kontrakan1',
    label: 'Kontrakan 1',
    type: 'kontrakan',
    size: 'Luas Bangunan: 24 m²',
    bathroomInfo: 'Halaman Mandiri',
    features: [
      {
        title: 'Kosongan (Unfurnished)',
        description: 'Bebas bawa furnitur sendiri sesuai selera & kebutuhan.',
      },
      {
        title: 'Area Ekstra Luas',
        description: 'Ruang gerak lebih leluasa, cocok untuk keluarga kecil.',
      },
      {
        title: 'Area Jemuran',
        description: 'Area jemur khusus dengan sirkulasi udara yang baik.',
      },
      {
        title: 'Air & Listrik Mandiri',
        description: 'Sistem pembayaran air dan listrik ditanggung mandiri.',
      },
    ],
  },
  {
    id: 'kontrakan2',
    label: 'Kontrakan 2',
    type: 'kontrakan',
    size: 'Luas Bangunan: 24 m²',
    bathroomInfo: 'Halaman Mandiri',
    features: [
      {
        title: 'Kosongan (Unfurnished)',
        description: 'Bebas bawa furnitur sendiri sesuai selera & kebutuhan.',
      },
      {
        title: 'Area Ekstra Luas',
        description: 'Ruang gerak lebih leluasa, cocok untuk keluarga kecil.',
      },
      {
        title: 'Area Jemuran',
        description: 'Area jemur khusus dengan sirkulasi udara yang baik.',
      },
      {
        title: 'Air & Listrik Mandiri',
        description: 'Sistem pembayaran air dan listrik ditanggung mandiri.',
      },
    ],
  },
]

export const PRICING_FEATURES: PricingFeature[] = [
  {
    title: 'Privasi Terjaga',
    description:
      'Akses khusus penghuni dan lingkungan yang menghargai ketenanganmu.',
  },
  {
    title: 'Bebas Repot',
    description:
      'Fasilitas sudah lengkap, tinggal bawa koper dan siap huni hari ini juga.',
  },
]

export const FAQS: FAQ[] = [
  {
    question: 'Apakah ada jam malam?',
    answer:
      'Mutiara Kost memberikan akses kunci 24 jam untuk penghuni. Kami mengedepankan privasi dan kedewasaan masing-masing, dengan syarat tetap saling menjaga ketenangan di malam hari.',
  },
  {
    question: 'Bolehkah membawa hewan peliharaan?',
    answer:
      'Untuk menjaga kenyamanan, keamanan, dan kebersihan bersama antar seluruh penghuni kos, mohon maaf saat ini kami belum mengizinkan penghuni untuk membawa hewan peliharaan.',
  },
  {
    question: 'Maksimal penghuni satu kamar?',
    answer:
      'Satu kamar bisa dihuni maksimal oleh 2 orang tanpa ada biaya tambahan. Namun, wajib mengonfirmasi dan melapor terlebih dahulu kepada pihak pengelola kos.',
  },
  {
    question: 'Bagaimana dengan fasilitas parkir?',
    answer:
      'Kami menyediakan area parkir motor yang aman di dalam gerbang (kapasitas maksimal 3 motor untuk 3 kamar). Area parkir juga dipantau CCTV 24 jam untuk keamanan ekstra.',
  },
  {
    question: 'Apakah minimal sewa tahunan?',
    answer:
      'Tidak harus, kamu bisa menyewa secara bulanan. Namun, kami memberikan diskon khusus yang sangat menarik jika kamu langsung menyewa secara tahunan atau per semester.',
  },
  {
    question: 'Ada fasilitas dapur bersama?',
    answer:
      'Saat ini kami tidak menyediakan fasilitas dapur bersama. Namun, setiap penghuni diperbolehkan membawa kompor kecil atau kompor portabel sendiri untuk digunakan di kamar.',
  },
  {
    question: 'Bagaimana layanan kebersihannya?',
    answer:
      'Area umum seperti lorong, tangga, dan parkir dibersihkan setiap hari oleh staf kami. Untuk dalam kamar, kebersihannya menjadi tanggung jawab masing-masing penghuni.',
  },
  {
    question: 'Bolehkah tamu menginap?',
    answer:
      'Tamu berkunjung diperbolehkan hingga batas jam tamu. Jika ada keluarga inti yang harus menginap, wajib melapor ke pengelola kos maksimal 1x24 jam sebelumnya.',
  },
  {
    question: 'Apakah biaya sewa sudah termasuk listrik?',
    answer:
      'Biaya sewa sudah *include* (termasuk) air bersih, WiFi, dan kebersihan area umum. Untuk listrik, setiap kamar memiliki meteran token prabayar masing-masing sehingga pemakaian dibayar mandiri.',
  },
]

export const LOCATION_POINTS: LocationPoint[] = [
    {
    title: '2 Menit Jalan Kaki',
    subtitle: 'Ke minimarket & ATM.',
    colorClass: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    svgPath: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
  },
  {
    title: '5 Menit ke Univ. Pakuan',
    subtitle: 'Strategis untuk mahasiswa.',
    colorClass: 'bg-sky-50',
    iconColor: 'text-sky-600',
    svgPath:
      'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14v7',
  },
  {
    title: '10 Menit ke Botani Sq',
    subtitle: 'Akses cepat ke mall.',
    colorClass: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    svgPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: '15 Menit ke Stasiun',
    subtitle: 'Mobilitas mudah via KRL.',
    colorClass: 'bg-orange-50',
    iconColor: 'text-orange-600',
    svgPath:
      'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Dekat RS BMC & Puskesmas',
    subtitle: 'Akses cepat fasilitas kesehatan.',
    colorClass: 'bg-red-50',
    iconColor: 'text-red-600',
    svgPath:
      'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Pusat Kuliner Malam',
    subtitle: 'Banyak warung & cafe.',
    colorClass: 'bg-amber-50',
    iconColor: 'text-amber-600',
    svgPath:
      'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  },
]
