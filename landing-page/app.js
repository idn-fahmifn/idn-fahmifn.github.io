// --- Mobile Menu (Hamburger) Functionality ---

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Event listener untuk klik pada hamburger
hamburger.addEventListener("click", () => {
    // Toggle class 'active' pada hamburger dan menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Menutup menu jika salah satu link di dalam menu diklik
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// --- Contoh Fungsionalitas Tombol (Opsional) ---
const cartButtons = document.querySelectorAll('.add-to-cart-btn');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Ganti dengan logika penambahan ke keranjang belanja
        // Misalnya: update ikon keranjang, kirim data ke server, dll.
        alert('Produk ditambahkan ke keranjang!');
        
        // Contoh mengubah teks tombol setelah diklik
        button.textContent = 'Ditambahkan ✓';
        button.style.backgroundColor = '#28a745'; // Warna hijau
        
        setTimeout(() => {
             button.textContent = 'Tambah ke Keranjang';
             button.style.backgroundColor = 'var(--primary-color)';
        }, 2000); // Reset setelah 2 detik
    });
});