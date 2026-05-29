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

    if (!validateEmail(form.email)) {
      state.errorMsg = 'لطفاً یک ایمیل معتبر وارد کنید'
      return
    }

    state.isLoading = true

    await new Promise<void>(resolve => setTimeout(resolve, 1500))

    state.isLoading = false
    state.successMsg = 'پیام شما با موفقیت ارسال شد!'
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''

    setTimeout(clearMessages, 5000)
  }

  return { form, state, submit }
}
