/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'blue-primary': '#1D4FFE',
        'green-primary': '#4BCE97',
        'gray-border-card': '#131317',
        'gray-area-favorite': '#05030A',
      },
      maxWidth: {
        grid: '77.5rem',
        'card-nft': '17.5rem',
        'card-collector': '37rem',
        'logo-nft-mobile' : '160px',
        'nav-header': '48.3rem',
        'p-section-hero' : '41.125rem',
      },
      width: {
        'area-cards-mobile' : '700px',
        'area-cards-desktop' : '698px'
      },
      height: {
        'area-image-card-nft': '14.75rem',
        'area-cards-mobile' : '15.3rem',
        'area-cards-leptop' : '28.5rem',
      },
      spacing: {
        'button': '0.875rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'hero-pattern' : 'url("../assets/bg-hero.svg")',
      },
    },
    screens: {

      '@mobileMini' : '375px',

      '@tablet': '640px',

      '@laptop': '1024px',

      '@desktop': '1280px',
    },
  },
  plugins: [require("tailwindcss-animate")],
}