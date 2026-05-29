<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useReveal } from '@/composables/useReveal'

useReveal()
</script>

<template>
  <div class="font-sans bg-dark-950 text-white min-h-screen">
    <!-- گرادیان پس‌زمینه ثابت -->
    <div class="fixed inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900/20 -z-10" aria-hidden="true"></div>
    <div class="bg-pattern fixed inset-0 -z-10" aria-hidden="true"></div>

    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>
