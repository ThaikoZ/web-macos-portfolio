/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
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
        window: "-9px 9px 23px 0px rgba(24, 24, 24, 0.15), 9px 9px 23px 0px rgba(24, 24, 24, 0.15), 2px 4px 20px 0px rgba(24, 24, 24, 0.3)"
      },
      colors: {
        "macos-selection": "#007AFF",
        light: {
          blue: "#007AFF",
          green: "#28CD41",
          red: "#FF3830",
          yellow: "#FFCC00",
          gray: "#8E8E93",
          text: "#111111"
        },
        btn: {
          'primary-dark': "linear-gradient(to bottom, #1568E5, #155CCC)",
          'primary-light': "linear-gradient(to bottom, #1568E5, #155CCC)",
        },
        dark: {
          blue: "#0A84FF",
          "dark-blue": "#0047f7",
          green: "#32D74B",
          red: "#FF453A",
          yellow: "#FFD60A",
          gray: "#98989D",
          text: "#F1F1F1"
        },
        dropdown: {
          dark: {
            background: "#282828",
            separator: "#EBEBF5"
          },
          light: {
            background: "#ffffff",
            separator: "#3C3C43"
          },
        }
      },
      cursor: {
        pointer: "url(../assets/cursors/pointer.png), pointer",
        default: "url(../assets/cursors/default.png), default",
        auto: "url(../assets/cursors/apple-cursor.png), auto",
        text: "url(../assets/cursors/text.png), text",
        crosshair: "url(../assets/cursors/crosshair.png), crosshair",
        "zoom-in": "url(../assets/cursors/zoom-in.png), zoom-in",
        "zoom-out": "url(../assets/cursors/zoom-out.png), zoom-out",
        help: "url(../assets/cursors/help.png), help",
        grab: "url(../assets/cursors/grab.png), grab",
        move: "url(../assets/cursors/move.png), move",
        wait: "url(../assets/cursors/wait.png), wait",
        "n-resize": "url(../assets/cursors/n-resize.png), n-resize",
        "s-resize": "url(../assets/cursors/n-resize.png), n-resize",
        "w-resize": "url(../assets/cursors/w-resize.png), w-resize",
        "e-resize": "url(../assets/cursors/w-resize.png), w-resize",
        "nw-resize": "url(../assets/cursors/nw-resize.png), nw-resize",
        "se-resize": "url(../assets/cursors/nw-resize.png), nw-resize",
        "ne-resize": "url(../assets/cursors/ne-resize.png), ne-resize",
        "sw-resize": "url(../assets/cursors/ne-resize.png), ne-resize",
      },
    },
  },
  plugins: [],
};
