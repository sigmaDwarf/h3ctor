module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-1': '#000000',
        'custom-2': '#352F44',
        'custom-3': '#5C5470',
        'custom-4': '#EE9322',
      },
      textColor: {
        'custom-1': '#000000',
        'custom-2': '#352F44',
        'custom-3': '#5C5470',
        'custom-4': '#EE9322',
      },
      backgroundImage: {
        'bg-main': "url('/bg13.png')", 
      },
    },
  },
  plugins: [],
};
