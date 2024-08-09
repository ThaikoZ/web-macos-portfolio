/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
      borderColor: {
        "window-outer": "var(--color-window-outer)",
        "window-inner": "var(--color-window-inner)",
      },
      boxShadow: {
        "window-active": "0px 15px 35px rgba(0, 0, 0, 0.7)",
      },
      colors: {
        notes: {
          background: "var(--background)",
          "note-selected": "var(--note-selected)",
          border: "var(--border)",
          subtitle: "var(--subtitle)",
        },

        topbar: {
          background: "var(--color-topbar-background)",
          text: "var(--color-topbar-text)",
          btn: {
            background: "var(--color-topbar-btn-background)",
            hovered: "var(--color-topbar-btn-hovered)",
            text: "var(--color-topbar-btn-text)",
          },
          dropdown: {
            background: "var(--color-topbar-dropdown-background)",
            border: "var(--color-topbar-dropdown-border)",
            text: "var(--color-topbar-dropdown-text)",
            title: "var(--color-topbar-dropdown-title)",
            "text-inactive": "var(--color-topbar-dropdown-text-inactive)",
            separator: "var(--color-topbar-dropdown-separator)",
            badge: {
              background: "var(--color-topbar-dropdown-badge-background)",
            },
            shortcut: {
              text: "var(--color-topbar-dropdown-shortcut-text)",
              "text-hovered":
                "var(--color-topbar-dropdown-shortcut-text-hovered)",
            },
            sub: {
              active: "var(--color-topbar-dropdown-sub-active)",
              chevron: {
                text: "var(--color-topbar-dropdown-sub-chevron-text)",
                hovered:
                  "var(--color-topbar-dropdown-sub-chevron-text-hovered)",
              },
              item: {
                hovered: "var(--color-topbar-dropdown-item-hovered)",
                "hovered-text": "var(--color-topbar-dropdown-item-text)",
              },
            },
          },
          "wifi-disabled": "var(--color-topbar-wifi-disabled)",
          control: {
            card: {
              background: "var(--bg-topbar-control-card-background)",
              "btn-inactive": "var(--color-topbar-control-card-btn-inactive)",
            },
            range: {
              background: "var(--color-topbar-control-range-background)",
              active: "var(--color-topbar-control-range-active)",
              icon: "var(--color-topbar-control-range-icon)",
            },
          },
        },
        dock: {
          background: "var(--color-dock-background)",
          divider: "var(--color-dock-divider)",
          dot: "var(--color-dock-dot)",
        },
        window: {
          background: "var(--color-window-background)",
          bar: {
            background: "var(--color-window-bar-background)",
            text: "var(--color-window-bar-text)",
            "text-inactive": "var(--color-window-bar-text-inactive)",
          },
          btn: {
            inactive: "var(--color-window-btn-inactive)",
            border: "var(--color-window-btn-border)",
            close: "var(--color-window-btn-close)",
            fullscreen: "var(--color-window-btn-fullscreen)",
            minimize: "var(--color-window-btn-minimize)",
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
