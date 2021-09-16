module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'filler': "url('/images/bg-pattern-card.svg')",
        'hero': "url('/images/image-victor.jpg')",
        'imgTop': "url('/images/bg-pattern-top.svg')",
        'imgBottom': "url('/images/bg-pattern-bottom.svg')"
      },
      fontFamily: {
        'Kumbh-Sans': "'Kumbh Sans', 'serif'",
      },
      colors: {
        'dark-cyan': "#19A2AE",
        'dark-blue': "#2D3248",
        'grayish-blue': "#6A6F81",
        'dark-gray': "#969696",
      },
    },
    background: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
