// Header and Footer Injection
const injectLayout = () => {
    const isSignupFlow = window.location.pathname.includes('signup');
    
    // Header
    const headerHTML = isSignupFlow ? '' : `
        <header id="global-header" class="fixed top-0 z-50 w-full px-6 py-4 glass-nav flex justify-between items-center text-white">
            <a href="index.html" class="decoration-none flex flex-col">
                <div class="text-2xl font-bold tracking-tighter">
                    <span class="font-headline tracking-widest">INTERVIEW</span><span class="font-headline text-brand-lime">MAXXING</span>
                </div>
                <span class="font-label text-[10px] text-brand-muted tracking-widest uppercase mt-[-4px]">Made by Anshuman</span>
            </a>
            
            <button id="mobile-menu-btn" class="md:hidden text-white hover:text-brand-lime z-50">
                <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
            
            <!-- Desktop Nav -->
            <nav class="hidden md:flex gap-8 items-center">
                <a href="index.html#features" class="font-label text-xs uppercase tracking-widest text-brand-muted hover:text-white transition-colors">Features</a>
                <a href="index.html#demo" class="font-label text-xs uppercase tracking-widest text-brand-muted hover:text-white transition-colors">Demo</a>
                <a href="pricing.html" class="font-label text-xs uppercase tracking-widest text-brand-muted hover:text-white transition-colors">Pricing</a>
                <a href="blog.html" class="font-label text-xs uppercase tracking-widest text-brand-muted hover:text-white transition-colors">Blog</a>
                <a href="about.html" class="font-label text-xs uppercase tracking-widest text-brand-muted hover:text-white transition-colors">About</a>
                <a href="faq.html" class="font-label text-xs uppercase tracking-widest text-brand-muted hover:text-white transition-colors">FAQ</a>
            </nav>
            
            <div class="hidden md:flex items-center gap-6">
                <a href="#" class="font-label text-xs uppercase tracking-widest text-white border border-transparent hover:border-white/20 px-4 py-2 transition-colors">Log In</a>
                <a href="signup-step1.html" class="font-label text-xs font-bold uppercase tracking-widest bg-brand-lime text-black px-5 py-2 hover:brightness-110 active:translate-y-[-2px] transition-all cta-shimmer">
                    Start Free →
                </a>
            </div>
            
            <!-- Mobile Nav Overlay -->
            <div id="mobile-menu" class="fixed inset-0 bg-[#050505] z-40 hidden flex-col items-center justify-center space-y-8 h-screen">
                <a href="index.html#features" class="font-headline text-4xl text-white hover:text-brand-lime transition-colors mobile-link">Features</a>
                <a href="index.html#demo" class="font-headline text-4xl text-white hover:text-brand-lime transition-colors mobile-link">Demo</a>
                <a href="pricing.html" class="font-headline text-4xl text-white hover:text-brand-lime transition-colors mobile-link">Pricing</a>
                <a href="blog.html" class="font-headline text-4xl text-white hover:text-brand-lime transition-colors mobile-link">Blog</a>
                <a href="about.html" class="font-headline text-4xl text-white hover:text-brand-lime transition-colors mobile-link">About</a>
                <a href="faq.html" class="font-headline text-4xl text-white hover:text-brand-lime transition-colors mobile-link">FAQ</a>
                
                <div class="mt-8 flex flex-col gap-4 w-64 text-center">
                    <a href="#" class="font-label text-sm uppercase tracking-widest text-white border border-white/20 py-3">Log In</a>
                    <a href="signup-step1.html" class="font-label text-sm uppercase tracking-widest bg-brand-lime text-black font-bold py-3 hover:brightness-110">Start Free →</a>
                </div>
            </div>
        </header>
    `;

    // Footer
    const footerHTML = isSignupFlow ? '' : `
        <footer class="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-6 mt-24">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div class="space-y-4">
                    <a href="index.html" class="decoration-none flex flex-col">
                        <div class="text-2xl font-bold tracking-tighter">
                            <span class="font-headline tracking-widest">INTERVIEW</span><span class="font-headline text-brand-lime">MAXXING</span>
                        </div>
                        <span class="font-label text-[10px] text-brand-muted tracking-widest uppercase mt-[-4px]">Made by Anshuman</span>
                    </a>
                    <p class="font-body text-brand-text text-sm">Stop Fumbling. Start Maxxing.</p>
                    <div class="flex gap-4 pt-4">
                        <a href="https://www.linkedin.com/in/anshuman-yadav-645732383/" target="_blank" rel="noopener noreferrer" class="text-brand-muted hover:text-brand-cobalt transition-colors"><span class="material-symbols-outlined">work</span></a>
                        <a href="https://x.com/bettercall14140" target="_blank" rel="noopener noreferrer" class="text-brand-muted hover:text-brand-cobalt transition-colors"><span class="material-symbols-outlined">alternate_email</span></a>
                        <a href="#" class="text-brand-muted hover:text-brand-cobalt transition-colors"><span class="material-symbols-outlined">photo_camera</span></a>
                        <a href="https://youtu.be/ZE_YEn-okfk?si=sdf-eWN-rei9bVfj" target="_blank" rel="noopener noreferrer" class="text-brand-muted hover:text-brand-cobalt transition-colors"><span class="material-symbols-outlined">play_circle</span></a>
                    </div>
                </div>
                
                <div class="space-y-4">
                    <h4 class="font-label text-xs uppercase tracking-widest text-white/50 mb-4">Product</h4>
                    <div class="flex flex-col gap-3 font-body text-brand-muted text-sm">
                        <a href="index.html#features" class="hover:text-brand-lime transition-colors">Features</a>
                        <a href="pricing.html" class="hover:text-brand-lime transition-colors">Pricing</a>
                        <a href="index.html#demo" class="hover:text-brand-lime transition-colors">Demo</a>
                        <a href="#" class="hover:text-brand-lime transition-colors">Resume Analyzer</a>
                        <a href="#" class="hover:text-brand-lime transition-colors">Question Bank</a>
                        <span class="text-brand-muted/50">Mobile App (Coming soon)</span>
                    </div>
                </div>

                <div class="space-y-4">
                    <h4 class="font-label text-xs uppercase tracking-widest text-white/50 mb-4">Company</h4>
                    <div class="flex flex-col gap-3 font-body text-brand-muted text-sm">
                        <a href="about.html" class="hover:text-brand-lime transition-colors">About</a>
                        <a href="blog.html" class="hover:text-brand-lime transition-colors">Blog</a>
                        <a href="#" class="hover:text-brand-lime transition-colors">Careers</a>
                        <a href="#" class="hover:text-brand-lime transition-colors">Press</a>
                        <a href="faq.html" class="hover:text-brand-lime transition-colors">Contact</a>
                    </div>
                </div>
                
                <div class="space-y-4">
                    <h4 class="font-label text-xs uppercase tracking-widest text-brand-cobalt mb-4">STAY IN THE LOOP</h4>
                    <div class="flex flex-col gap-3">
                        <form class="flex border border-white/10 hover:border-brand-cobalt focus-within:border-brand-cobalt transition-colors">
                            <input type="email" placeholder="you@email.com" class="bg-transparent text-white px-4 py-3 flex-1 font-body text-sm outline-none placeholder:text-brand-muted" required>
                            <button type="submit" class="bg-brand-lime text-black font-label text-xs px-4 uppercase font-bold hover:brightness-110">Subscribe →</button>
                        </form>
                        <p class="font-label text-[10px] uppercase text-brand-muted leading-relaxed">Weekly interview tips. No spam. Unsubscribe anytime.</p>
                    </div>
                </div>
            </div>
            
            <div class="max-w-7xl mx-auto px-6 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="font-label text-[10px] text-brand-muted">© 2026 InterviewMaxxing · All rights reserved. Website Developed by Anshuman</p>
                <div class="flex gap-6 font-label text-[10px] text-brand-muted">
                    <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" class="hover:text-white transition-colors">Cookie Policy</a>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('afterbegin', '<div class="fixed inset-0 grid-overlay-global z-[-1]"></div>');
    
    if(!isSignupFlow) {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
    
    bindInteractions();
};

const bindInteractions = () => {
    // Menu mobile
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');
    
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden', !isHidden);
            mobileMenu.classList.toggle('flex', isHidden);
            menuBtn.innerHTML = isHidden ? '<span class="material-symbols-outlined text-3xl">close</span>' : '<span class="material-symbols-outlined text-3xl">menu</span>';
        });
        
        links.forEach(l => l.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            menuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">menu</span>';
        }));
    }

    // Scroll Header Compression
    const header = document.getElementById('global-header');
    if(header) {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Active Route Highlighting
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('header nav a');
        navLinks.forEach(link => {
            if(link.getAttribute('href').includes(currentPath) && currentPath !== 'index.html') {
                link.classList.add('text-brand-lime');
                link.classList.remove('text-brand-muted');
            } else if (currentPath === 'index.html' && link.getAttribute('href').startsWith('index.html')) {
                // Ignore hash
            }
        });
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', injectLayout);
