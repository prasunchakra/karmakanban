# Karmakanban

> Showcase your journey. Master your actions.

A modern portfolio builder and task management application that combines professional portfolio creation with Kanban-style task organization. Built with Angular 20, Material Design, and Tailwind CSS.

![Karmakanban](https://img.shields.io/badge/Angular-20-red?style=for-the-badge&logo=angular)
![Material Design](https://img.shields.io/badge/Material%20Design-3.0-blue?style=for-the-badge&logo=material-design)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### Current Features (v1.0.0)
- **Landing Page**: Beautiful gradient design with call-to-action buttons
- **Portfolio Gallery**: Browse public portfolios with responsive grid layout
- **Portfolio Builder**: Interactive form to create custom portfolios (Work in Progress)

### Planned Features
- **Kanban Board**: Drag-and-drop task management
- **Portfolio Customization**: Full portfolio builder with sections for skills, projects, and contact
- **User Authentication**: Secure login and registration system
- **Real-time Collaboration**: Share and collaborate on tasks
- **Analytics Dashboard**: Track productivity and portfolio performance

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/karmakanban.git
   cd karmakanban
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── features/
│   │   ├── landing/           # Landing page component
│   │   ├── profile/           # Portfolio-related components
│   │   │   ├── pages/
│   │   │   │   ├── portfolio/         # Individual portfolio view
│   │   │   │   ├── portfolio-builder/ # Portfolio creation form
│   │   │   │   └── profile-list/      # Portfolio gallery
│   │   │   └── components/            # Reusable profile components
│   │   └── dynamic-portfolio/ # Dynamic portfolio features
│   ├── services/              # Application services
│   ├── types/                 # TypeScript type definitions
│   └── app.routes.ts          # Application routing
├── styles.scss               # Global styles and Material theme
└── main.ts                   # Application entry point
```
## 🛠️ Technology Stack

- **Angular 20**: Latest version with standalone components
- **TypeScript**: Type-safe development
- **Angular Material 20**: UI component library
- **Tailwind CSS 4**: Utility-first CSS framework

## 📱 Application Routes

- `/` - Landing page with introduction and navigation
- `/portfolio` - Portfolio gallery showing public portfolios
- `/portfolio/:username` - Individual portfolio view (Work in Progress)
- `/portfolio-builder` - Portfolio creation form (Work in Progress)

## 🎯 Current Status

### ✅ Completed
- Landing page with responsive design
- Portfolio gallery with grid layout
- Basic routing and navigation
- Material Design integration
- Tailwind CSS styling
- Responsive layout system

### 🚧 In Progress
- Portfolio builder form (basic structure implemented)
- Form validation and data handling
- Portfolio customization features

### 📋 Planned
- Kanban board implementation
- User authentication system
- Database integration
- Real-time features
- Advanced portfolio templates

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Angular Team**: For the amazing framework
- **Material Design**: For the comprehensive component library
- **Tailwind CSS**: For the utility-first CSS approach
- **Open Source Community**: For inspiration and tools

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/prasunchakra/karmakanban/issues)
- **Discussions**: [GitHub Discussions](https://github.com/prasunchakra/karmakanban/discussions)

---

**Made with ❤️ by the Karmakanban Team**

*Showcase your journey. Master your actions.*
