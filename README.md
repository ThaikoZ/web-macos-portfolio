# macOS Portfolio

A fully interactive macOS desktop environment built for the web. This portfolio project replicates the macOS user experience with pixel-perfect UI components, smooth animations, and functional applications.

**Live Demo**: [https://adriansudak.com/](https://adriansudak.com/)

## Features

### Desktop Environment
- **Authentic macOS UI**: Dock, menu bar, and window chrome styled after macOS Sonoma
- **Window Management**: Drag, resize, minimize, maximize, and close windows with smooth animations
- **Theme Support**: Light and dark mode with multiple wallpaper options (Sonoma, Monterey)
- **Context Menus**: Right-click interactions throughout the interface
- **Responsive Dock**: Magnification effects and drag-to-reorder functionality

### Built-in Applications

- **Finder**: File system browser with macOS-style navigation
- **Safari**: Web browser interface
- **Notes**: Create, edit, and organize notes with a sidebar navigation
- **FaceTime**: Video call interface mockup
- **Music**: Fully functional music player with playlist support and playback controls
- **Unsplash**: Image gallery browser
- **Trash**: System trash bin with empty/full states

### System Features
- **Menu Bar**: Clock, system controls, battery indicator, WiFi status, and user account menu
- **Spotlight Search**: Quick access search functionality
- **Control Panel**: System settings and quick toggles
- **Custom Cursors**: macOS-style cursor set for different interactions
- **Audio Support**: Background music and sound effects

## Technology Stack

- **React 18**: Component-based UI architecture
- **TypeScript**: Type-safe development
- **Redux Toolkit**: Centralized state management
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first styling
- **Radix UI**: Accessible component primitives (dropdowns, tooltips, sliders, context menus)
- **SF Pro**: Official Apple system fonts

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Docker Support

```bash
docker-compose up
```

## Project Structure

```
src/
├── apps/              # Individual application implementations
├── components/        # Reusable UI components (dock, topbar, screen)
├── hooks/             # Custom React hooks (window, audio, mouse, resize)
├── providers/         # Context providers
├── store/             # Redux store and slices
├── styles/            # Global styles and fonts
├── types/             # TypeScript type definitions
└── utils/             # Helper functions
```

## License

MIT License
