export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  features: string[]
  githubUrl: string
  demoUrl: string
}

export interface SkillItem {
  name: string
  level?: number
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  year: string
  location: string
  description: string[]
  stack: string[]
}

export const profileData = {
  name: "Reza Saputra",
  title: "Full Stack Web Developer",
  education: "S1 Teknologi Informasi",
  field: "Web Development",
  focus: "Frontend & Backend Development",
  location: "Banda Aceh, Aceh, Indonesia",
  email: "rezasaputradesky@gmail.com",
  whatsapp: "+62 822-2698-3676",
  instagram: "https://instagram.com/reza_dsky",
  github: "https://github.com/rezadesky",
  linkedin: "https://www.linkedin.com/in/reza-saputra-3127b2297/",
  bio: "Full Stack Web Developer dari Banda Aceh, Indonesia yang fokus membangun aplikasi web modern, responsif, dan mudah digunakan.",
  bioMain1: "Saya Full Stack Web Developer yang berfokus pada Frontend dan Backend Development. Setiap hari saya membangun aplikasi web menggunakan React, HTML, CSS, JavaScript, PHP, Laravel, dan MySQL — dari antarmuka yang responsif hingga backend dan database yang andal. Selama masa studi S1 Teknologi Informasi, saya mengerjakan berbagai proyek web development nyata dan terus mengasah kemampuan sebagai calon Software Engineer.",
  bioMain2: "Saya percaya teknologi memberikan solusi nyata bagi berbagai permasalahan. Karena itu saya selalu menulis kode yang rapi, mudah dipelihara, dan mengikuti praktik terbaik pengembangan perangkat lunak. Saat ini saya terbuka untuk magang, kolaborasi, maupun proyek freelance yang membantu saya berkembang sebagai Full Stack Developer dan Software Engineer profesional.",
  bioShort: "Full Stack Web Developer dari Banda Aceh, Indonesia. Membangun aplikasi web modern dan responsif dengan React, Laravel, PHP, dan MySQL. Terus belajar teknologi baru melalui proyek nyata.",
  skillsDescription: "Sebagai Full Stack Developer, saya berpengalaman membangun aplikasi web dari frontend hingga backend: antarmuka responsif dengan React dan Tailwind CSS, pengelolaan database MySQL, serta Git untuk kolaborasi. Saya juga terus mengembangkan soft skill seperti komunikasi, kerja sama tim, dan pemecahan masalah demi mendukung proses pengembangan perangkat lunak.",
  contactSubheading: "Let's Work Together",
  contactDescription: "Terima kasih telah mengunjungi portofolio web developer saya. Jika Anda memiliki pertanyaan, ingin berdiskusi, atau tertarik berkolaborasi dalam sebuah proyek — baik itu website, aplikasi web, atau pekerjaan freelance — jangan ragu menghubungi saya. Saya akan dengan senang hati merespons pesan Anda.",
  contactCtaHeading: "Interested in working together?",
  contactCtaBody: "Feel free to reach out. I'm always open to discussing new opportunities, collaborations, or innovative projects.",
}

