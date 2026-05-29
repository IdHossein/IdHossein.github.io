<script setup lang="ts">
interface Project {
  src: string
  title: string
  title2?: string
  desc: string
  tags: { label: string; color: string }[]
  techs: string[]
  href: string
}

const projects: Project[] = [
  {
    src:   '/projects/oil-shop/index.html',
    title: 'فروشگاه روغن خودرو',
    desc:  'فروشگاه آنلاین تخصصی روغن موتور و محصولات مرتبط با خودرو با طراحی مدرن و کاربرپسند',
    tags:  [
      { label: 'فروشگاهی', color: 'bg-amber-500/20 text-amber-400' },
      { label: 'Live Preview', color: 'bg-blue-500/20 text-blue-400' },
    ],
    techs: ['PHP', 'Laravel', 'MySQL', 'Tailwind'],
    href:  '/projects/oil-shop/index.html',
  },
  {
    src:   '/projects/sports-store/index.html',
    title: 'فروشگاه لوازم ورزشی',
    desc:  'فروشگاه اینترنتی تجهیزات ورزشی با دسته‌بندی حرفه‌ای و تجربه کاربری سریع و روان',
    tags:  [
      { label: 'ورزشی', color: 'bg-green-500/20 text-green-400' },
      { label: 'Live Preview', color: 'bg-blue-500/20 text-blue-400' },
    ],
    techs: ['JavaScript', 'PHP', 'MySQL', 'CSS'],
    href:  '/projects/sports-store/index.html',
  },
  {
    src:   '/projects/language-academy/index.html',
    title: 'سایت آموزشگاه زبان',
    desc:  'وب‌سایت معرفی دوره‌ها و ثبت‌نام آموزشگاه زبان با طراحی حرفه‌ای و ساختار مدرن',
    tags:  [
      { label: 'آموزشی', color: 'bg-purple-500/20 text-purple-400' },
      { label: 'Live Preview', color: 'bg-blue-500/20 text-blue-400' },
    ],
    techs: ['Laravel', 'Tailwind', 'PWA', 'MySQL'],
    href:  '/projects/language-academy/index.html',
  },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="projects" class="py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-3xl">

      <!-- سربرگ -->
      <div class="text-center mb-16 reveal">
        <span class="inline-block glass px-lg py-sm rounded-full text-primary-400 text-sm mb-lg">نمونه کارها</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-lg leading-snug">
          <span class="text-white">پروژه‌های</span>
          <span class="bg-gradient-to-l from-primary-400 to-primary-600 bg-clip-text text-transparent"> اخیر من</span>
        </h2>
        <p class="text-dark-400 max-w-[42rem] mx-auto">
          پیش‌نمایش زنده پروژه‌ها. برای مشاهده نسخه کامل روی دکمه ورود به پروژه کلیک کنید.
        </p>
      </div>

      <!-- گرید پروژه‌ها -->
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-2xl reveal">
        <article
          v-for="project in projects"
          :key="project.href"
          class="group rounded-2xl glass overflow-hidden hover:-translate-y-2 hover:shadow-glow transition-all duration-300"
        >
          <!-- پیش‌نمایش iframe -->
          <div class="relative h-64 overflow-hidden bg-white/[0.03] border-b border-white/10">
            <iframe
              :src="project.src"
              :title="`پیش نمایش ${project.title}`"
              loading="lazy"
              class="absolute inset-0 w-[122%] h-[122%] border-0 bg-white pointer-events-none"
              style="transform: scale(0.82); transform-origin: top right; margin-inline-start: -11%"
              sandbox="allow-scripts allow-same-origin allow-forms"
              referrerpolicy="no-referrer"
            ></iframe>

            <!-- overlay -->
            <div class="absolute inset-0 bg-dark-950/60 backdrop-blur-[3px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                :href="project.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`مشاهده پروژه ${project.title}`"
                class="inline-flex items-center gap-sm px-xl py-md bg-gradient-to-l from-primary-500 to-primary-700 text-white font-semibold text-sm rounded-xl shadow-button hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(99,102,241,0.5)] transition-all duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5v14h14"/>
                </svg>
                ورود به پروژه
              </a>
            </div>
          </div>

          <!-- اطلاعات پروژه -->
          <div class="p-2xl">
            <div class="flex items-center gap-sm mb-md flex-wrap">
              <span
                v-for="tag in project.tags"
                :key="tag.label"
                :class="['inline-block px-md py-xs text-xs font-medium rounded-full', tag.color]"
              >
                {{ tag.label }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-white mb-sm">{{ project.title }}</h3>
            <p class="text-dark-400 text-sm mb-lg leading-relaxed">{{ project.desc }}</p>

            <div class="flex flex-wrap gap-sm">
              <span
                v-for="tech in project.techs"
                :key="tech"
                class="inline-block px-sm py-xs text-xs font-medium text-dark-400 bg-white/5 rounded"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- دکمه تماس -->
      <div class="text-center mt-12 reveal">
        <button
          @click="scrollTo('contact')"
          class="inline-flex items-center gap-sm px-xl py-md glass text-white font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-200"
        >
          پروژه جدید دارید؟
          <svg class="w-5 h-5 scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>
