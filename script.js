document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Pengendali Menu Mudah Alih (Mobile Menu) ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.replace('fa-bars', 'fa-xmark');
                } else {
                    icon.classList.replace('fa-xmark', 'fa-bars');
                }
            }
        });
    }

    // --- 2. Sistem Penapisan Katalog Dinamik ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transition = 'opacity 0.4s ease';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- 3. Simulasi Tambah Ke Troli (Add to Cart) ---
    const cartBadge = document.querySelector('.shopping-cart .badge');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            if (cartBadge) cartBadge.textContent = cartCount;

            button.style.transform = 'scale(0.9)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // --- 4. Fungsi Papar Perincian Servis (Klik Kad) ---
    window.showDetail = function(serviceType) {
        const detailBox = document.getElementById('service-detail-box');
        if (!detailBox) return;

        // Buka/papar kotak utama
        detailBox.style.display = 'block';

        // Sembunyikan kandungan lain
        const allDetails = document.querySelectorAll('.detail-content');
        allDetails.forEach(detail => detail.classList.remove('active'));

        // Tunjukkan kandungan yang diklik sahaja
        const selectedDetail = document.getElementById('detail-' + serviceType);
        if (selectedDetail) {
            selectedDetail.classList.add('active');
        }

        // Skrol lancar ke kotak detail
        detailBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    window.closeDetail = function() {
        const detailBox = document.getElementById('service-detail-box');
        if (detailBox) detailBox.style.display = 'none';
    };

});