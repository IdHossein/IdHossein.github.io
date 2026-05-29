<script setup lang="ts">
const socials = [
  {
    href: 'https://twitter.com/id_hossein',
    label: 'توییتر',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    fill: true,
  },
  {
    href: 'https://t.me/Hossein_695',
    label: 'تلگرام',
    path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
    fill: true,
  },
  {
    href: 'https://github.com/IdHossein',
    label: 'گیت‌هاب',
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    fill: true,
  },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center pt-20 pb-16">
    <div class="max-w-7xl mx-auto px-3xl w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- محتوا -->
        <div class="text-center lg:text-start order-2 lg:order-1">

          <!-- badge آماده همکاری -->
          <div class="inline-flex items-center gap-sm glass px-lg py-sm rounded-full mb-2xl animate-fade-in">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span class="text-sm text-dark-300">آماده همکاری</span>
          </div>

          <!-- عنوان اصلی -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2xl leading-tight animate-fade-in-up">
            <span class="text-white">سلام، من</span>
            <br>
            <span class="bg-gradient-to-l from-primary-400 to-primary-600 bg-clip-text text-transparent">حسین</span>
            <span class="text-white"> هستم</span>
          </h1>

          <!-- زیرعنوان -->
          <p class="text-xl sm:text-2xl text-dark-300 mb-lg animate-fade-in-up animation-delay-100">
            برنامه‌نویس فول استک
          </p>

          <!-- توضیحات -->
          <p class="text-dark-400 text-lg mb-3xl max-w-[36rem] mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-200">
            با تجربه در توسعه وب‌اپلیکیشن‌های مدرن و مقیاس‌پذیر با استفاده از
            <span class="text-primary-400">Laravel</span>،
            <span class="text-primary-400">PHP</span>،
            <span class="text-primary-400">JavaScript</span> و
            <span class="text-primary-400">Python</span>
          </p>

          <!-- دکمه‌های اصلی -->
          <div class="flex flex-wrap gap-lg justify-center lg:justify-start animate-fade-in-up animation-delay-300">
            <button
              @click="scrollTo('projects')"
              class="inline-flex items-center gap-sm px-xl py-md bg-gradient-to-l from-primary-500 to-primary-700 text-white font-semibold rounded-xl shadow-button hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(99,102,241,0.5)] transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              مشاهده نمونه کارها
            </button>

            <a
              href="/resume.pdf"
              download
              class="inline-flex items-center gap-sm px-xl py-md glass text-white font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              دانلود رزومه
            </a>
          </div>

          <!-- لینک‌های اجتماعی -->
          <div class="flex items-center gap-lg mt-3xl justify-center lg:justify-start animate-fade-in-up animation-delay-400">
            <span class="text-dark-500 text-sm">شبکه‌های اجتماعی:</span>
            <a
              v-for="social in socials"
              :key="social.href"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="flex items-center justify-center w-10 h-10 rounded-lg glass text-dark-400 hover:text-primary-400 hover:border-primary-500/50 hover:-translate-y-0.5 transition-all duration-150"
            >
              <svg class="w-5 h-5" :fill="social.fill ? 'currentColor' : 'none'" viewBox="0 0 24 24">
                <path :d="social.path" />
              </svg>
            </a>
          </div>
        </div>

        <!-- تصویر پروفایل -->
        <div class="order-1 lg:order-2 flex justify-center animate-fade-in">
          <div class="relative">
            <!-- هاله‌ی درخشان -->
            <div class="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-full blur-2xl"></div>
            <div class="absolute -inset-1 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full opacity-20 animate-pulse"></div>

            <!-- آواتار -->
            <div class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass p-2">
              <svg viewBox="0 0 200 200" class="w-full h-full rounded-full" aria-label="آواتار حسین - برنامه‌نویس فول استک" role="img">
                <defs>
                  <radialGradient id="bgGrad" cx="40%" cy="35%" r="65%">
                    <stop offset="0%" stop-color="#4f46e5"/>
                    <stop offset="100%" stop-color="#0f0e27"/>
                  </radialGradient>
                  <linearGradient id="letterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#e0e7ff"/>
                    <stop offset="100%" stop-color="#a5b4fc"/>
                  </linearGradient>
                  <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="letterShadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#4338ca" flood-opacity="0.6"/>
                  </filter>
                </defs>

                <!-- پس‌زمینه اصلی -->
                <circle cx="100" cy="100" r="100" fill="url(#bgGrad)"/>

                <!-- نور درخشان مرکزی -->
                <circle cx="80" cy="75" r="45" fill="#6366f1" opacity="0.12" filter="url(#softGlow)"/>

                <!-- حلقه‌های تزئینی -->
                <circle cx="100" cy="100" r="82" fill="none" stroke="#6366f1" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="4 6"/>
                <circle cx="100" cy="100" r="66" fill="none" stroke="#818cf8" stroke-width="0.5" stroke-opacity="0.15"/>

                <!-- نقاط دکوراتیو -->
                <circle cx="32" cy="55"  r="2.5" fill="#818cf8" opacity="0.5"/>
                <circle cx="168" cy="48" r="1.8" fill="#a5b4fc" opacity="0.45"/>
                <circle cx="22" cy="130" r="1.5" fill="#6366f1" opacity="0.6"/>
                <circle cx="175" cy="140" r="2"   fill="#818cf8" opacity="0.4"/>
                <circle cx="55"  cy="172" r="1.5" fill="#a5b4fc" opacity="0.4"/>
                <circle cx="148" cy="168" r="1"   fill="#818cf8" opacity="0.5"/>
                <circle cx="44"  cy="95"  r="1"   fill="#c7d2fe" opacity="0.35"/>
                <circle cx="158" cy="105" r="1.2" fill="#c7d2fe" opacity="0.35"/>

                <!-- حرف S -->
                <text
                  x="100" y="122"
                  text-anchor="middle"
                  font-family="system-ui, sans-serif"
                  font-size="90"
                  font-weight="700"
                  fill="url(#letterGrad)"
                  filter="url(#letterShadow)"
                  letter-spacing="-2"
                >ح</text>

                <!-- خط زیر حرف -->
                <rect x="68" y="132" width="64" height="3" rx="1.5" fill="#818cf8" opacity="0.35"/>
              </svg>
            </div>

            <!-- بج تجربه -->
            <div class="absolute -bottom-2 -end-2 glass px-lg py-sm rounded-xl animate-bounce-slow">
              <div class="flex items-center gap-sm">
                <span class="text-2xl">🚀</span>
                <span class="text-sm font-medium">+۳ سال تجربه</span>
              </div>
            </div>

            <!-- آیکون شناور ۱ -->
            <div class="absolute top-4 -start-4 glass p-md rounded-xl animate-float">
              <svg class="w-6 h-6 text-primary-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>

            <!-- آیکون شناور ۲ -->
            <div class="absolute bottom-12 -start-6 glass p-md rounded-xl animate-float animation-delay-500">
              <svg class="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- نشانگر اسکرول -->
      <div class="hidden lg:flex justify-center mt-16 animate-fade-in animation-delay-500">
        <a
          href="#about"
          @click.prevent="scrollTo('about')"
          class="flex flex-col items-center gap-sm text-dark-500 hover:text-primary-400 transition-colors duration-150"
        >
          <span class="text-sm">اسکرول کنید</span>
          <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
