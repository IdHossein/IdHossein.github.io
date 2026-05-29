import { ref, reactive } from 'vue'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormState {
  isLoading: boolean
  successMsg: string
  errorMsg: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function useContactForm() {
  const form = reactive<FormData>({ name: '', email: '', subject: '', message: '' })
  const state = reactive<FormState>({ isLoading: false, successMsg: '', errorMsg: '' })

  function clearMessages() {
    state.successMsg = ''
    state.errorMsg = ''
  }

  async function submit() {
    clearMessages()

    if (!form.name.trim()) {
      state.errorMsg = 'لطفاً نام خود را وارد کنید'
      return
    }
    if (!validateEmail(form.email)) {
      state.errorMsg = 'لطفاً یک ایمیل معتبر وارد کنید'
      return
    }
    if (!form.message.trim()) {
      state.errorMsg = 'لطفاً پیام خود را وارد کنید'
      return
    }

    state.isLoading = true

    try {
      const res = await fetch('https://formspree.io/f/xgoqqojq', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        state.successMsg = 'پیام شما با موفقیت ارسال شد! ✓'
        form.name = ''
        form.email = ''
        form.subject = ''
        form.message = ''
        setTimeout(clearMessages, 5000)
      } else {
        state.errorMsg = data?.errors?.[0]?.message ?? 'خطا در ارسال پیام. لطفاً دوباره تلاش کنید'
      }
    } catch {
      state.errorMsg = 'اتصال به سرور برقرار نشد. لطفاً دوباره تلاش کنید'
    } finally {
      state.isLoading = false
    }
  }

  return { form, state, submit }
}
