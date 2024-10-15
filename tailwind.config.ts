import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
  content: [
    'content/**/*.md'
  ],
  theme: {
    headerHeight: '42px',
    headerTocHeight: '42px',
    sideNavWidth: '280px',
    tocWidth: '260px'
  }
}