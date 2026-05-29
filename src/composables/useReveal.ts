import { onMounted, onUnmounted } from 'vue'

export function useReveal(selector = '.reveal') {
  let observer: IntersectionObserver

  onMounted(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector)

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('active'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    elements.forEach(el => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
