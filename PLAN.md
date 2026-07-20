# WarpVoyage Implementation Plan

## Educational & Fun Goals
- **Educational**: Accurate astronomical data (NASA/ESA), explanations of physics (warp concepts, relativity), exoplanet science.
- **Fun**: Immersive FPV, gamification, AI narratives, social sharing.

## Phase 1: MVP (1-2 weeks)
1. Setup React + Three.js scene with starfield and basic planets.
2. Destination selector with real exoplanet data.
3. Simple travel animation on 3D map.
4. Placeholder video/animation for warp.
5. Basic UI with Tailwind.

## Phase 2: Core Features
- Procedural stars from Gaia data.
- Warp shader effects.
- AI story generation (browser LLM or server).
- Admin panel (React admin with auth).

## Phase 3: Polish
- WebXR support.
- Space weather integration.
- Multi-user elements.

## LLM Integration
- Browser: WebLLM or Transformers.js for on-device.
- Server: Ollama API or custom endpoint for stories.

## Admin Interface
- Control destinations, content, users, analytics.
- Built with React, perhaps TanStack Table + forms.