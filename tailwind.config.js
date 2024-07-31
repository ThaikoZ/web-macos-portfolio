/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "var(--wallpaper)",
      },
      fontFamily: {
        "sf-text": [
          "SF Pro Text",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        "sf-display": [
          "SF Pro Display",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        window:
          "-9px 9px 23px 0px rgba(24, 24, 24, 0.15), 9px 9px 23px 0px rgba(24, 24, 24, 0.15), 2px 4px 20px 0px rgba(24, 24, 24, 0.3)",
      },
      colors: {
        topbar: {
          background: "rgba(var(--color-topbar-background))",
          text: "rgba(var(--color-topbar-text))",
          btn: {
            background: "rgba(var(--color-topbar-btn-background))",
            hovered: "rgba(var(--color-topbar-btn-hovered))",
            text: "rgba(var(--color-topbar-btn-text))",
          },
          dropdown: {
            background: "rgba(var(--color-topbar-dropdown-background))",
            border: "rgba(var(--color-topbar-dropdown-border))",
            text: "rgba(var(--color-topbar-dropdown-text))",
            badge: {
              background: "rgba(var(--color-dropdown-badge-background))",
            },
          },
        },

        "macos-selection": "#007AFF",
        light: {
          blue: "#007AFF",
          green: "#28CD41",
          red: "#FF3830",
          yellow: "#FFCC00",
          gray: "#8E8E93",
          text: "#111111",
        },

        dark: {
          blue: "#0A84FF",
          "dark-blue": "#0047f7",
          green: "#32D74B",
          red: "#FF453A",
          yellow: "#FFD60A",
          gray: "#98989D",
          text: "#F1F1F1",
        },
        dropdown: {
          dark: {
            background: "#282828",
            separator: "#EBEBF5",
          },
          light: {
            background: "#ffffff",
            separator: "#3C3C43",
          },
        },
      },
      cursor: {
        pointer: "var(--cursor-pointer)",
        default: "var(--cursor-default)",
        auto: "var(--cursor-auto)",
        text: "var(--cursor-text)",
        crosshair: "var(--cursor-crosshair)",
        "zoom-in": "var(--cursor-zoom-in)",
        "zoom-out": "var(--cursor-zoom-out)",
        help: "var(--cursor-help)",
        grab: "var(--cursor-grab)",
        move: "var(--cursor-move)",
        wait: "var(--cursor-wait)",
        "n-resize": "var(--cursor-n-resize)",
        "s-resize": "var(--cursor-s-resize)",
        "w-resize": "var(--cursor-w-resize)",
        "e-resize": "var(--cursor-e-resize)",
        "nw-resize": "var(--cursor-nw-resize)",
        "se-resize": "var(--cursor-se-resize)",
        "ne-resize": "var(--cursor-ne-resize)",
        "sw-resize": "var(--cursor-sw-resize)",
      },
    },
  },
  plugins: [],
};
