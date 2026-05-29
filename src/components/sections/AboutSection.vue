<script setup lang="ts">
const stats = [
  { value: '+۳',  label: 'سال تجربه' },
  { value: '+۲۰', label: 'پروژه موفق' },
  { value: '+۱۵', label: 'مشتری راضی' },
]

const services = [
  {
    title: 'طراحی فرانت‌اند',
    desc:  'طراحی رابط کاربری مدرن و ریسپانسیو با HTML، CSS، JavaScript و Tailwind',
    color: 'text-blue-400',
    bg:    'bg-blue-500/20',
    icon:  'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'توسعه بک‌اند',
    desc:  'ساخت API و سیستم‌های مدیریت محتوا با PHP، Laravel و MySQL',
    color: 'text-green-400',
    bg:    'bg-green-500/20',
    icon:  'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
  },
  {
    title: 'وب‌اپلیکیشن PWA',
    desc:  'ساخت اپلیکیشن‌های وب پیشرفته با قابلیت نصب و کار آفلاین',
    color: 'text-purple-400',
    bg:    'bg-purple-500/20',
    icon:  'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    title: 'اتوماسیون و اسکریپت',
    desc:  'نوشتن اسکریپت‌های اتوماسیون و ابزارهای کاربردی با Python',
    color: 'text-orange-400',
    bg:    'bg-orange-500/20',
    icon:  'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
]
</script>

<template>
  <section id="about" class="py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-3xl">

      <!-- سربرگ بخش -->
      <div class="text-center mb-16 reveal">
        <span class="inline-block glass px-lg py-sm rounded-full text-primary-400 text-sm mb-lg">درباره من</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-lg leading-snug">
          <span class="bg-gradient-to-l from-primary-400 to-primary-600 bg-clip-text text-transparent">آشنایی</span>
          <span class="text-white"> با من</span>
        </h2>
        <p class="text-dark-400 max-w-[42rem] mx-auto">
          یک برنامه‌نویس فول استک با علاقه به ساخت محصولات دیجیتال زیبا و کاربردی
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- کارت معرفی -->
        <div class="reveal">
          <div class="glass rounded-3xl p-3xl">
            <h3 class="text-2xl font-bold text-white mb-2xl">من کی هستم؟</h3>
            <p class="text-dark-300 leading-relaxed mb-2xl">
              من یک برنامه‌نویس فول استک هستم که به ساخت وب‌اپلیکیشن‌های مدرن، سریع و کاربرپسند علاقه‌مندم.
              با بیش از ۳ سال تجربه در توسعه وب، تخصص من در
              <span class="text-primary-400 font-medium">PHP</span> و
              <span class="text-primary-400 font-medium">Laravel</span>
              برای بک‌اند و
              <span class="text-primary-400 font-medium">JavaScript</span> و
              <span class="text-primary-400 font-medium">Tailwind CSS</span>
              برای فرانت‌اند است.
            </p>
            <p class="text-dark-300 leading-relaxed mb-3xl">
              همچنین با <span class="text-primary-400 font-medium">Python</span> برای اسکریپت‌نویسی و اتوماسیون
              کار می‌کنم. به کدنویسی تمیز، معماری درست و تجربه کاربری عالی اهمیت می‌دهم.
            </p>

            <!-- آمار -->
            <div class="grid grid-cols-3 gap-lg">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="text-center p-lg rounded-2xl bg-white/5"
              >
                <div class="text-3xl font-bold text-primary-400 mb-xs">{{ stat.value }}</div>
                <div class="text-sm text-dark-400">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- کارت‌های خدمات -->
        <div class="space-y-lg reveal">
          <div
            v-for="service in services"
            :key="service.title"
            class="flex items-start gap-lg p-xl rounded-xl glass hover:-translate-x-1 transition-all duration-200"
          >
            <div :class="['flex items-center justify-center w-12 h-12 rounded-xl shrink-0', service.bg, service.color]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"/>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-bold text-white mb-xs">{{ service.title }}</h4>
              <p class="text-dark-400 text-sm leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
