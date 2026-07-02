# Mohammed Al-Bakhity Ali - Professional Portfolio

A clean, minimalist, bilingual (English & Arabic) personal portfolio built to showcase engineering background, technical skills, and projects.

![Portfolio UI](https://via.placeholder.com/1000x500.png?text=Mohammed+Al-Bakhity+Ali+-+Portfolio)

## ✨ Features

- **Bilingual Interface**: Seamless switching between English and Arabic with automatic RTL (Right-to-Left) layout adjustments.
- **Minimalist & Professional Design**: Clean aesthetics focusing on typography, whitespace, and content.
- **Responsive Architecture**: Fully optimized for mobile, tablet, and desktop screens.
- **Functional Contact Form**: Integrated with [Web3Forms](https://web3forms.com/) for direct email delivery.
- **Print-Ready CV**: Optimized CSS for generating a clean PDF when printing the page directly from the browser.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/engmohammeda/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## ✉️ Contact Form (Web3Forms)
The contact form uses Web3Forms. Any messages submitted by users through the form on your website will be **sent directly to the email address you registered with Web3Forms** (e.g., `Mohammedalbkhyty@gmail.com`). 

To check your messages, simply check the Inbox or Spam folder of that email account!

## 🌐 Deploying to GitHub Pages

To update your live site at `https://engmohammeda.github.io/portfolio/`:

1. The `vite.config.ts` is already configured with `base: '/portfolio/'`.
2. Run the build command to generate the static files:
   ```bash
   npm run build
   ```
3. The built files will be located in the `docs/` folder (or `dist/` depending on your Vite config).
4. Commit your changes and push them to GitHub. 
5. In your GitHub Repository Settings > Pages:
   - Select the branch you pushed to (e.g., `main`).
   - Select the `/docs` folder as the source (since `outDir` is set to `'docs'` in your vite config).
   - Save, and your live URL will be updated shortly!

## 📄 License
This project is licensed under the MIT License.
