/* =====================================================================
   data.js - SEMUA DATA YANG PERLU ANDA ISI
   Dimuat sebelum main.js. Edit file ini untuk mengganti konten.
   ===================================================================== */

/* ---------- 1. DATA: ISI DATA ANDA DI SINI ---------- */

var CFG = {
  email: "alfajril191@gmail.com",
  whatsapp: "6285244348331",
  cv: "https://drive.google.com/drive/folders/1GsqhHYij6Ek-SE9S6KWvQ8AK65K5K7jP?usp=drive_link",
  photo: "images/foto.jpg",

  links: {
    GitHub: "",
    LinkedIn: "",
    Instagram: "https://instagram.com/alfajril10"
  }
};

/* Pembungkus SVG untuk ikon skill */
var S = function (b) {
  return '<svg viewBox="0 0 48 48" aria-hidden="true">' + b + '</svg>';
};

/* Skill: [nama, ikon SVG, level (angka), warna hover]
   Level >= 65 = Menengah, >= 50 = Berkembang, selain itu = Dasar */
var SK = [
  ["HTML",
    S('<path fill="#e44d26" d="M6 4h36l-3.3 37L24 45 9.3 41z"/><path fill="#f16529" d="M24 7v35.5l12-3.4L38.8 7z"/><path fill="#fff" d="M15 14h18.5l-.4 4.5H19.7l.3 4.5h12.8l-1 11-8 2.3-8-2.3-.5-6h4.3l.3 3 4 1.2 4-1.2.4-4.7H15.5z"/>'),
    65, "#e44d26"],
  ["CSS",
    S('<path fill="#264de4" d="M6 4h36l-3.3 37L24 45 9.3 41z"/><path fill="#2965f1" d="M24 7v35.5l12-3.4L38.8 7z"/><path fill="#fff" d="M33.5 14H14.5l.4 4.5h14l-.4 4.5H15.3l1 11L24 36l8-2.3.6-6.5H28l-.3 3L24 31.3l-3.8-1-.2-3h12.8z"/>'),
    65, "#2965f1"],
  ["JavaScript",
    S('<rect x="5" y="5" width="38" height="38" fill="#f7df1e"/><text x="41" y="40" text-anchor="end" font-family="Arial,sans-serif" font-weight="800" font-size="19" fill="#000">JS</text>'),
    50, "#f7df1e"],
  ["PHP",
    S('<ellipse cx="24" cy="24" rx="21" ry="12" fill="#777bb3"/><text x="24" y="29" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-style="italic" font-size="14" fill="#fff">php</text>'),
    55, "#777bb3"],
  ["CodeIgniter",
    S('<path fill="#ee4323" d="M28 3c1 7-3 9-6 14-2 3-1 6 1 8-5-1-9-5-8-11-5 4-8 9-6 15 2 7 9 11 16 10 8-1 13-8 11-16-1-5-5-7-5-12-1 2-2 3-3 3 1-4 1-8 0-11z"/>'),
    55, "#ee4323"],
  ["MySQL",
    S('<text x="24" y="29" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="15" fill="#00a2c7">My<tspan fill="#f29111">SQL</tspan></text>'),
    60, "#00a2c7"],
  ["Bootstrap",
    S('<rect x="3" y="7" width="42" height="34" rx="8" fill="#7952b3"/><text x="24" y="33" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="24" fill="#fff">B</text>'),
    65, "#7952b3"],
  ["Python",
    S('<path fill="#3776ab" d="M24 4c-9 0-8.5 4-8.5 4v4H24.5v1.5H12S6 13 6 24s5 10.5 5 10.5h3V30s-.2-5 4.8-5H27s4.7.1 4.7-4.5V9S32.4 4 24 4zm-4.5 2.6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/><path fill="#ffd43b" d="M24 44c9 0 8.5-4 8.5-4v-4H23.5v-1.5H36S42 35 42 24s-5-10.5-5-10.5h-3V18s.2 5-4.8 5H21s-4.7-.1-4.7 4.5V39S15.6 44 24 44zm4.5-2.6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>'),
    40, "#3776ab"],
  ["Java",
    S('<path fill="#5382a1" d="M10 28h22v6c0 4-4 7-11 7s-11-3-11-7z"/><path d="M32 30h3c4 0 4 6 0 6h-3" fill="none" stroke="#5382a1" stroke-width="3"/><path d="M20 4c4 5-4 7 0 12M27 8c3 3-2 5 0 9" fill="none" stroke="#e76f00" stroke-width="2.5" stroke-linecap="round"/><path d="M8 44h28" stroke="#e76f00" stroke-width="3" stroke-linecap="round"/>'),
    40, "#e76f00"],
  ["Git & GitHub",
    S('<rect x="9" y="9" width="30" height="30" rx="4" transform="rotate(45 24 24)" fill="#f05032"/><g stroke="#fff" stroke-width="3" fill="#fff"><path d="M24 15v18M24 24h9" fill="none"/><circle cx="24" cy="14" r="3.5"/><circle cx="24" cy="33" r="3.5"/><circle cx="33" cy="24" r="3.5"/></g>'),
    55, "#f05032"],
  ["Figma",
    S('<path fill="#f24e1e" d="M16 3h8v14h-8a7 7 0 010-14z"/><path fill="#ff7262" d="M24 3h8a7 7 0 010 14h-8z"/><path fill="#a259ff" d="M16 17h8v14h-8a7 7 0 010-14z"/><circle fill="#1abcfe" cx="31" cy="24" r="7"/><path fill="#0acf83" d="M16 45a7 7 0 007-7v-7h-7a7 7 0 000 14z"/>'),
    45, "#a259ff"],
  ["Canva",
    S('<circle cx="24" cy="24" r="21" fill="#00c4cc"/><text x="24" y="32" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="22" fill="#fff">Ca</text>'),
    50, "#00c4cc"]
];

