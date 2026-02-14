# PROJECT.md - Intrepide Website

**This file is the single source of truth for agent boundaries and project context.**

---

## 📋 Project Overview

| Field | Value |
|-------|-------|
| **Project Name** | Intrepide Website |
| **Client/Company** | Intrepide (intrepide.ai) |
| **Status** | Production |
| **Created** | 2026-01-31 |
| **Last Updated** | 2026-02-06 |
| **Primary Contact** | Alex <alex@intrepide.ai> |
| **Lead Agent** | Clyde |
| **Recommended Model** | claude-sonnet-4 |

---

## 🎯 Purpose & Scope

**What this project is:**
- Public-facing marketing website for Intrepide AI
- Single-page application showcasing services and company mission
- Hosted on Replit with simple Express.js server

**What this project is NOT:**
- Not a customer dashboard or SaaS product
- Not handling sensitive data or user accounts
- Not a complex multi-page application

---

## 🔐 Golden Rules (Agent Boundaries)

**Agents CAN:**
- ✅ Read all files in this project directory
- ✅ Make code changes and test locally
- ✅ Update copy, styles, and layout
- ✅ Push to GitHub (triggers Replit auto-deploy)
- ✅ Fix bugs and improve performance

**Agents CANNOT:**
- ❌ Use Replit Agent for code changes (use local Git workflow only)
- ❌ Change domain/DNS settings without approval
- ❌ Add backend services that require infrastructure
- ❌ Modify site analytics or tracking without approval

**Escalation Path:**
1. Worker agent → Clyde (smarter model)
2. Clyde → Alex (human review)
3. Deploy issues → follow Replit workflow in TOOLS.md

---

## ☁️ Azure Infrastructure

| Resource Type | Name | Purpose | Access Level |
|---------------|------|---------|--------------|
| **Subscription** | Intrepide Azure (TODO: confirm ID) | Billing boundary | Read |
| **Resource Group** | intrepide-website-rg | Future Azure hosting | Not yet created |

**Current Hosting:** Replit (https://intrepide-website.replit.app)

**Region:** N/A (Replit-hosted)

**Naming Convention:** When migrating to Azure:
- Format: `intrepide-web-{environment}-{resource-type}`
- Example: `intrepide-web-prod-app`

---

## 🌐 Environments & URLs

### Production
- **URL:** https://intrepide-website.replit.app
- **Replit Editor:** https://replit.com/t/intrepide/repls/intrepide-website
- **Branch:** `main`

### Development
- **Local:** http://localhost:3000
- **Branch:** `main` (single branch currently)

---

## 📦 Git Repositories

| Repo | URL | Branch Strategy | Deploy Target |
|------|-----|-----------------|---------------|
| Main Repo | https://github.com/intrepideai/intrepide-website.git | Single branch (main) | Replit auto-deploy |

**Branch Protection:**
- `main` — No protection currently (small project)

**Deployment Flow:**
1. Edit locally in `/Users/clyde/clyde/projects/intrepide-website`
2. Commit and push to GitHub
3. Pull in Replit Shell: `git fetch origin && git reset --hard origin/main`
4. Click "Republish" button in Replit UI
5. Wait 60-90 seconds for deployment

**See TOOLS.md → "Replit Workflow" for detailed steps**

---

## 🔑 Secrets & Configuration

**Credentials Location:**
- No secrets currently required (static site)
- Replit credentials in Alex's account

**Future considerations:**
- Contact form backend will need email API key
- Analytics keys (if added)

---

## 📂 Project File Tree

**Root Directory:** `/Users/clyde/clyde/projects/intrepide-website/`

```
intrepide-website/
├── PROJECT.md              ← YOU ARE HERE
├── index.html              ← Main page
├── style.css               ← Styles
├── script.js               ← Client-side JS
├── server.js               ← Express server (minimal)
├── logo.svg                ← Intrepide logo
├── package.json            ← Dependencies
├── .replit                 ← Replit config
└── .git/                   ← Git repo
```

**Key Documents Agents Should Read:**
1. `PROJECT.md` (this file) — **ALWAYS read first**
2. `index.html` — understand site structure
3. `TOOLS.md` (workspace) — Replit deployment workflow

---

## 🛠️ Development Workflow

### Local Development
```bash
# Setup
cd /Users/clyde/clyde/projects/intrepide-website
npm install

# Running locally
npm start
# Visit http://localhost:3000

# Testing
# (No automated tests currently)
```

### Deployment (Replit)
```bash
# 1. Make changes locally
# 2. Commit and push
git add -A
git commit -m "Your message"
git push origin main

# 3. In Replit Shell tab:
git fetch origin && git reset --hard origin/main

# 4. Click "Republish" button in Replit UI
# 5. Wait 60-90 seconds for deployment
```

### CI/CD Pipeline
- **Status:** Manual deployment via Replit
- **Future:** Could migrate to Azure Container Apps with GitHub Actions

---

## 🧠 Agent Model Routing

**Recommended model tier for this project:**

| Task Type | Model | Reasoning |
|-----------|-------|-----------|
| Content updates | claude-sonnet-4 | Fast, good at writing |
| Design changes | claude-sonnet-4 | Balance of speed + capability |
| Bug fixes | claude-sonnet-4 | Fast iteration |
| Major redesign | claude-opus-4 | Complex reasoning for architecture |

---

## 📊 Current Status

**Phase:** Production

**Recent Updates:**
- 2026-01-31: Initial launch
- 2026-02-05: Last content update

**Known Issues:**
- None currently

**Next Steps:**
1. TODO: Add contact form backend
2. TODO: Consider Azure migration for better control

---

## 🔗 External Dependencies

| Service | Purpose | Credentials Location | Critical? |
|---------|---------|----------------------|-----------|
| Replit | Hosting platform | Alex's account | Yes |
| GitHub | Source control | intrepideai org | Yes |

---

## 📞 Escalation & Support

**If blocked:**
1. Check this file for boundaries
2. Check `TOOLS.md` → "Replit Workflow"
3. Escalate to Alex for Replit access issues

**Emergency contact:** Alex via iMessage +14044520536

---

## 🗂️ Related Projects

- None currently (standalone marketing site)

---

**⚠️ IMPORTANT:** This file is THE authority. When in doubt, refer here first. If this file conflicts with other docs, THIS FILE WINS.
