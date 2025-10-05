
# Quote Generator

[![Build Status](https://img.shields.io/github/actions/workflow/status/Vaporjawn/quote-generator/ci.yml?branch=main)](https://github.com/Vaporjawn/quote-generator/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Vaporjawn/quote-generator/pulls)

>A beautiful, open-source Quote Generator app built with Vite, React, TypeScript, and Material UI. Fetches quotes from a public API and provides a local fallback for offline use. Designed for accessibility, performance, and extensibility.

---

## 🚀 Features

- Fetches random quotes from [Quotable API](https://github.com/lukePeavey/quotable) (with local fallback)
- Responsive Material UI design (dark/light mode)
- TypeScript strict mode for type safety
- Settings modal: choose quote source, toggle theme
- About modal: project info, author, license, links
- Copy to clipboard & social share buttons
- Accessibility (WCAG AA), keyboard navigation
- Error handling, loading skeletons
- Comprehensive test coverage (Jest + Testing Library)

---

## 🖼️ Screenshots

<!-- Add screenshots here -->
<p align="center">
	<img src="docs/screenshot-main.png" alt="Main UI" width="600" />
	<img src="docs/screenshot-settings.png" alt="Settings Modal" width="300" />
</p>

---

## ⚡️ Quick Start

```bash
git clone https://github.com/Vaporjawn/quote-generator.git
cd quote-generator
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Usage

- Click **Get New Quote** to fetch a new quote
- Use the **Settings** icon to choose quote source (API/local) and toggle dark mode
- Click **About** for project info, author, license, and links
- Copy quotes to clipboard or share on social media

---

## 🧪 Testing

Run all tests:

```bash
npm test
```

Coverage reports are generated in the `coverage/` directory.

---

## 🤝 Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

1. Fork the repo and create your branch from `main`
2. Run `npm install` to install dependencies
3. Add your feature or fix with tests
4. Submit a pull request

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

**Author:** Victor Williams ([Vaporjawn](https://github.com/Vaporjawn))
