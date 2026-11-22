# Nguyen Minh Tuan — Developer Portfolio

A responsive React + Vite portfolio with a dark/light theme, subtle CSS 3D-inspired hero artwork, project showcases, and a résumé download.

## 1. Requirements

- Node.js 26
- npm 11 (included with Node.js)
- Intellij IDEA

## 2. Run locally

Open a terminal in this project folder and run:

```bash
npm install
npm run dev
```

Open the local address printed by Vite: `http://localhost:5173`.

Stop the development server with `Ctrl + C`.

## 3. Build the production website

```bash
npm run build
```

Vite creates the deployable website in the `dist/` folder. Preview that build locally with:

```bash
npm run preview
```

## 4. Personalize before publishing

Review these items in `src/App.jsx`:

- Hero introduction and internship availability
- About text and education details
- Skills and their learning levels
- Project descriptions and GitHub URLs
- Email address and phone number

The CV shown by the résumé button is `public/Nguyen-Minh-Tuan-CV.pdf`. Replace it with an updated PDF using the same filename, or update the link in `src/App.jsx`.


## 5. Publish with Netlify (simple option)

1. Run `npm run build`.
2. Sign in to Netlify and choose the manual deploy / drag-and-drop option.
3. Drag the generated `dist/` folder into the deploy area.
4. Netlify will provide a public website URL. You can change the site name in its site settings.

For future updates, edit the source files, run `npm run build` again, and upload the new `dist/` folder.

## Project structure

```text
nguyen-minh-tuan-portfolio/
├── public/
│   ├── favicon.svg
│   └── Nguyen-Minh-Tuan-CV.pdf
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Notes

- The 3D-like hero and project artwork are CSS illustrations, not screenshots of the original games.
- The theme choice is saved in the browser's local storage.
- The page supports desktop and mobile layouts and respects reduced-motion preferences.
