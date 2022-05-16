module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    screens: {
      'xs': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', 
      
    },

    extend: {
      
      colors: {
        'sellRed':'#FF4949',  
        'buyGreen':'#36AE7C'  
        },
        
    },
    
  },
  plugins: [],
}