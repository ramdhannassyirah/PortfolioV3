// utils/dateFormatter.js
export function formatDate(dateString, locale = 'en-US', options = {}) {
  if (!dateString) return 'Unknown Date'

  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  try {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(date)
  } catch (error) {
    console.error('Invalid date format:', error)
    return 'Invalid Date'
  }
}
