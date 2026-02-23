import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { AlertCircle, Loader2 } from 'lucide-react'
import { startLead } from '../lib/leadApi'

const REDIRECT_URL =
  'https://web.consultoriaeducacao.app.br/candidate/68595e60ae8a080008be21f2'

const leadFormSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z
    .string()
    .min(14, 'WhatsApp incompleto')
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Formato de WhatsApp invalido'),
  email: z.string().trim().email('E-mail invalido')
})

type LeadFormData = z.infer<typeof leadFormSchema>

interface LeadFormProps {
  variant?: 'hero' | 'final'
}

export function LeadForm({ variant = 'hero' }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'error'>('idle')
  const [submitErrorMessage, setSubmitErrorMessage] = useState('')
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: ''
  })
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof LeadFormData, string>>
  >({})

  const formId = variant === 'hero' ? 'lead-form-hero' : 'lead-form-final'

  const setError = (field: keyof LeadFormData, message?: string) => {
    setFieldErrors(prev => ({
      ...prev,
      [field]: message ?? ''
    }))
  }

  const handleNameChange = (value: string) => {
    setFormData(prev => ({ ...prev, name: value }))
    if (fieldErrors.name) {
      setError('name')
    }
  }

  const handleEmailChange = (value: string) => {
    setFormData(prev => ({ ...prev, email: value }))
    if (fieldErrors.email) {
      setError('email')
    }
  }

  const handlePhoneChange = (value: string) => {
    let digits = value.replace(/\D/g, '')
    if (digits.length > 11) {
      digits = digits.slice(0, 11)
    }
    digits = digits.replace(/^(\d{2})(\d)/, '($1) $2')
    digits = digits.replace(/(\d)(\d{4})$/, '$1-$2')
    setFormData(prev => ({ ...prev, phone: digits }))
    if (fieldErrors.phone) {
      setError('phone')
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitErrorMessage('')
    setFieldErrors({})

    const parsed = leadFormSchema.safeParse(formData)
    if (!parsed.success) {
      const formatted = parsed.error.format()
      setFieldErrors({
        name: formatted.name?._errors[0] ?? '',
        phone: formatted.phone?._errors[0] ?? '',
        email: formatted.email?._errors[0] ?? ''
      })
      setIsSubmitting(false)
      return
    }

    try {
      await startLead(parsed.data)
      window.location.assign(REDIRECT_URL)
    } catch (error) {
      console.error('Erro ao enviar lead:', error)
      if (error instanceof Error && error.message.trim().length > 0) {
        setSubmitErrorMessage(error.message)
      } else {
        setSubmitErrorMessage('Nao foi possivel enviar. Tente novamente.')
      }
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      id={formId}
      data-lead-form={variant}
      onSubmit={onSubmit}
      className="w-full max-w-md mx-auto relative z-50 bg-white p-6 rounded-lg shadow-lg pointer-events-auto"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor={`name-${variant}`} className="text-sm font-medium text-gray-700">
            Nome completo
          </label>
          <input
            id={`name-${variant}`}
            name="name"
            type="text"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={event => handleNameChange(event.target.value)}
            className={`mt-1 h-12 text-base text-gray-900 placeholder:text-gray-400 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent ${
              fieldErrors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {fieldErrors.name && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`phone-${variant}`} className="text-sm font-medium text-gray-700">
            WhatsApp
          </label>

          <input
            id={`phone-${variant}`}
            name="phone"
            type="text"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={event => handlePhoneChange(event.target.value)}
            className={`mt-1 h-12 text-base text-gray-900 placeholder:text-gray-400 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent ${
              fieldErrors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />

          {fieldErrors.phone && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`email-${variant}`} className="text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            id={`email-${variant}`}
            name="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            value={formData.email}
            onChange={event => handleEmailChange(event.target.value)}
            className={`mt-1 h-12 text-base text-gray-900 placeholder:text-gray-400 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent ${
              fieldErrors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {fieldErrors.email && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {fieldErrors.email}
            </p>
          )}
        </div>

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className="text-red-700 text-sm">{submitErrorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 text-lg font-semibold bg-[#FF6B35] hover:bg-[#E55A28] text-white rounded-lg shadow-lg transition-all"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Processando...
            </div>
          ) : (
            'Continuar pre-inscricao'
          )}
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Seus dados estao protegidos conforme a LGPD
      </p>
    </form>
  )
}
