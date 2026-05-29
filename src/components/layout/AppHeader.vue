<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const isScrolled = ref(false)
const isMobileOpen = ref(false)
const activeSection = ref('hero')

const navLinks = [
  { id: 'hero',     label: 'خانه' },
  { id: 'about',    label: 'درباره من' },
  { id: 'skills',   label: 'مهارت‌ها' },
  { id: 'projects', label: 'نمونه کارها' },
  { id: 'contact',  label: 'تماس' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  isMobileOpen.value = false
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') isMobileOpen.value = false
}

let sectionObserver: IntersectionObserver

onMounted(() => {
  window.addEventListener('scroll', () => { isScrolled.value = window.scrollY > 50 }, { passive: true })
  window.addEventListener('keydown', handleKeydown)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' },
  )
  navLinks.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) sectionObserver.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  sectionObserver?.disconnect()
})
</script>

<template>
  <header class="fixed top-0 start-0 end-0 z-50">
    <!-- نوار اصلی -->
    <div
      :class="[
        'transition-all duration-300',
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : '',
      ]"
    >
      <div class="max-w-7xl mx-auto px-3xl">
        <div class="flex items-center justify-between h-16 sm:h-20">

          <!-- لوگو -->
          <a
            href="#hero"
            @click.prevent="scrollTo('hero')"
            class="flex items-center gap-sm group"
          >
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
              ح
            </div>
            <span class="text-lg font-bold text-white hidden sm:block">حسین</span>
          </a>

          <!-- ناوبری دسکتاپ -->
          <nav class="hidden md:flex items-center gap-xs" role="navigation" aria-label="منوی اصلی">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="`#${link.id}`"
              @click.prevent="scrollTo(link.id)"
              :class="[
                'px-lg py-sm rounded-lg text-sm font-medium transition-all duration-150',
                activeSection === link.id
                  ? 'text-white bg-white/5'
                  : 'text-dark-300 hover:text-white hover:bg-white/5',
              ]"
            >
              {{ link.label }}
            </a>
          </nav>

          <!-- دکمه CTA -->
          <div class="hidden md:flex">
            <BaseButton @click="scrollTo('contact')">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              ارتباط با من
            </BaseButton>
          </div>

          <!-- دکمه منوی موبایل -->
          <button
            @click="isMobileOpen = !isMobileOpen"
            :aria-expanded="isMobileOpen"
            aria-label="منوی موبایل"
            class="md:hidden p-sm rounded-lg glass transition-colors"
          >
            <svg v-if="!isMobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

        </div>
      </div>
    </div>

    <!-- منوی موبایل -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="isMobileOpen" class="md:hidden">
        <div class="glass mx-lg mt-sm rounded-2xl p-lg">
          <nav class="flex flex-col gap-xs" role="navigation" aria-label="منوی موبایل">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="`#${link.id}`"
              @click.prevent="scrollTo(link.id)"
              :class="[
                'block px-lg py-md rounded-lg font-medium transition-colors duration-150',
                activeSection === link.id
                  ? 'text-white bg-white/5'
                  : 'text-dark-300 hover:text-white hover:bg-white/5',
              ]"
            >
              {{ link.label }}
            </a>

            <hr class="border-white/10 my-xs">

            <BaseButton :full-width="true" @click="scrollTo('contact')">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              ارتباط با من
            </BaseButton>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>
