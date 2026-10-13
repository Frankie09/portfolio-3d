# Frankie · 3D Portfolio

Static HTML, CSS, and JavaScript portfolio using Three.js from jsDelivr. There is no build step, framework, or backend. It uses the PS5 portfolio as the content source and keeps its project photos in `assets/img/`.

## Run locally

Open this folder in VS Code and use Live Server on `index.html`, or run a local static server:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000/interactive-3d-portfolio/` if the server is started from the parent portfolio folder, or `http://localhost:8000/` if started inside this folder. Do not open the file directly because browser ES modules and CDN imports need HTTP.

## Controls

- W/A/S/D or arrow keys: move relative to the camera direction
- Shift: sprint
- Space: jump
- Drag: orbit the camera
- E: interact with a nearby terminal
- Escape: close a detail panel
- Mobile: on-screen directional pad and action buttons; drag the scene to orbit

## Publish at frankie.github.io/portfolio-3d

Create a new repository named `portfolio-3d` and place the contents of this folder at its root. In the repository, select **Settings → Pages → Deploy from a branch**, choose `main` and `/(root)`. The relative file and image paths are set up to work under the `/portfolio-3d/` subpath. The Three.js module is loaded from jsDelivr, so the site needs a network connection to that CDN.

## Content

Profile, capabilities, seven featured projects, five notable internal systems, skills, experience, education, and social links are synchronized from the PS5 portfolio. No per-project repository or live-demo URLs, email, or certifications were present in that source, so those are not fabricated. Edit the `PROFILE`, `PROJECTS`, `INTERNAL_PROJECTS`, `SKILLS`, `EXPERIENCE`, and `EDUCATION` data near the top of `script.js` when content changes.
