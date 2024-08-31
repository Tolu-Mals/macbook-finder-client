
const buildUrl = (baseUrl: string, path: string, params: Record<string, string> = {}) => {
  const url = new URL(path, baseUrl)
  const searchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(params)) {
    searchParams.append(key, value)
  }

  url.search = searchParams.toString()

  return url.toString()
}

export default buildUrl
