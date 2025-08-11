// tailwind.config.js
module.exports = {
  content: [
    './client/**/*.html',
    './client/**/*.tsx',
    './client/**/*.ts',
    // etc.
  ],
  theme: {
    extend: {
      colors: {
        'wibby-surface': 'hsl(0,0%,10%)',
        'wibby-green': 'hsl(75,85%,60%)',
        // …
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // etc.
  ],
}

