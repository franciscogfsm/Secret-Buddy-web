# SecretBuddy Web

A modern, mobile-first website for the SecretBuddy app featuring a landing page and privacy policy.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS with custom theme tokens
- **Content:** React Markdown for privacy policy rendering
- **Fonts:** Inter (body) and Space Grotesk (headings) from Google Fonts

## Theme Tokens

### Colors

- Background: `#05030C`
- Surface: `#0B0520`
- Surface Secondary: `#140A35`
- Text Primary: `#F5F2FF`
- Text Secondary: `#B9B1EA`
- Accent Pink: `#FF4FB7`
- Accent Purple: `#9C6BFF`
- Accent Teal: `#2EE6A9`
- Accent Yellow: `#FFD60A`
- Danger: `#FF6B8A`
- Error: `#FF4444`
- Border: `rgba(255,255,255,0.1)`
- Overlay: `rgba(5,3,12,0.78)`

### Gradients

- Purple Pink: `linear-gradient(135deg, #6C3BFF 0%, #FF4FB7 100%)`
- Teal Blue: `linear-gradient(135deg, #1FC7B4 0%, #2360FF 100%)`
- Sunset: `linear-gradient(135deg, #FF7750 0%, #FF2E92 100%)`
- Midnight: `linear-gradient(135deg, #070319 0%, #1C0E3C 100%)`

### Typography Scale (Desktop px)

- Display: 32px
- Title: 24px
- Subtitle: 18px
- Body: 16px
- Caption: 13px

## Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Start production server:
   ```bash
   npm start
   ```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push to main branch

### Firebase Hosting

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:

   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:

   ```bash
   firebase init hosting
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Deploy:
   ```bash
   firebase deploy --only hosting
   ```

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out` (for static export) or `.next` (for SSR)
4. Deploy automatically on push

## Features

- **Landing Page:** Hero section, features, how it works, footer
- **Privacy Policy:** Full content from PRIVACY_POLICY.md with TOC, summary, and structured data
- **Responsive Design:** Mobile-first approach
- **SEO Optimized:** Meta tags, Open Graph, structured data
- **Accessibility:** Semantic HTML, keyboard navigation, screen reader support

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Landing page
│   ├── privacy/
│   │   └── page.tsx       # Privacy policy page
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   ├── HowItWorks.tsx    # How it works section
│   ├── PrivacySummary.tsx # Privacy summary box
│   └── TableOfContents.tsx # TOC component
└── lib/                  # Utility functions
```

## Customization

- Update theme tokens in `tailwind.config.js`
- Modify content in `PRIVACY_POLICY.md`
- Customize components in `src/components/`
- Update metadata in page files

## License

© 2025 SecretBuddy. All rights reserved.
