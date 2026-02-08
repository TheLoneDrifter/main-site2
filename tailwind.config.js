/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ios-primary': '#3944BC',
        'ios-secondary': '#3944BC',
        'ios-success': '#34C759',
        'ios-warning': '#FF9500',
        'ios-error': '#3944BC',
        'ios-background': '#000000',
        'ios-surface': '#1C1C1E',
        'ios-surface-secondary': '#2C2C2E',
        'ios-surface-tertiary': '#3A3A3C',
        'ios-label': '#FFFFFF',
        'ios-label-secondary': '#EBEBF5',
        'ios-label-tertiary': '#EBEBF599',
        'ios-separator': '#38383A',
        'ios-system-gray': '#8E8E93',
        'ios-system-gray2': '#AEAEB2',
        'ios-system-gray3': '#C7C7CC',
        'ios-system-gray4': '#D1D1D6',
        'ios-system-gray5': '#E5E5EA',
        'ios-system-gray6': '#F2F2F7',
        'slimetch-primary': '#3944BC',
        'slimetch-secondary': '#2D3561',
        'slimetch-accent': '#1E2A4A',
        'slimetch-highlight': '#2E4A62',
        'slimetch-light': '#5667B8',
        'slimetch-blue': '#4A90E2',
        'slimetch-blue-dark': '#3B82F6',
        'slimetch-blue-light': '#6BA3E5',
        'slimetch-blue-intense': '#7EC8E3',
      },
      boxShadow: {
        'glow-slimetch': '0 0 20px rgba(57, 68, 188, 0.6)',
        'glow-slimetch-intense': '0 0 40px rgba(57, 68, 188, 0.9)',
        'glow-slimetch-subtle': '0 0 15px rgba(57, 68, 188, 0.3)',
        'ios-card': '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        'ios-card-hover': '0 8px 32px 0 rgba(0, 0, 0, 0.24)',
        'ios-floating': '0 12px 48px 0 rgba(0, 0, 0, 0.18)',
        'ios-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        'ios': '20px',
      },
    },
  },
  plugins: [],
}
