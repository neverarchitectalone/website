[![Netlify Status](https://api.netlify.com/api/v1/badges/2be490be-6ecb-4831-b574-ffd48c3aa910/deploy-status)](https://app.netlify.com/projects/neverarchitectalone/deploys)
# Never Architect Alone Framework - Website

The official promotional website for the Never Architect Alone (AAA) Framework - a systematic approach to AI-enhanced cloud architecture design.

## 🌐 Live Site

Visit [neverarchitectalone.com](https://neverarchitectalone.com) (or your Netlify URL)

## 📋 Overview

This website promotes the AAA Framework, which transforms AI tools into collaborative partners for cloud architecture design. The site emphasizes that AI enhances rather than replaces human architectural expertise.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/neverarchitectalone/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 🛠️ Technology Stack

- **Build Tool:** Vite
- **Styling:** Vanilla CSS with custom properties
- **JavaScript:** Vanilla JS with modern ES6+
- **Fonts:** Inter (headings/body), JetBrains Mono (code)
- **Deployment:** Netlify

## 📁 Project Structure

```
website/
├── index.html          # Main HTML structure
├── main.js            # JavaScript interactions
├── style.css          # All styles with CSS custom properties
├── netlify.toml       # Netlify deployment configuration
├── package.json       # Project dependencies
├── vite.config.js     # Vite configuration
└── dist/              # Production build output
```

## 🎨 Design Features

- **Typography-First Design:** Beautiful, readable typography with fluid scaling
- **Responsive:** Mobile-first approach, works on all devices
- **Interactive Elements:**
  - Smooth scroll animations
  - Parallax hero section
  - Typewriter effect on headline
  - Smart navigation that hides/shows on scroll
- **Performance:** Optimized build with minimal bundle size (~7KB gzipped total)

## 🚢 Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Netlify will auto-detect settings from `netlify.toml`
4. Site deploys automatically on push to main branch

### Manual Deploy

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to any static hosting service

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of the Never Architect Alone Framework. See the [main framework repository](https://github.com/neverarchitectalone/framework) for license information.

## 🔗 Links

- [AAA Framework Repository](https://github.com/neverarchitectalone/framework)
- [GitHub Organization](https://github.com/neverarchitectalone)
- [Community Discussions](https://github.com/neverarchitectalone/framework/discussions)

## 💡 About the AAA Framework

The Never Architect Alone Framework provides a systematic, AI-enhanced approach to creating robust cloud architectures. It emphasizes:

- **Human-AI Collaboration:** AI amplifies human capabilities, doesn't replace them
- **Documentation-Driven:** Version-controlled documentation as single source of truth
- **Infrastructure as Code First:** Every design becomes deployable code
- **Safety First:** Always verify AI recommendations with human expertise

---

Built with care for the cloud architecture community.
