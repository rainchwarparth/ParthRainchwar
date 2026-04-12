# Parth Rainchwar — Portfolio

> Software Engineer & AI Researcher working at the intersection of systems engineering and behavioral science.

I build data systems that operate under real constraints — ambiguity, ethics, scale, and time.
I study patterns in cognition and choice through statistical and computational methods.

## Connect

| | |
|---|---|
| **Email** | parthrainchwar@gmail.com |
| **LinkedIn** | [linkedin.com/in/parthrainchwar](https://linkedin.com/in/parthrainchwar) |
| **GitHub** | [github.com/rainchwarparth](https://github.com/rainchwarparth) |
| **Portfolio** | [parthrainchwar](https://parthrainchwar.vercel.app/) |

## Currently

| | |
|---|---|
| **Work** | Senior Analyst at Synpulse (Dec 2024 – Present) — financial systems consulting for global institutions and private banks |
| **Learning** | BITS Pilani — PG Certificate in AI & ML (distance, in progress) |
| **Fellowship** | Policy in Action — governance, civic tech, and policy design in India (Apr 2026) |

## Featured Work

### Builder — Tech Projects

| Project | Description | Stack | Repo |
|---|---|---|---|
| **TraceAI** | Agentic deep-research platform mapping knowledge as a structured graph. No hallucination by design. | Next.js 16, TypeScript, Groq, ReactFlow | [github](https://github.com/rainchwarparth/TraceAI-Public) |
| **Sansad** | Browser-based Indian election strategy game — 543 constituencies, 5,000+ candidates, AI advisor | React, TypeScript, Game Design | [github](https://github.com/rainchwarparth/Sansad-Game) |
| **Trek Recommender** | ML-powered trekking destination recommender — 208+ treks, cosine similarity, under 1s response | Flask, scikit-learn, Python | [github](https://github.com/rainchwarparth/Treck-Recommendation-System-2022) |

### Thinker — Research & Case Studies

| Study | Area |
|---|---|
| **Behavioral Psychology & UX** | How cognitive biases shape digital product decisions |
| **ONDC Vision** | Open commerce networks and their socioeconomic implications in India |
| **E-commerce Conversion** | Statistical analysis of drop-off patterns and persuasion mechanics |
| **Haar Cascade Face Detection** | Computer vision implementation with academic publication |

## This Repo

Portfolio site source — React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion, managed with Bun.

```
src/
  components/portfolio/   UI components
  data/                   JSON content (projects, case studies, certs, timeline)
  pages/                  Route-level page components
  lib/                    Shared utilities
public/
  certificates/           Certificate images
  case-studies/           Case study assets
```

```bash
bun install
bun run dev    # localhost:5173
bun run build  # production build to dist/
```