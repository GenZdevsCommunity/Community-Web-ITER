module.exports = {
  content: [
    './index.html'
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require("daisyui")
  ],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      "light",
      "dark"
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "du-",
    darkTheme: "light"
  },
}
