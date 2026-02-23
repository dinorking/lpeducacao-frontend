export interface StartLeadPayload {
  name: string
  email: string
  phone: string
}

const FLY_BACKEND_ORIGIN = 'https://r-cold-grass-3980.fly.dev'
const START_LEAD_ENDPOINT = import.meta.env.DEV
  ? '/leads/start'
  : `${FLY_BACKEND_ORIGIN}/leads/start`
const HEALTH_ENDPOINT = `${FLY_BACKEND_ORIGIN}/health`

let hasWarmedUpLeadBackend = false

function warmupLeadBackend() {
  if (import.meta.env.DEV || hasWarmedUpLeadBackend) {
    return
  }

  hasWarmedUpLeadBackend = true

  void fetch(HEALTH_ENDPOINT, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-store'
  }).catch(() => {
    // Warmup is best-effort only.
  })
}

warmupLeadBackend()

async function getErrorMessage(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as { message?: string }
    if (typeof data.message === 'string' && data.message.trim().length > 0) {
      return data.message
    }
  } catch {
    // Keep fallback message when response is not valid JSON.
  }

  return `Falha ao enviar lead (${response.status})`
}

export async function startLead(payload: StartLeadPayload): Promise<void> {
  const response = await fetch(START_LEAD_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error(await getErrorMessage(response))
  }
}
