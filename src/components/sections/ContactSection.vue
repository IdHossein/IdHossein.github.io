<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { useContactForm } from '@/composables/useContactForm'

const { form, state, submit } = useContactForm()

const contactItems = [
  {
    href:  'https://t.me/Hossein_695',
    label: 'تلگرام',
    value: '@Hossein_695',
    bg:    'bg-blue-500/20',
    color: 'text-blue-400',
    icon:  'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
    fill:  true,
  },
  {
    href:  'https://twitter.com/id_hossein',
    label: 'توییتر (X)',
    value: '@ID_HOSSEIN',
    bg:    'bg-dark-600/20',
    color: 'text-dark-300',
    icon:  'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    fill:  true,
  },
]
</script>

<template>
  <section id="contact" class="py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-3xl">

      <!-- سربرگ -->
      <div class="text-center mb-16 reveal">
        <span class="inline-block glass px-lg py-sm rounded-full text-primary-400 text-sm mb-lg">تماس با من</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-lg leading-snug">
          <span class="text-white">بیایید</span>
          <span class="bg-gradient-to-l from-primary-400 to-primary-600 bg-clip-text text-transparent"> صحبت کنیم</span>
        </h2>
        <p class="text-dark-400 max-w-[42rem] mx-auto">
          آماده همکاری در پروژه‌های جدید هستم. از طریق راه‌های زیر می‌توانید با من در ارتباط باشید
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">

        <!-- اطلاعات تماس -->
        <div class="space-y-2xl reveal">
          <div class="glass p-3xl rounded-3xl">
            <h3 class="text-2xl font-bold text-white mb-2xl">اطلاعات تماس</h3>

            <div class="space-y-sm">
              <a
                v-for="item in contactItems"
                :key="item.href"
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-lg p-lg rounded-xl hover:bg-white/5 transition-colors duration-150 group"
              >
                <div :class="['flex items-center justify-center w-12 h-12 rounded-xl shrink-0', item.bg, item.color]">
                  <svg class="w-6 h-6" :fill="item.fill ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      :stroke-linecap="item.fill ? undefined : 'round'"
                      :stroke-linejoin="item.fill ? undefined : 'round'"
                      :stroke-width="item.fill ? undefined : '2'"
                      :d="item.icon"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-dark-400 text-sm">{{ item.label }}</p>
                  <p class="text-white font-medium group-hover:text-primary-400 transition-colors duration-150">
                    {{ item.value }}
                  </p>
                </div>
              </a>

              <!-- موقعیت (غیر کلیکی) -->
              <div class="flex items-center gap-lg p-lg rounded-xl">
                <div class="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 bg-green-500/20 text-green-400">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-dark-400 text-sm">موقعیت</p>
                  <p class="text-white font-medium">ایران</p>
                </div>
              </div>
            </div>
          </div>

          <!-- badge آماده همکاری -->
          <div class="glass p-2xl rounded-2xl border border-green-500/30">
            <div class="flex items-center gap-lg">
              <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse shrink-0"></div>
              <div>
                <p class="text-white font-medium">آماده همکاری</p>
                <p class="text-dark-400 text-sm">پروژه‌های جدید می‌پذیرم</p>
              </div>
            </div>
          </div>
        </div>

        <!-- فرم تماس -->
        <div class="reveal">
          <form
            @submit.prevent="submit"
            novalidate
            class="glass p-3xl rounded-3xl space-y-2xl"
          >
            <div class="grid sm:grid-cols-2 gap-2xl">
              <!-- نام -->
              <div class="flex flex-col gap-sm">
                <label for="name" class="text-sm font-medium text-dark-300">نام و نام خانوادگی</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  required
                  autocomplete="name"
                  placeholder="نام شما"
                  class="w-full px-lg py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-base leading-normal placeholder:text-dark-500 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.2)] transition-all duration-150"
                >
              </div>

              <!-- ایمیل -->
              <div class="flex flex-col gap-sm">
                <label for="email" class="text-sm font-medium text-dark-300">ایمیل</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  required
                  autocomplete="email"
                  placeholder="email@example.com"
                  class="w-full px-lg py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-base leading-normal placeholder:text-dark-500 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.2)] transition-all duration-150"
                >
              </div>
            </div>

            <!-- موضوع -->
            <div class="flex flex-col gap-sm">
              <label for="subject" class="text-sm font-medium text-dark-300">موضوع</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                name="subject"
                required
                placeholder="موضوع پیام شما"
                class="w-full px-lg py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-base leading-normal placeholder:text-dark-500 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.2)] transition-all duration-150"
              >
            </div>

            <!-- پیام -->
            <div class="flex flex-col gap-sm">
              <label for="message" class="text-sm font-medium text-dark-300">پیام</label>
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                rows="5"
                required
                placeholder="پیام خود را بنویسید..."
                class="w-full px-lg py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-base leading-normal placeholder:text-dark-500 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.2)] transition-all duration-150 resize-none"
              ></textarea>
            </div>

            <!-- خطا / موفقیت -->
            <p v-if="state.errorMsg" role="alert" class="text-red-400 text-sm">
              {{ state.errorMsg }}
            </p>
            <p v-if="state.successMsg" role="status" class="text-green-400 text-sm">
              {{ state.successMsg }}
            </p>

            <!-- دکمه ارسال -->
            <BaseButton type="submit" :disabled="state.isLoading" :full-width="true">
              <svg
                v-if="state.isLoading"
                class="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
              {{ state.isLoading ? 'در حال ارسال...' : 'ارسال پیام' }}
            </BaseButton>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>
