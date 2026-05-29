/* ============================================
   Main Application Module
   ============================================ */
;(function () {
  'use strict';

  /* ---- DOM Cache ---- */
  const DOM = {
    header: document.getElementById('header'),
    hamburger: document.getElementById('hamburgerBtn'),
    nav: document.getElementById('mainNav'),
    backToTop: document.getElementById('backToTop'),
    ctaForm: document.getElementById('ctaForm'),
    contactForm: document.getElementById('contactForm'),
    filterBtns: document.querySelectorAll('.courses__filter'),
    courseCards: document.querySelectorAll('.course-card'),
    revealElements: document.querySelectorAll('[data-reveal]'),
    testimonialTrack: document.querySelector('.testimonials__track'),
    prevTestimonial: document.getElementById('prevTestimonial'),
    nextTestimonial: document.getElementById('nextTestimonial'),
    testimonialDots: document.getElementById('testimonialDots'),
    counters: document.querySelectorAll('.hero__stat-number'),
    navLinks: document.querySelectorAll('.header__link'),
    mobileNavLinks: document.querySelectorAll('.header__nav .header__link')
  };

  let navOverlay = null;

  /* ---- Utility Functions ---- */
  function sanitize(str) {
    const el = document.createElement('div');
    el.textContent = str;
    return el.innerHTML;
  }

  function toPersianNum(num) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(num).replace(/\d/g, d => persianDigits[d]);
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /* ---- Header Scroll Effect ---- */
  function initHeaderScroll() {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        DOM.header.classList.add('scrolled');
      } else {
        DOM.header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', debounce(handleScroll, 10), { passive: true });
    handleScroll();
  }

  /* ---- Mobile Navigation ---- */
  function initMobileNav() {
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    navOverlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(navOverlay);

    function openNav() {
      DOM.hamburger.classList.add('active');
      DOM.hamburger.setAttribute('aria-expanded', 'true');
      DOM.nav.classList.add('open');
      navOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      DOM.hamburger.classList.remove('active');
      DOM.hamburger.setAttribute('aria-expanded', 'false');
      DOM.nav.classList.remove('open');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    DOM.hamburger.addEventListener('click', () => {
      const isOpen = DOM.nav.classList.contains('open');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    navOverlay.addEventListener('click', closeNav);

    DOM.mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && DOM.nav.classList.contains('open')) {
        closeNav();
        DOM.hamburger.focus();
      }
    });
  }

  /* ---- Active Nav Link on Scroll ---- */
  function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          DOM.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', debounce(handleScroll, 50), { passive: true });
  }

  /* ---- Back to Top ---- */
  function initBackToTop() {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        DOM.backToTop.classList.add('visible');
      } else {
        DOM.backToTop.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', debounce(handleScroll, 50), { passive: true });

    DOM.backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Scroll Reveal Animation ---- */
  function initReveal() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      DOM.revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    DOM.revealElements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 80}ms`;
      observer.observe(el);
    });
  }

  /* ---- Counter Animation ---- */
  function initCounters() {
    let counted = false;

    function animateCounters() {
      if (counted) return;

      DOM.counters.forEach(counter => {
        const target = parseInt(counter.dataset.target, 10);
        const duration = 2000;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = toPersianNum(current);
        }, 16);
      });

      counted = true;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (DOM.counters.length > 0) {
      observer.observe(DOM.counters[0].closest('.hero__stats'));
    }
  }

  /* ---- Course Filter ---- */
  function initCourseFilter() {
    DOM.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        DOM.filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        DOM.courseCards.forEach(card => {
          const category = card.dataset.category;

          if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp 0.5s ease forwards';
          } else {
            card.classList.add('hidden');
            card.style.animation = '';
          }
        });
      });
    });
  }

  /* ---- Testimonial Slider ---- */
  function initTestimonialSlider() {
    if (!DOM.testimonialTrack) return;

    const cards = DOM.testimonialTrack.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    let currentIndex = 0;
    let cardsPerView = 3;
    let autoSlideTimer = null;

    function getCardsPerView() {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    }

    function createDots() {
      DOM.testimonialDots.innerHTML = '';
      const maxIndex = totalCards - cardsPerView;
      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('button');
        dot.className = 'testimonials__dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `نمایش نظر ${toPersianNum(i + 1)}`);
        dot.addEventListener('click', () => goToSlide(i));
        DOM.testimonialDots.appendChild(dot);
      }
    }

    function updateDots() {
      const dots = DOM.testimonialDots.querySelectorAll('.testimonials__dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function goToSlide(index) {
      const maxIndex = totalCards - cardsPerView;
      currentIndex = Math.max(0, Math.min(index, maxIndex));

      const cardWidth = cards[0].offsetWidth;
      const gap = parseInt(getComputedStyle(DOM.testimonialTrack).gap) || 24;
      const offset = currentIndex * (cardWidth + gap);

      DOM.testimonialTrack.style.transform = `translateX(${offset}px)`;
      updateDots();
    }

    function nextSlide() {
      const maxIndex = totalCards - cardsPerView;
      goToSlide(currentIndex >= maxIndex ? 0 : currentIndex + 1);
    }

    function prevSlide() {
      const maxIndex = totalCards - cardsPerView;
      goToSlide(currentIndex <= 0 ? maxIndex : currentIndex - 1);
    }

    function startAutoSlide() {
      stopAutoSlide();
      autoSlideTimer = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
      }
    }

    DOM.nextTestimonial.addEventListener('click', () => {
      prevSlide();
      startAutoSlide();
    });

    DOM.prevTestimonial.addEventListener('click', () => {
      nextSlide();
      startAutoSlide();
    });

    function handleResize() {
      cardsPerView = getCardsPerView();
      createDots();
      goToSlide(Math.min(currentIndex, totalCards - cardsPerView));
    }

    window.addEventListener('resize', debounce(handleResize, 200));

    handleResize();
    startAutoSlide();

    DOM.testimonialTrack.addEventListener('mouseenter', stopAutoSlide);
    DOM.testimonialTrack.addEventListener('mouseleave', startAutoSlide);
  }

  /* ---- Form Validation & Handling ---- */
  function validatePhone(phone) {
    return /^09[0-9]{9}$/.test(phone);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(element, message, type) {
    element.textContent = message;
    element.className = element.className.replace(/\b(success|error)\b/g, '').trim();
    element.classList.add(type);

    setTimeout(() => {
      element.textContent = '';
      element.className = element.className.replace(/\b(success|error)\b/g, '').trim();
    }, 5000);
  }

  function initCTAForm() {
    if (!DOM.ctaForm) return;

    DOM.ctaForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = sanitize(DOM.ctaForm.querySelector('#ctaName').value.trim());
      const phone = DOM.ctaForm.querySelector('#ctaPhone').value.trim();
      const lang = DOM.ctaForm.querySelector('#ctaLang').value;
      const msgEl = document.getElementById('ctaMessage');

      DOM.ctaForm.querySelectorAll('.cta__input').forEach(input => {
        input.classList.remove('error');
      });

      if (!name || name.length < 2) {
        DOM.ctaForm.querySelector('#ctaName').classList.add('error');
        showMessage(msgEl, 'لطفاً نام خود را وارد کنید', 'error');
        DOM.ctaForm.querySelector('#ctaName').focus();
        return;
      }

      if (!validatePhone(phone)) {
        DOM.ctaForm.querySelector('#ctaPhone').classList.add('error');
        showMessage(msgEl, 'شماره موبایل معتبر نیست (مثال: ۰۹۱۲۱۲۳۴۵۶۷)', 'error');
        DOM.ctaForm.querySelector('#ctaPhone').focus();
        return;
      }

      if (!lang) {
        DOM.ctaForm.querySelector('#ctaLang').classList.add('error');
        showMessage(msgEl, 'لطفاً زبان مورد نظر را انتخاب کنید', 'error');
        DOM.ctaForm.querySelector('#ctaLang').focus();
        return;
      }

      showMessage(msgEl, '✅ اطلاعات شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.', 'success');
      DOM.ctaForm.reset();
    });
  }

  function initContactForm() {
    if (!DOM.contactForm) return;

    DOM.contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = sanitize(DOM.contactForm.querySelector('#contactName').value.trim());
      const email = DOM.contactForm.querySelector('#contactEmail').value.trim();
      const subject = sanitize(DOM.contactForm.querySelector('#contactSubject').value.trim());
      const message = sanitize(DOM.contactForm.querySelector('#contactMessage').value.trim());
      const msgEl = document.getElementById('contactMessage-status');

      DOM.contactForm.querySelectorAll('input, textarea').forEach(el => {
        el.style.borderColor = '';
      });

      if (!name || name.length < 2) {
        DOM.contactForm.querySelector('#contactName').style.borderColor = 'var(--color-error)';
        showMessage(msgEl, 'لطفاً نام خود را وارد کنید', 'error');
        DOM.contactForm.querySelector('#contactName').focus();
        return;
      }

      if (!validateEmail(email)) {
        DOM.contactForm.querySelector('#contactEmail').style.borderColor = 'var(--color-error)';
        showMessage(msgEl, 'ایمیل وارد شده معتبر نیست', 'error');
        DOM.contactForm.querySelector('#contactEmail').focus();
        return;
      }

      if (!subject || subject.length < 3) {
        DOM.contactForm.querySelector('#contactSubject').style.borderColor = 'var(--color-error)';
        showMessage(msgEl, 'لطفاً موضوع پیام را وارد کنید', 'error');
        DOM.contactForm.querySelector('#contactSubject').focus();
        return;
      }

      if (!message || message.length < 10) {
        DOM.contactForm.querySelector('#contactMessage').style.borderColor = 'var(--color-error)';
        showMessage(msgEl, 'پیام باید حداقل ۱۰ کاراکتر باشد', 'error');
        DOM.contactForm.querySelector('#contactMessage').focus();
        return;
      }

      showMessage(msgEl, '✅ پیام شما با موفقیت ارسال شد. با تشکر از شما!', 'success');
      DOM.contactForm.reset();
    });
  }

  /* ---- Smooth Anchor Scrolling ---- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ---- Touch Swipe for Testimonials ---- */
  function initTouchSwipe() {
    if (!DOM.testimonialTrack) return;

    let startX = 0;
    let endX = 0;

    DOM.testimonialTrack.addEventListener('touchstart', e => {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });

    DOM.testimonialTrack.addEventListener('touchend', e => {
      endX = e.changedTouches[0].screenX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          DOM.prevTestimonial.click();
        } else {
          DOM.nextTestimonial.click();
        }
      }
    }, { passive: true });
  }

  /* ---- Initialize All Modules ---- */
  function init() {
    initHeaderScroll();
    initMobileNav();
    initActiveNavLink();
    initBackToTop();
    initReveal();
    initCounters();
    initCourseFilter();
    initTestimonialSlider();
    initCTAForm();
    initContactForm();
    initSmoothScroll();
    initTouchSwipe();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();