/* Proyek
   n = nama, d = deskripsi, t = teknologi, gh = link GitHub,
   pr = masalah, ob = tujuan, so = solusi, pc = proses, oc = hasil */
var PJ = [
  {
    id: "lms",
    n: "Sistem Manajemen Pembelajaran (LMS)",
    d: "Sistem pembelajaran berbasis web untuk membantu guru dan siswa mengelola materi, tugas, kelas, dan aktivitas belajar secara digital.",
    t: ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS", "JavaScript"],
    gh: "",
    pr: "Materi, tugas, dan kelas tersebar di banyak tempat sehingga sulit dipantau guru maupun siswa.",
    ob: "Menyediakan satu platform web untuk mengelola kelas, materi, dan tugas secara terpusat.",
    so: "Aplikasi web dengan peran guru dan siswa, manajemen kelas, unggah materi, dan pengelolaan tugas.",
    pc: [
      "Analisis kebutuhan pengguna",
      "Perancangan database dan alur sistem",
      "Implementasi dengan CodeIgniter dan MySQL",
      "Pengujian fitur dan perbaikan"
    ],
    oc: "Prototipe LMS yang mencakup fitur utama pengelolaan pembelajaran. [Tambahkan hasil nyata, mis. jumlah pengguna uji.]"
  },
  {
    id: "sidesa",
    n: "Sistem Informasi Desa (SIDesa)",
    d: "Website informasi desa untuk menampilkan profil desa, struktur organisasi, potensi desa, informasi UMKM, dan informasi publik.",
    t: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    gh: "",
    pr: "Informasi desa belum tersaji rapi dan mudah diakses oleh masyarakat.",
    ob: "Membuat media informasi desa yang jelas, terstruktur, dan mudah diperbarui.",
    so: "Website dengan halaman profil, struktur organisasi, potensi desa, UMKM, dan informasi publik.",
    pc: [
      "Pengumpulan data dan kebutuhan desa",
      "Perancangan struktur halaman",
      "Pengembangan dengan PHP dan MySQL",
      "Uji tampilan dan serah terima"
    ],
    oc: "Website informasi desa yang siap dikelola. [Tambahkan nama desa dan tautan jika ada.]"
  },
  {
    id: "crud",
    n: "Sistem CRUD Data Mahasiswa",
    d: "Aplikasi web pengelolaan data mahasiswa dengan tambah, tampil, edit, hapus data, serta login dan logout.",
    t: ["PHP", "MySQL", "Bootstrap"],
    gh: "",
    pr: "Pengelolaan data mahasiswa secara manual rentan salah dan lambat.",
    ob: "Membangun aplikasi sederhana untuk mengelola data mahasiswa dengan aman.",
    so: "Aplikasi CRUD dengan autentikasi login/logout dan antarmuka Bootstrap yang responsif.",
    pc: [
      "Merancang tabel database",
      "Membuat fitur CRUD",
      "Menambah autentikasi",
      "Menguji alur pengguna"
    ],
    oc: "Aplikasi CRUD berfungsi penuh dengan autentikasi dasar."
  },
  {
    id: "iot",
    n: "IoT Smart Bell",
    d: "Proyek IoT dengan ESP32-CAM untuk bel pintu pintar dengan fitur pemantauan dan pengiriman gambar.",
    t: ["ESP32-CAM", "ESP32", "Firebase", "Arduino IDE"],
    gh: "",
    pr: "Bel pintu biasa tidak memberi tahu siapa yang datang saat pemilik rumah tidak di tempat.",
    ob: "Membuat bel pintu pintar yang dapat memantau dan mengirim gambar tamu.",
    so: "Perangkat ESP32-CAM yang menangkap gambar dan mengirimkannya melalui Firebase.",
    pc: [
      "Merangkai perangkat keras ESP32-CAM",
      "Memprogram dengan Arduino IDE",
      "Integrasi Firebase",
      "Pengujian pengiriman gambar"
    ],
    oc: "Prototipe bel pintar yang dapat memantau dan mengirim gambar. [Tambahkan foto perangkat jika ada.]"
  }
];

/* Galeri desain: isi src dengan gambar (data URI) hasil desain Anda */
var DS = [
  { t: "Desain UI Aplikasi",         tool: "Figma", src: "" },
  { t: "Poster Kegiatan",            tool: "Canva", src: "" },
  { t: "Desain Landing Page",        tool: "Figma", src: "" },
  { t: "Banner Media Sosial",        tool: "Canva", src: "" },
  { t: "Prototipe Aplikasi Mobile",  tool: "Figma", src: "" }
];

/* Sertifikat & pelatihan
   k = "Sertifikat" atau "Pelatihan"; src = gambar (data URI); url = link verifikasi (opsional) */
var CERT = [
  { t: "[Desain UI/UX]", by: "[SpecialSkill]", d: "[10 2026]", k: "Sertifikat", src: "images/sertifikat-1.jpg", url: "" },
  { t: "[Data Analyst]", by: "[RocketTutor]", d: "[10 2026]", k: "Sertifikat", src: "images/sertifikat-2.jpg", url: "" },
  { t: "[Desain Canva]",  by: "[MySkill]", d: "[10 2026]", k: "Sertifikat",  src: "images/sertifikat-3.jpg", url: "" }
];

/* ================= AKHIR AREA DATA ================= */
