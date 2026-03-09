import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Dark Theme Colors from CSS Variables
        background: 'rgb(var(--background-rgb) / <alpha-value>)',
        'background-secondary':
          'rgb(var(--background-secondary-rgb) / <alpha-value>)',
        'background-tertiary':
          'rgb(var(--background-tertiary-rgb) / <alpha-value>)',

        foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
        'foreground-secondary':
          'rgb(var(--foreground-secondary-rgb) / <alpha-value>)',
        'foreground-muted': 'rgb(var(--foreground-muted-rgb) / <alpha-value>)',

        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        'accent-hover': 'rgb(var(--accent-hover-rgb) / <alpha-value>)',
        'accent-light': 'rgb(var(--accent-light-rgb) / <alpha-value>)',
        'accent-dark': 'rgb(var(--accent-dark-rgb) / <alpha-value>)',

        'brand-red': 'rgb(var(--brand-red-rgb) / <alpha-value>)',
        'border-color': 'rgb(var(--border-color-rgb) / <alpha-value>)',
        'border-light': 'rgb(var(--border-light-rgb) / <alpha-value>)',
      },
      borderColor: {
        DEFAULT: 'rgb(var(--border-color-rgb) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};

export default config;
