const LEAD_FORM_SELECTOR = '[data-lead-form]'

function getLeadForms(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>(LEAD_FORM_SELECTOR))
}

function getElementAbsoluteTop(element: Element): number {
  return element.getBoundingClientRect().top + window.scrollY
}

export function getNearestLeadForm(fromElement: Element | null): HTMLElement | null {
  const forms = getLeadForms()

  if (forms.length === 0) {
    return null
  }

  if (!fromElement) {
    return forms[0] ?? null
  }

  const sourceTop = getElementAbsoluteTop(fromElement)
  let nearestForm: HTMLElement | null = null
  let nearestDistance = Number.POSITIVE_INFINITY

  forms.forEach(form => {
    const distance = Math.abs(getElementAbsoluteTop(form) - sourceTop)
    if (distance < nearestDistance) {
      nearestDistance = distance
      nearestForm = form
    }
  })

  return nearestForm
}

export function scrollToNearestLeadForm(fromElement: Element | null): boolean {
  const targetForm = getNearestLeadForm(fromElement)
  if (!targetForm) {
    return false
  }

  targetForm.scrollIntoView({ behavior: 'smooth', block: 'center' })
  return true
}
