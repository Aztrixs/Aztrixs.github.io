/**
 * Main JavaScript for Apple-Style Landing Page
 * Handles: Scroll animations, dark mode, mobile navigation, smooth scrolling
 */

(function() {
    'use strict';

    // ==========================================================================
    // Configuration
    // ==========================================================================
    const CONFIG = {
        scrollRevealThreshold: 0.15,
        navScrollThreshold: 50,
        animationDelay: 100
    };

    // ==========================================================================
    // DOM Elements
    // ==========================================================================
    const elements = {
        nav: document.getElementById('nav'),
        navToggle: document.getElementById('navToggle'),
        navMenu: document.getElementById('navMenu'),
        themeToggle: document.getElementById('themeToggle'),
        revealElements: document.querySelectorAll('.reveal')
    };

    // ==========================================================================
    // Theme Management
    // ==========================================================================
    const ThemeManager = {
        STORAGE_KEY: 'theme',
        DARK: 'dark',
        LIGHT: 'light',

        init() {
            const savedTheme = localStorage.getItem(this.STORAGE_KEY);
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (savedTheme) {
                this.setTheme(savedTheme);
            } else if (prefersDark) {
                this.setTheme(this.DARK);
            }

            // Listen for system theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem(this.STORAGE_KEY)) {
                    this.setTheme(e.matches ? this.DARK : this.LIGHT);
                }
            });

            // Theme toggle button
            if (elements.themeToggle) {
                elements.themeToggle.addEventListener('click', () => this.toggle());
            }
        },

        setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(this.STORAGE_KEY, theme);
        },

        toggle() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === this.DARK ? this.LIGHT : this.DARK;
            this.setTheme(newTheme);
        },

        get current() {
            return document.documentElement.getAttribute('data-theme') || this.LIGHT;
        }
    };

    // ==========================================================================
    // Mobile Navigation
    // ==========================================================================
    const MobileNav = {
        isOpen: false,

        init() {
            if (!elements.navToggle || !elements.navMenu) return;

            elements.navToggle.addEventListener('click', () => this.toggle());

            // Close menu when clicking on links
            elements.navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => this.close());
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (this.isOpen &&
                    !elements.navMenu.contains(e.target) &&
                    !elements.navToggle.contains(e.target)) {
                    this.close();
                }
            });
        },

        toggle() {
            this.isOpen ? this.close() : this.open();
        },

        open() {
            this.isOpen = true;
            elements.navToggle.classList.add('active');
            elements.navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        },

        close() {
            this.isOpen = false;
            elements.navToggle.classList.remove('active');
            elements.navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // ==========================================================================
    // Scroll Reveal Animation
    // ==========================================================================
    const ScrollReveal = {
        observer: null,

        init() {
            if (!elements.revealElements.length) return;

            // Use Intersection Observer for efficient scroll detection
            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersect(entries),
                {
                    threshold: CONFIG.scrollRevealThreshold,
                    rootMargin: '0px 0px -50px 0px'
                }
            );

            elements.revealElements.forEach((el, index) => {
                // Add staggered delay based on position
                el.style.transitionDelay = `${index * CONFIG.animationDelay}ms`;
                this.observer.observe(el);
            });
        },

        handleIntersect(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once revealed
                    this.observer.unobserve(entry.target);
                }
            });
        }
    };

    // ==========================================================================
    // Smooth Scroll
    // ==========================================================================
    const SmoothScroll = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
            });
        },

        handleClick(e, anchor) {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const navHeight = elements.nav ? elements.nav.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update URL without jumping
            history.pushState(null, null, href);
        }
    };

    // ==========================================================================
    // Navigation Scroll Effects
    // ==========================================================================
    const NavScrollEffect = {
        lastScroll: 0,

        init() {
            if (!elements.nav) return;

            window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
        },

        handleScroll() {
            const currentScroll = window.pageYOffset;

            // Add/remove scrolled class for styling
            if (currentScroll > CONFIG.navScrollThreshold) {
                elements.nav.classList.add('scrolled');
            } else {
                elements.nav.classList.remove('scrolled');
            }

            this.lastScroll = currentScroll;
        }
    };

    // ==========================================================================
    // Parallax Effect (subtle, Apple-style)
    // ==========================================================================
    const ParallaxEffect = {
        elements: [],

        init() {
            this.elements = document.querySelectorAll('.project-mockup');
            if (!this.elements.length) return;

            window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
        },

        handleScroll() {
            const scrolled = window.pageYOffset;

            this.elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible) {
                    const speed = 0.05;
                    const yPos = (rect.top - window.innerHeight / 2) * speed;
                    el.style.transform = `translateY(${yPos}px)`;
                }
            });
        }
    };

    // ==========================================================================
    // Cursor Effect (optional, adds premium feel)
    // ==========================================================================
    const CursorEffect = {
        cursor: null,

        init() {
            // Only on non-touch devices
            if ('ontouchstart' in window) return;

            this.createCursor();
            this.addEventListeners();
        },

        createCursor() {
            this.cursor = document.createElement('div');
            this.cursor.className = 'custom-cursor';
            this.cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
            document.body.appendChild(this.cursor);

            // Add cursor styles dynamically
            const styles = document.createElement('style');
            styles.textContent = `
                .custom-cursor {
                    position: fixed;
                    pointer-events: none;
                    z-index: 9999;
                    mix-blend-mode: difference;
                }
                .cursor-dot {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background: white;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    transition: transform 0.1s ease;
                }
                .cursor-ring {
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    transition: transform 0.2s ease, opacity 0.2s ease;
                }
                .custom-cursor.hover .cursor-ring {
                    transform: translate(-50%, -50%) scale(1.5);
                    opacity: 0.5;
                }
                body { cursor: none; }
                a, button { cursor: none; }
            `;
            document.head.appendChild(styles);
        },

        addEventListeners() {
            document.addEventListener('mousemove', (e) => {
                this.cursor.style.left = e.clientX + 'px';
                this.cursor.style.top = e.clientY + 'px';
            });

            // Add hover effect on interactive elements
            document.querySelectorAll('a, button, .btn').forEach(el => {
                el.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
                el.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
            });
        }
    };

    // ==========================================================================
    // Initialize
    // ==========================================================================
    function init() {
        // Core functionality
        ThemeManager.init();
        MobileNav.init();
        ScrollReveal.init();
        SmoothScroll.init();
        NavScrollEffect.init();

        // Optional enhancements
        // ParallaxEffect.init(); // Uncomment for subtle parallax
        // CursorEffect.init(); // Uncomment for custom cursor

        // Log initialization
        console.log('🍎 Apple-style landing page initialized');
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
