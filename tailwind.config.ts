import type { Config } from 'tailwindcss'

const HEADER_HEIGHT = '50px'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        screen: '430px',
      },
      height: {
        header: HEADER_HEIGHT,
      },
      padding: {
        header: HEADER_HEIGHT,
      },
      margin: {
        header: HEADER_HEIGHT,
      },
      colors: {
        primary: '#84A93D',
      },
    },
  },
  plugins: [],
}
export default config
