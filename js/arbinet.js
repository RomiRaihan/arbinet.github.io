// Toggle hamburger menu visibility
// Auto-slide every 3 seconds
const hamburger = document.getElementById("hamburger");
navbarNav = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
  hamburger.classList.toggle("showx");
});
const positions = ["top", "right", "bottom", "left"];
const images = [
  document.getElementById("img1"),
  document.getElementById("img2"),
  document.getElementById("img3"),
  document.getElementById("img4"),
];

function rotatePositions() {
  // ambil class posisi terakhir, pindahkan ke depan
  const last = positions.pop();
  positions.unshift(last);

  // update posisi setiap gambar
  images.forEach((img, index) => {
    img.className = positions[index];
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // Hero muncul perlahan saat halaman dibuka
  const hero = document.querySelector(".hero");
  hero.classList.add("show");

  // Elemen lain muncul saat discroll
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-left, .slide-right"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

// Jalankan setiap 2 detik
setInterval(rotatePositions, 2000);
const cardBtns = document.querySelectorAll(".card-btn");

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // Abaikan jika href hanya "#"
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();

      // Ambil posisi elemen di halaman
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      // Ambil nilai 1rem dari root html
      const remInPx = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );

      // Offset = 5rem
      const offset = 7 * remInPx;

      // Scroll ke posisi dengan offset 5rem
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  });
});
cardBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = btn.getAttribute("data-id"); // Ambil ID dari atribut data-id
    const produk = document.getElementById(id); // Cari elemen dengan ID tersebut

    // Sembunyikan semua elemen produk terlebih dahulu
    document.querySelectorAll(".produk").forEach((el) => {
      el.style.display = "none";
    });

    // Tampilkan elemen dengan ID sesuai
    if (produk) {
      produk.style.display = "flex";
    }
  });
});
document.querySelectorAll(".produk .close-x").forEach((closeBtn) => {
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const parentProduk = closeBtn.closest(".produk"); // Cari elemen produk terdekat
    if (parentProduk) {
      parentProduk.style.display = "none"; // Sembunyikan elemen produk
    }
  });
});
// Tangkap elemen form
const form = document.getElementById("contactForm");

// Tambahkan event listener untuk form submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah submit default

  // Ambil nilai dari input]
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const message = document.getElementById("message").value;

  // Nomor WhatsApp tujuan (ganti dengan nomor Anda)
  const whatsappNumber = "6288214333695"; // Format internasional tanpa tanda '+'

  // Buat URL untuk WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Nama: ${name}\nKontak: ${contact}\nPesan: ${message}`
  )}`;

  // Arahkan ke URL WhatsApp
  window.open(whatsappURL, "_blank");
});
