import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "slide1":"url('../public/bluebgbanner.png')",
        "slide2":"url('../public/pinkbgbanner.png')",
        "slide3":"url('../public/greenbgbanner.png')",
        "aboutBanner":"url('../public/AboutBanner.png')",
        'phoneBG':"url('../public/PhoneBG.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        newGray:"#888888",
        newGold:"#CA7400",
        newBlack:"#222",
      }
    },
  },
  plugins: [],
}
export default config
