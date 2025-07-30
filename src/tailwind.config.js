// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],  // ✅ Tumhare HTML/JS files ka path
  theme: {
    extend: {
      boxShadow: {
        'custom-soft': '5px 5px 30px rgba(0, 0, 0, 0.2)',
        'custom-dark': '0px 10px 15px rgba(0, 0, 0, 0.6)',
        'custom-colored': '4px 4px 20px rgba(255, 165, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