export const skillsCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Responsive Web Design", level: 90 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 80 },
      { name: "REST API", level: 80 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: 80 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git & GitHub" },
      { name: "Visual Studio Code" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "XAMPP" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving" },
      { name: "Teamwork" },
      { name: "Communication" },
      { name: "Time Management" },
      { name: "Fast Learner" },
    ],
  },
]

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Sistem Manajemen Perpustakaan",
    category: "Web Application",
    description: "Aplikasi web untuk mengelola data buku, anggota, serta proses peminjaman dan pengembalian secara efisien. Dilengkapi dengan autentikasi pengguna dan dashboard admin.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Login & autentikasi",
      "CRUD buku dan anggota",
      "Peminjaman & pengembalian",
      "Dashboard admin",
    ],
    githubUrl: "https://github.com/rezadesky/sistem-perpustakaan",
    demoUrl: "https://github.com/rezadesky/perpustakaan",
  },
  {
    id: "proj-2",
    title: "Website Portofolio Pribadi",
    category: "Frontend Web",
    description: "Website portofolio yang menampilkan profil, keterampilan, proyek, dan informasi kontak dengan desain responsif dan modern.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS"],
    features: [
      "Responsive Design",
      "Dark Mode",
      "Animasi scroll",
      "Form kontak",
    ],
    githubUrl: "https://github.com/rezadesky/portfolio",
    demoUrl: "https://github.com/rezadesky/portfolio",
  },
  {
    id: "proj-3",
    title: "Aplikasi To-Do List",
    category: "Web Application",
    description: "Aplikasi sederhana untuk mencatat dan mengelola daftar tugas harian dengan fitur penambahan, pengeditan, dan penghapusan tugas.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    features: [
      "Tambah tugas",
      "Edit & hapus tugas",
      "Tandai tugas selesai",
      "Penyimpanan menggunakan Local Storage",
    ],
    githubUrl: "https://github.com/rezadesky/todo-list",
    demoUrl: "https://github.com/rezadesky/todo",
  },
  {
    id: "proj-4",
    title: "Sistem Kasir Sederhana",
    category: "Web Application",
    description: "Aplikasi kasir berbasis web yang membantu mencatat transaksi penjualan dan menghasilkan laporan sederhana.",
    image: "https://images.unsplash.com/photo-1556742049-0a67e517e331?q=80&w=800&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "Bootstrap"],
    features: [
      "Manajemen produk",
      "Transaksi penjualan",
      "Cetak struk",
      "Laporan penjualan",
    ],
    githubUrl: "https://github.com/rezadesky/sistem-kasir",
    demoUrl: "https://github.com/rezadesky/kasir",
  },
]

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    role: "Web Developer Intern",
    company: "Nama Perusahaan",
    period: "Jan 2026 – Apr 2026",
    year: "2026",
    location: "Indonesia",
    description: [
      "Mengembangkan dan memelihara fitur pada aplikasi web perusahaan.",
      "Berkolaborasi dengan tim untuk memperbaiki bug dan meningkatkan performa aplikasi.",
      "Mengimplementasikan desain antarmuka menjadi halaman web yang responsif menggunakan Laravel dan Bootstrap.",
    ],
    stack: ["Laravel", "Bootstrap", "PHP", "MySQL"],
  },
  {
    id: "exp-2",
    role: "Staff Divisi IT",
    company: "Himpunan Mahasiswa Teknologi Informasi",
    period: "2025 – 2026",
    year: "2025",
    location: "Kampus",
    description: [
      "Mengembangkan dan mengelola website organisasi.",
      "Membantu dokumentasi serta publikasi kegiatan melalui media digital.",
      "Berkolaborasi dengan anggota tim dalam menyelesaikan berbagai proyek teknologi.",
    ],
    stack: ["Web Development", "Teamwork", "System Maintenance"],
  },
  {
    id: "exp-3",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2025 – Sekarang",
    year: "2025",
    location: "Remote",
    description: [
      "Mengembangkan website sesuai kebutuhan klien.",
      "Melakukan maintenance dan perbaikan bug.",
      "Memberikan solusi yang responsif dan mudah digunakan.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript (ES6+)", "PHP"],
  },
  {
    id: "exp-4",
    role: "Mahasiswa Teknologi Informasi",
    company: "Perguruan Tinggi",
    period: "2023 – Sekarang",
    year: "2023",
    location: "Indonesia",
    description: [
      "Mempelajari pengembangan web menggunakan HTML, CSS, JavaScript, PHP, dan Laravel.",
      "Mengerjakan berbagai proyek akademik dan pribadi untuk meningkatkan kemampuan teknis.",
      "Menggunakan Git dan GitHub untuk version control dan dokumentasi proyek.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript (ES6+)", "PHP", "Laravel", "Git & GitHub"],
  },
]
