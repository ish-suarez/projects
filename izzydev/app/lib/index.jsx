export const fontMatch = (position) => {
    if (position.includes('Front')) {
      return 'font-front-end'
    } else if (position.includes('Soft')) {
      return 'font-software'
    } else if (position.includes('Back')) {
      return 'font-backend'
    } else if (position.includes('Full')) {
      return 'font-fullstack'
    } else return ''
}