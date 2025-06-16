// Translations
const translations = {
    fr: {
        'menu-home': 'Accueil',
        'menu-story': 'Histoire',
        'menu-products': 'Produits',
        'menu-contact': 'Contact',
        'hero-subtitle': 'Sucette glacée 🧊 & Boissons - La Fraîcheur Ultime Depuis 50 Ans',
        'cta-discover': 'Découvrir',
        'anniversary-title': 'ans de POLO',
        'story-title': 'Une Histoire Glacée',
        'story-text': 'La sucette à glacer Polo fête ses <strong>50 ans en 2024</strong> ! A cette occasion Polo passe en Mode FreezeStyle. La marque iconique pour toutes les générations réaffirme sa culture <strong>STREET</strong> et <strong>POP</strong> à travers une nouvelle fraîcheur d\'esprit !',
        'design-title': 'Nouveau Design',
        'design-text': 'Polo adopte un nouveau design avec un logo et des packagings rénovés, pour une approche graphique plus fraîche, fun et colorée. Redécouvrez Polo à travers une grande campagne de communication incluant une publicité vidéo diffusée sur les plateformes de replay TV.',
        'stat-years': 'Ans d\'histoire',
        'stat-units': 'Unités vendues',
        'stat-flavors': 'Saveurs uniques',
        'products-title': 'La Gamme Glacée',
        'products-intro': 'POLO بولو - La référence incontournable des produits rafraîchissants. Découvrez nos sucettes glacées aux saveurs délicieuses, prêtes à consommer pour une fraîcheur instantanée!',
        'badge-frozen': 'Glacée',
        'flavor-strawberry': 'Fraise',
        'desc-strawberry': 'Le goût classique et délicieux des fraises fraîches',
        'flavor-bubblegum': 'Bubble Gum Berry',
        'desc-bubblegum': 'Un mélange unique de bubble gum et fruits rouges',
        'flavor-lemon': 'Citron',
        'desc-lemon': 'L\'acidité parfaite pour les journées chaudes',
        'flavor-tuttifrutti': 'Tutti Frutti',
        'desc-tuttifrutti': 'Un festival de saveurs fruitées tropicales',
        'flavor-cottoncandy': 'Barbe à Papa',
        'desc-cottoncandy': 'La douceur sucrée de la barbe à papa',
        'flavor-mint': 'Menthe',
        'desc-mint': 'La fraîcheur intense de la menthe glacée',
        'cta-title': 'Prêt pour une explosion de fraîcheur?',
        'cta-subtitle': 'Contactez-nous pour commander nos produits',
        'cta-call-now': 'Appelez maintenant',
        'footer-tagline': 'Sucette glacée & Boissons depuis 1974',
        'footer-rights': 'Tous droits réservés.',
        'contact-title': 'Contactez-nous',
        'company-desc': 'Sucette glacée & Boissons',
        'phone-label': 'Téléphone',
        'location-label': 'Localisation',
        'view-map': 'Voir sur la carte',
        'open-maps': 'Ouvrir dans Google Maps'
    },
    ar: {
        'menu-home': 'الرئيسية',
        'menu-story': 'القصة',
        'menu-products': 'المنتجات',
        'menu-contact': 'اتصل بنا',
        'hero-subtitle': 'مصاصات مجمدة 🧊 ومشروبات - الانتعاش المطلق منذ 50 عامًا',
        'cta-discover': 'اكتشف',
        'anniversary-title': 'عامًا من POLO',
        'story-title': 'قصة مجمدة',
        'story-text': 'تحتفل مصاصة Polo المجمدة بـ <strong>50 عامًا في 2024</strong>! بهذه المناسبة، يدخل Polo في وضع FreezeStyle. العلامة التجارية الأيقونية لجميع الأجيال تؤكد مجددًا على ثقافة <strong>الشارع</strong> و<strong>البوب</strong> من خلال روح جديدة منعشة!',
        'design-title': 'تصميم جديد',
        'design-text': 'يتبنى Polo تصميمًا جديدًا مع شعار وعبوات مجددة، لنهج رسومي أكثر انتعاشًا ومرحًا وألوانًا. أعد اكتشاف Polo من خلال حملة اتصال كبيرة تتضمن إعلان فيديو يُبث على منصات إعادة التشغيل التلفزيونية.',
        'stat-years': 'سنوات من التاريخ',
        'stat-units': 'وحدة مباعة',
        'stat-flavors': 'نكهات فريدة',
        'products-title': 'المجموعة المجمدة',
        'products-intro': 'POLO بولو - المرجع الأساسي للمنتجات المنعشة. اكتشف مصاصاتنا المجمدة بنكهات لذيذة، جاهزة للاستهلاك لانتعاش فوري!',
        'badge-frozen': 'مجمدة',
        'flavor-strawberry': 'ذوق الفراولة',
        'desc-strawberry': 'الطعم الكلاسيكي اللذيذ للفراولة الطازجة',
        'flavor-bubblegum': 'ذوق العلك ذوق التوت البري',
        'desc-bubblegum': 'مزيج فريد من العلكة والتوت الأحمر',
        'flavor-lemon': 'ذوق الليمون',
        'desc-lemon': 'الحموضة المثالية للأيام الحارة',
        'flavor-tuttifrutti': 'ذوق التوتي فروتي',
        'desc-tuttifrutti': 'مهرجان من النكهات الفاكهية الاستوائية',
        'flavor-cottoncandy': 'ذوق لحية بابا',
        'desc-cottoncandy': 'الحلاوة السكرية لغزل البنات',
        'flavor-mint': 'نعناع',
        'desc-mint': 'الانتعاش الشديد للنعناع المجمد',
        'cta-title': 'مستعد لانفجار من الانتعاش؟',
        'cta-subtitle': 'اتصل بنا لطلب منتجاتنا',
        'cta-call-now': 'اتصل الآن',
        'footer-tagline': 'مصاصات مجمدة ومشروبات منذ 1974',
        'footer-rights': 'جميع الحقوق محفوظة.',
        'contact-title': 'اتصل بنا',
        'company-desc': 'مصاصات مجمدة ومشروبات',
        'phone-label': 'الهاتف',
        'location-label': 'الموقع',
        'view-map': 'عرض على الخريطة',
        'open-maps': 'فتح في خرائط جوجل'
    },
    en: {
        'menu-home': 'Home',
        'menu-story': 'Story',
        'menu-products': 'Products',
        'menu-contact': 'Contact',
        'hero-subtitle': 'Ice Lollies 🧊 & Beverages - The Ultimate Freshness For 50 Years',
        'cta-discover': 'Discover',
        'anniversary-title': 'years of POLO',
        'story-title': 'A Frozen Story',
        'story-text': 'Polo ice lolly celebrates its <strong>50th anniversary in 2024</strong>! For this occasion, Polo goes into FreezeStyle Mode. The iconic brand for all generations reaffirms its <strong>STREET</strong> and <strong>POP</strong> culture through a new spirit of freshness!',
        'design-title': 'New Design',
        'design-text': 'Polo adopts a new design with a renovated logo and packaging, for a fresher, more fun and colorful graphic approach. Rediscover Polo through a major communication campaign including a video advertisement broadcast on TV replay platforms.',
        'stat-years': 'Years of history',
        'stat-units': 'Units sold',
        'stat-flavors': 'Unique flavors',
        'products-title': 'The Frozen Range',
        'products-intro': 'POLO بولو - The essential reference for refreshing products. Discover our frozen lollipops with delicious flavors, ready to eat for instant freshness!',
        'badge-frozen': 'Frozen',
        'flavor-strawberry': 'Strawberry',
        'desc-strawberry': 'The classic and delicious taste of fresh strawberries',
        'flavor-bubblegum': 'Bubble Gum Berry',
        'desc-bubblegum': 'A unique blend of bubble gum and red berries',
        'flavor-lemon': 'Lemon',
        'desc-lemon': 'The perfect acidity for hot days',
        'flavor-tuttifrutti': 'Tutti Frutti',
        'desc-tuttifrutti': 'A festival of tropical fruit flavors',
        'flavor-cottoncandy': 'Cotton Candy',
        'desc-cottoncandy': 'The sweet sweetness of cotton candy',
        'flavor-mint': 'Mint',
        'desc-mint': 'The intense freshness of frozen mint',
        'cta-title': 'Ready for an explosion of freshness?',
        'cta-subtitle': 'Contact us to order our products',
        'cta-call-now': 'Call now',
        'footer-tagline': 'Ice lollies & Beverages since 1974',
        'footer-rights': 'All rights reserved.',
        'contact-title': 'Contact us',
        'company-desc': 'Ice lollies & Beverages',
        'phone-label': 'Phone',
        'location-label': 'Location',
        'view-map': 'View on map',
        'open-maps': 'Open in Google Maps'
    }
};

