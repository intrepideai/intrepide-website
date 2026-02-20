# Intrepide AI — Marketing Website

Single-page marketing website for [Intrepide AI](https://intrepide.ai), an AI consulting and software development firm.

## Tech Stack

- **Next.js 15+** — App Router, standalone output
- **Tailwind CSS 4** — CSS-first config, custom properties throughout
- **Framer Motion 12** — Scroll-triggered animations, counter animations
- **TypeScript** — Strict mode

## Local Development

```bash
npm install
npm run dev
```

Runs on http://localhost:3000 with Turbopack.

## Build

```bash
npm run build
npm run start
```

## Deploy

### Docker

```bash
# Build image
docker build -t clyderegistry.azurecr.io/intrepide-website:latest .

# Push to Azure Container Registry
az acr login --name clyderegistry
docker push clyderegistry.azurecr.io/intrepide-website:latest

# Update container app
az containerapp update \
  --name intrepide-website \
  --resource-group intrepide \
  --image clyderegistry.azurecr.io/intrepide-website:latest
```

### Live URLs

- **Current**: https://intrepide-website.bravehill-aae88b64.eastus2.azurecontainerapps.io
- **Planned**: https://intrepide.ai

## Environment Variables

Contact form email delivery (optional — form still logs to console without them):

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | SMTP port (default: 587) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `SMTP_FROM` | From address (default: clyde@intrepide.ai) |
| `MAIL_API_URL` | Internal mail relay API endpoint |

## Structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, metadata, JSON-LD
    page.tsx            # Composes all sections
    globals.css         # Tailwind + CSS custom properties
    api/contact/        # Contact form POST handler
    sitemap.ts          # Dynamic sitemap
  components/           # 11 section components, all "use client"
public/                 # Static assets
```

## Contact

clyde@intrepide.ai
