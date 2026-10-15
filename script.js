// Toggle Mode Gelap / Terang
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Cek preferensi tersimpan sebelumnya
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    themeIcon.className = 'fa-solid fa-sun';
} else {
    htmlElement.classList.remove('dark');
    themeIcon.className = 'fa-solid fa-moon';
}

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.className = 'fa-solid fa-sun';
    }
});

// Toggle Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Tutup menu saat link mobile diklik
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Handle Form Kontak Sederhana
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Terima kasih ${name}, pesan Anda telah berhasil dikirim!`);
    contactForm.reset();
});