// DOM Elements
const preloader = document.getElementById('preloader');
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks = document.querySelectorAll('.menu-list a');
const magicButton = document.getElementById('magicButton');
const ctaButton = document.querySelector('.cta-button');
const statNumbers = document.querySelectorAll('.stat-number');
const langBtns = document.querySelectorAll('.lang-btn');

// Current language
let currentLang = 'fr';

// Language switcher
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        switchLanguage(lang);
    });
});

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    langBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translated elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Reset counters
    statNumbers.forEach(stat => {
        stat.textContent = '0';
        if (stat.classList.contains('counted')) {
            const target = parseInt(stat.dataset.count);
            animateCounter(stat, target);
        }
    });
}

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hide');
        initAnimations();
    }, 2000);
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu on link click
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for CTA button
ctaButton.addEventListener('click', () => {
    const target = document.querySelector('.anniversary');
    target.scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (mobileMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});

// Magic button confetti effect
magicButton.addEventListener('click', () => {
    createConfetti();
    // Vibrate on mobile if supported
    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
    }
});

// Enhanced confetti creation
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    const shapes = ['circle', 'square', 'triangle'];
    const confettiCount = 60;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 15 + 10;
        
        confetti.className = 'confetti-piece';
        confetti.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            right: ${magicButton.offsetLeft + 35}px;
            bottom: ${window.innerHeight - magicButton.offsetTop + 35}px;
            border-radius: ${shape === 'circle' ? '50%' : '0'};
            transform: ${shape === 'triangle' ? 'rotate(45deg)' : 'none'};
            animation-duration: ${Math.random() * 2 + 2}s;
            animation-delay: ${Math.random() * 0.5}s;
        `;
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Animated counter for stats
function animateCounter(element, target) {
    const duration = 2500;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };
    
    updateCounter();
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animate counters
                if (entry.target.classList.contains('stat-number') && !entry.target.classList.contains('counted')) {
                    const target = parseInt(entry.target.dataset.count);
                    animateCounter(entry.target, target);
                    entry.target.classList.add('counted');
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.story-card, .product-card, .stat-item, .contact-item').forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroImage && heroContent) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0005})`;
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.002);
    }
});

