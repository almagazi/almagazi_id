import { SectionId } from './types';
import type { NavItem, Project, Service } from './types';

export const APP_NAME = "Almagazi";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', to: SectionId.HOME },
  { label: 'Tentang Kami', to: SectionId.ABOUT },
  { label: 'Layanan', to: SectionId.SERVICES },
  { label: 'Portofolio', to: SectionId.PROJECTS },
  { label: 'Kontak', to: SectionId.CONTACT },
];

export const HERO_CONTENT = {
  greeting: "Solusi Digital",
  name: "Almagazi",
  title: "Digital Product Studio",
  description: "Mitra transformasi digital Anda. Kami merancang dan membangun pengalaman digital kelas dunia yang memadukan estetika modern dengan infrastruktur teknologi yang kokoh."
};

export const ABOUT_CONTENT = {
  title: "Inovasi Tanpa Batas",
  text1: "Almagazi adalah studio teknologi yang berdedikasi untuk mengubah visi bisnis menjadi realitas digital. Berbasis di Indonesia, kami menggabungkan kreativitas desain strategis dengan ketangguhan rekayasa perangkat lunak untuk menciptakan produk yang berdampak.",
  text2: "Filosofi kami sederhana: teknologi harus memberdayakan. Kami bekerja sama dengan klien dari berbagai industri untuk membangun solusi yang skalabel, aman, dan berpusat pada pengguna. Dari startup hingga korporasi, kami adalah mitra teknis terpercaya Anda.",
  text3: "Kekuatan kami bukanlah usia perusahaan, melainkan pengalaman kolektif dan puluhan proyek yang telah ditangani oleh tim inti kami.",
  stats: [
    { label: "Klien Telah Ditangani", value: "50+" },
    { label: "Tahun Pengalaman Tim", value: "25+" },
    { label: "Tahun Pengalaman Kerja Remote", value: "16+" },
    { label: "Industri Dilayani", value: "15+" },
  ]
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Pengembangan Aplikasi Terintegrasi",
    description: "Kami menghadirkan solusi digital menyeluruh yang memadukan estetika desain dengan performa teknologi mutakhir. Menggunakan SvelteKit dan Supabase, kami membangun aplikasi web yang responsif, aman, dan skalabel. Keunggulan ini kami perluas ke ranah seluler menggunakan Capacitor.js, menciptakan pengalaman lintas platform (iOS & Android) yang terasa seperti aplikasi asli (native). Dari konsep visual yang intuitif hingga eksekusi kode yang tangguh, kami memastikan produk digital Anda memukau pengguna dan mendukung pertumbuhan bisnis.",
    icon: "code"
  },
  {
    id: 2,
    title: "Solusi ERP & Transformasi Bisnis",
    description: "Tingkatkan efisiensi operasional Anda melalui implementasi sistem Enterprise Resource Planning (ERP) yang presisi. Dengan keahlian mendalam pada IFS Applications dan ERPNext, kami tidak hanya memandu Anda melalui proses transisi sistem yang kompleks, tetapi juga menyesuaikan fitur-fiturnya agar selaras dengan proses bisnis unik Anda. Kami memastikan integrasi yang mulus dan kustomisasi strategis untuk membuka potensi penuh efisiensi perusahaan Anda.",
    icon: "pen-tool"
  },
  {
    id: 3,
    title: "Rekayasa & Manajemen Data",
    description: "Data adalah aset terpenting Anda. Layanan kami mencakup siklus hidup pengelolaan data, mulai dari migrasi yang aman tanpa downtime hingga optimasi performa tingkat lanjut. Baik Anda menggunakan Oracle, PostgreSQL, MariaDB, MySQL atau SQLite, kami melakukan analisis mendalam dan penyesuaian strategis untuk menjamin integritas data, kecepatan akses, dan skalabilitas sistem, sehingga aplikasi Anda dapat beroperasi pada kinerja puncaknya setiap saat.",
    icon: "database"
  },
  {
    id: 4,
    title: "Infrastruktur & Managed Hosting",
    description: "Serahkan kompleksitas infrastruktur teknis kepada kami. Kami menyediakan layanan hosting terkelola yang menjamin aplikasi web dan seluler Anda berjalan dengan aman, cepat, dan stabil. Dengan pemanfaatan platform cloud terkemuka, pemantauan 24/7, serta langkah keamanan yang ketat, kami memberikan ketenangan pikiran (peace of mind) agar Anda dapat fokus sepenuhnya pada pengembangan bisnis inti tanpa terganggu masalah teknis server.",
    icon: "message-square"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Maragha",
    description: "Platform gotong royong literasi untuk merawat Warisan Intelektual Islam. Kami menerjemahkan naskah klasik Arab secara kolaboratif untuk membangun perpustakaan digital yang dapat diakses oleh generasi mendatang.",
    tags: ["SvelteKit", "SQLite", "Free"],
    imageUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=800&auto=format&fit=crop",
    link: "https://maragha.id"
  },
  {
    id: 2,
    title: "Sistem Keuangan Perusahaan Jasa",
    description: "Solusi SaaS modern untuk mengelola keuangan perusahaan jasa. Lacak proyek, kelola tagihan (invoicing), dan pantau profitabilitas dengan mudah. Didesain untuk agensi, konsultan, dan pekerja jasa.",
    tags: ["SaaS", "ERP", "Accounting", "Project"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Sistem Keuangan Non Profit",
    description: "Aplikasi keuangan khusus untuk organisasi nirlaba (Yayasan, Perkumpulan, NGO). Memastikan kepatuhan ISAK 35 dan manajemen ZISWAF. Transparansi dan akuntabilitas dalam satu platform.",
    tags: ["SaaS", "ISAK 35", "ERP", "Accounting"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    link: "#"
  }
];

export const CONTACT_INFO = {
  email: "aulia@almagazi.id",
  location: "Sentul City, Indonesia",
  socials: {
    github: "https://github.com/almagazi",
    linkedin: "https://www.linkedin.com/company/101708908/admin/dashboard/",
    twitter: "#"
  }
};