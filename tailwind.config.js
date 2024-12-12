/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '320px',       // Mobile phones (portrait)
        'tablet': '768px',      // Tablets (portrait and landscape)
        'laptop': '1024px',     // Laptops and larger tablets (landscape)
        'desktop': '1280px',    // Desktops and larger laptops
        'large-desktop': '1600px',  // Larger desktops and big screens
      },
    },
  },
  plugins: [],
}

