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
  alias: "Reza Desky",
  avatar: "https://avatars.githubusercontent.com/u/104095833?v=4",
  title: "Full Stack Web Developer",
  education: "S1 Teknologi Informasi UIN Ar-Raniry",
  field: "Web Development",
  focus: "Frontend & Backend Development",
  location: "Banda Aceh, Aceh, Indonesia",
  email: "rezasaputradesky@gmail.com",
  whatsapp: "+62 822-2698-3676",
  instagram: "https://instagram.com/reza_dsky",
  github: "https://github.com/rezadesky",
  linkedin: "https://www.linkedin.com/in/reza-saputra-3127b2297/",
  bio: "Full Stack Web Developer dari Banda Aceh, Indonesia yang fokus membangun aplikasi web modern, responsif, dan mudah digunakan.",
  bioMain1: "Saya Reza Saputra — banyak yang mengenal saya sebagai Reza Desky — Full Stack Web Developer yang berfokus pada Frontend dan Backend Development. Setiap hari saya membangun aplikasi web menggunakan React, HTML, CSS, JavaScript, PHP, Laravel, dan MySQL — dari antarmuka yang responsif hingga backend dan database yang andal. Selama masa studi S1 Teknologi Informasi, saya mengerjakan berbagai proyek web development nyata dan terus mengasah kemampuan sebagai calon Software Engineer.",
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
      { name: "React.js", level: 85 },
      { name: "Vue.js", level: 80 },
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
      { name: "Next.js", level: 75 },
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
    id: "proj-0",
    title: "Ideostore - Platform Layanan Aplikasi Premium",
    category: "Web Application",
    description: "Platform e-commerce digital store penyedia langganan aplikasi premium terpercaya, akun AI, produktivitas, dan hiburan dengan integrasi sistem pembayaran otomatis QRIS instan.",
    image: "/images/ideostore.png",
    tags: ["Web Development", "E-Commerce", "QRIS Payment Gateway", "Full Stack", "Tailwind CSS"],
    features: [
      "Katalog produk aplikasi premium & akun AI",
      "Sistem pembayaran otomatis QRIS instan",
      "Pengiriman detail akun otomatis via WhatsApp",
      "Halaman pelacakan status pesanan real-time",
      "Mode tampilan dark/light responsive",
      "Panel kelola produk dan varian langganan",
    ],
    githubUrl: "",
    demoUrl: "https://ideostore.ideolog.tech/",
  },
  {
    id: "proj-1",
    title: "Website IdeologTech",
    category: "Web Application",
    description: "Website IdeologTech yang dikembangkan sebagai platform digital untuk memperkenalkan layanan, informasi, dan aktivitas IdeologTech kepada pengguna secara online.",
    image: "/images/ideolog-tech.png",
    tags: ["Web Development", "Frontend Development", "UI/UX", "Responsive Design"],
    features: [
      "Landing page informatif",
      "Informasi layanan dan profil IdeologTech",
      "Navigasi website yang terstruktur",
      "Tampilan responsif untuk desktop dan perangkat mobile",
      "Pengelolaan konten website",
    ],
    githubUrl: "",
    demoUrl: "https://ideolog.tech/",
  },
  {
    id: "proj-2",
    title: "Website DEMA FST UIN Ar-Raniry",
    category: "Organizational Website",
    description: "Website resmi Dewan Eksekutif Mahasiswa (DEMA) Fakultas Sains dan Teknologi UIN Ar-Raniry yang dikembangkan sebagai pusat informasi organisasi, publikasi kegiatan, program kerja, serta berbagai informasi kemahasiswaan.",
    image: "/images/dema-fst.png",
    tags: ["Web Development", "Organizational Website", "Information Management", "UI/UX"],
    features: [
      "Profil dan informasi organisasi",
      "Publikasi berita dan kegiatan",
      "Informasi program kerja organisasi",
      "Penyampaian informasi kemahasiswaan",
      "Dokumentasi kegiatan",
      "Tampilan responsif untuk berbagai perangkat",
    ],
    githubUrl: "",
    demoUrl: "https://demafstuinar.com/",
  },
  {
    id: "proj-3",
    title: "Spes: Journal Education and Language",
    category: "Journal Website",
    description: "Website jurnal ilmiah Spes: Journal Education and Language yang menggunakan Open Journal Systems (OJS) untuk mendukung pengelolaan naskah, proses editorial, publikasi, dan akses artikel ilmiah secara online.",
    image: "/images/spes-journal.png",
    tags: ["OJS", "Open Journal Systems", "Journal Management", "Academic Publishing"],
    features: [
      "Pengelolaan jurnal dan edisi publikasi",
      "Submission artikel secara online",
      "Pengelolaan naskah dan metadata artikel",
      "Manajemen proses editorial dan review",
      "Publikasi artikel ilmiah secara online",
      "Pencarian dan akses artikel jurnal",
    ],
    githubUrl: "",
    demoUrl: "https://journal.stkip-us.ac.id/index.php/spes/index",
  },
  {
    id: "proj-4",
    title: "Meujile: Jurnal Pendidikan Bahasa dan Sastra",
    category: "Journal Website",
    description: "Website jurnal ilmiah Meujile yang dikelola menggunakan Open Journal Systems (OJS) untuk mendukung proses publikasi dan pengelolaan jurnal akademik secara online.",
    image: "/images/meujile-journal.png",
    tags: ["OJS", "Open Journal Systems", "Journal Management", "Academic Publishing"],
    features: [
      "Pengelolaan jurnal dan edisi publikasi",
      "Submission artikel secara online",
      "Pengelolaan naskah dan metadata artikel",
      "Proses review dan editorial",
      "Publikasi artikel ilmiah secara online",
      "Pencarian dan akses artikel jurnal",
    ],
    githubUrl: "",
    demoUrl: "https://journal.stkip-us.ac.id/index.php/meujile",
  },
  {
    id: "proj-5",
    title: "Website SPMB STKIP Usman Safri",
    category: "Web Application",
    description: "Website Sistem Penerimaan Mahasiswa Baru (SPMB) STKIP Usman Safri Kutacane yang dikembangkan untuk memudahkan calon mahasiswa dalam melakukan proses pendaftaran secara online.",
    image: "/images/spmb-stkip.png",
    tags: ["Web Development", "PHP", "Laravel", "MySQL", "Bootstrap"],
    features: [
      "Pendaftaran mahasiswa baru secara online",
      "Formulir pendaftaran digital",
      "Upload berkas persyaratan",
      "Pengelolaan data calon mahasiswa",
      "Dashboard administrasi",
      "Informasi penerimaan mahasiswa baru",
      "Tampilan responsif untuk desktop dan perangkat mobile",
    ],
    githubUrl: "",
    demoUrl: "https://spmb.stkip-us.ac.id/",
  },
  {
    id: "proj-6",
    title: "Web Portal Informasi STKIP Usman Safri",
    category: "Web Application",
    description: "Website portal informasi STKIP Usman Safri Kutacane yang dikembangkan untuk menyediakan informasi institusi, akademik, berita, kegiatan, serta berbagai informasi kampus bagi mahasiswa, calon mahasiswa, dan masyarakat.",
    image: "/images/stkip-us.png",
    tags: ["Web Development", "PHP", "Laravel", "MySQL", "Bootstrap"],
    features: [
      "Portal informasi kampus",
      "Publikasi berita dan pengumuman",
      "Informasi akademik dan kegiatan kampus",
      "Informasi profil dan program studi",
      "Tampilan responsif untuk desktop dan perangkat mobile",
      "Pengelolaan konten website",
    ],
    githubUrl: "",
    demoUrl: "https://stkip-us.ac.id/",
  },
  {
    id: "proj-7",
    title: "Website Rumah Analisa",
    category: "Web Application",
    description: "Website informasi dan publikasi Rumah Analisa yang dikembangkan sebagai platform untuk menyajikan informasi, artikel, serta berbagai konten terkait kegiatan dan analisis.",
    image: "/images/rumah-analisa.png",
    tags: ["WordPress", "Web Development", "Frontend Development", "UI/UX", "Web Management"],
    features: [
      "Halaman informasi Rumah Analisa",
      "Publikasi dan pengelolaan artikel",
      "Tampilan responsif untuk berbagai perangkat",
      "Pengelolaan konten website",
      "Navigasi informasi yang terstruktur",
    ],
    githubUrl: "",
    demoUrl: "https://rumahanalisa.com/",
  },
]

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    role: "Web Developer & Web Administrator",
    company: "Jurnal Meujile & SPES STKIP Usman Safri Kutacane",
    period: "2025 – Sekarang",
    year: "2025",
    location: "Kutacane",
    description: [
      "Mengembangkan dan mengelola website Jurnal Meujile dan SPES STKIP Usman Safri Kutacane.",
      "Bertanggung jawab dalam pembuatan, pemeliharaan, dan pengelolaan fitur website.",
      "Melakukan pembaruan konten dan informasi secara berkala sesuai kebutuhan pengelola.",
      "Memastikan website dapat diakses dengan baik serta memiliki tampilan yang responsif dan mudah digunakan.",
    ],
    stack: ["Web Development", "Frontend Development", "Web Management", "UI/UX"],
  },
  {
    id: "exp-2",
    role: "Web Developer & Web Administrator",
    company: "Rumah Analisa",
    period: "2025 – Sekarang",
    year: "2025",
    location: "Banda Aceh",
    description: [
      "Mengembangkan dan mengelola website Rumah Analisa sebagai platform informasi dan publikasi.",
      "Bertanggung jawab atas pemeliharaan, pembaruan konten, serta pengelolaan fitur website.",
      "Merancang dan mengembangkan fitur baru sesuai kebutuhan platform.",
      "Memastikan website tetap berfungsi dengan baik, responsif, dan mudah digunakan.",
    ],
    stack: ["Web Development", "Frontend Development", "Web Management", "UI/UX"],
  },
  {
    id: "exp-3",
    role: "Web Developer Intern",
    company: "STKIP Usman Safri Kutacane",
    period: "2025",
    year: "2025",
    location: "Kutacane, Aceh",
    description: [
      "Mengembangkan website portal informasi kampus sebagai media penyampaian informasi akademik dan institusi.",
      "Mengembangkan website Sistem Penerimaan Mahasiswa Baru (SPMB) untuk mendukung proses penerimaan mahasiswa.",
      "Merancang dan mengimplementasikan antarmuka website yang informatif, responsif, dan mudah digunakan.",
    ],
    stack: ["Web Development", "Frontend Development", "UI/UX", "Responsive Design"],
  },
  {
    id: "exp-4",
    role: "Departemen Sosial dan Kesejahteraan Mahasiswa (Soskesma)",
    company: "Dewan Eksekutif Mahasiswa Fakultas Sains dan Teknologi",
    period: "2026/2027",
    year: "2026",
    location: "UIN Ar-Raniry",
    description: [
      "Berkontribusi dalam pelaksanaan program kerja di bidang sosial dan kesejahteraan mahasiswa.",
      "Mendukung kegiatan yang berorientasi pada kepedulian sosial dan pemenuhan kebutuhan mahasiswa.",
      "Membantu menjalin komunikasi serta menghimpun aspirasi mahasiswa terkait isu sosial dan kesejahteraan.",
    ],
    stack: ["Social Advocacy", "Communication", "Event Management", "Student Welfare"],
  },
  {
    id: "exp-5",
    role: "Departemen Komunikasi dan Informasi (Kominfo)",
    company: "Dewan Eksekutif Mahasiswa Fakultas Sains dan Teknologi",
    period: "2025/2026",
    year: "2026",
    location: "UIN Ar-Raniry",
    description: [
      "Mengelola penyampaian informasi dan komunikasi terkait kegiatan Dewan Eksekutif Mahasiswa Fakultas Sains dan Teknologi.",
      "Mendukung publikasi dan penyebaran informasi kegiatan organisasi melalui berbagai media komunikasi.",
      "Berkontribusi dalam membangun komunikasi yang efektif antara organisasi, mahasiswa, dan pihak terkait.",
    ],
    stack: ["Communication", "Information Management", "Public Relations", "Digital Media"],
  },
  {
    id: "exp-6",
    role: "Divisi Hubungan Masyarakat (Humas)",
    company: "Himpunan Mahasiswa Teknologi Informasi",
    period: "2025/2026",
    year: "2026",
    location: "UIN Ar-Raniry",
    description: [
      "Menjalankan tugas dan program kerja pada bidang Hubungan Masyarakat.",
      "Mengelola komunikasi dan hubungan organisasi dengan mahasiswa serta pihak terkait.",
      "Mendukung publikasi dan penyampaian informasi kegiatan organisasi.",
    ],
    stack: ["Public Relations", "Communication", "Event Management"],
  },
]