// Dynamic theme color
const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'];
let colorIndex = 0;

setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.querySelector('meta[name="theme-color"]').content = colors[colorIndex];
}, 5000);

// Product card hover effect
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--x', `${x}px`);
        this.style.setProperty('--y', `${y}px`);
    });
});

// Touch interactions for mobile
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    productCards.forEach(card => {
        let touchStartX = 0;
        let touchStartY = 0;
        
        card.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        });
        
        card.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const diffX = touchX - touchStartX;
            const diffY = touchY - touchStartY;
            
            const rotateY = diffX * 0.1;
            const rotateX = diffY * -0.1;
            
            card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(20px)`;
        });
        
        card.addEventListener('touchend', () => {
            card.style.transform = '';
        });
    });
}

// Performance optimization - Lazy load images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

// Ripple effect for buttons on mobile
if ('ontouchstart' in window) {
    document.querySelectorAll('button, .product-card').forEach(element => {
        element.addEventListener('touchstart', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.touches[0].clientX - rect.left - size / 2;
            const y = e.touches[0].clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: translate(${x}px, ${y}px) scale(0);
                pointer-events: none;
                animation: rippleEffect 0.6s ease-out;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            to {
                transform: translate(var(--x), var(--y)) scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle offline/online status
window.addEventListener('online', () => {
    console.log('Back online');
});

window.addEventListener('offline', () => {
    console.log('Gone offline');
});