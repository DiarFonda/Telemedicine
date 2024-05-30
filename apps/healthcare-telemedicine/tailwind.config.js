const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e2629', // Main Color
        accent: '#6b7280', // Accent Color
        muted: '#d1d5db', // Muted Color
        background: '#f9fafb', // Background Color
        card: '#f9fafb', // Card Color
        // Additional Colors used in the Calendar component
        'primary-foreground': '#ffffff', // Primary Foreground Color
        'accent-foreground': '#ffffff', // Accent Foreground Color
        'text-muted': '#6b7280', // Text Muted Color
        'text-primary': '#374151', // Text Primary Color
        'text-disabled': '#9ca3af', // Text Disabled Color
        'day-outside': '#d1d5db', // Day Outside Color
        'day-today': '#374151', // Day Today Color
        'day-disabled': '#9ca3af', // Day Disabled Color
        'day-selected': '#ffffff', // Day Selected Color
        'day-range-end': '#ffffff', // Day Range End Color
        'day-range-middle': '#d1d5db', // Day Range Middle Color
      },
      variants: {
        extend: {
          textColor: ['hover'], // Enable hover state for text color
        },
      },
      boxShadow: {
        'top-bottom':
          '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
