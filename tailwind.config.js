/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          50: '#F7F4EB',
          100: '#EFEAE0',
          200: '#E4DCCF',
          300: '#D5C9B7',
          400: '#C2B39E',
        },
        sage: {
          50: '#F4F5F1',
          100: '#E6E9E0',
          200: '#CED4C3',
          300: '#ACB49E',
          400: '#8A947A',
          500: '#6C775A',
          600: '#545E44',
          700: '#424A35',
          800: '#333A29',
          900: '#21261B',
        },
        forest: {
          50: '#F5F5F2',
          100: '#E7E7E2',
          200: '#CDCFC6',
          300: '#A8AC9E',
          400: '#828775',
          500: '#606453',
          600: '#4A4D3E',
          700: '#383A2E',
          800: '#2C2E24',
          900: '#21221B',
        },
        ink: {
          50: '#F7F7F6',
          100: '#EAEAE8',
          200: '#D4D4D0',
          300: '#AFAFA7',
          400: '#8A8A80',
          500: '#6C6C63',
          600: '#54544D',
          700: '#42423C',
          800: '#353530',
          900: '#23241D',
        },
        lemon: {
          400: '#D4AF5F',
          500: '#C29C49',
        },
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15, 38, 17, 0.04), 0 4px 14px rgba(15, 38, 17, 0.06)',
        'card': '0 1px 2px rgba(15, 38, 17, 0.04), 0 12px 30px -8px rgba(15, 38, 17, 0.10)',
        'lift': '0 10px 40px -10px rgba(15, 38, 17, 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'hero-grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'shimmer': 'shimmer 1.6s linear infinite',
      },
    },
  },
  plugins: [],
}
