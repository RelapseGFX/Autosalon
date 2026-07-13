# Mr. Autosalon — Landing Page PRD

**Document status:** Draft v1.5 — hero toggle expanded to four models (X6, G-Class added)
**Prepared:** 12 July 2026
**Scope:** Flagship landing page + information architecture for the full site

> A full-fidelity, designed version of this document (with worked hero mockups,
> spec tables, and a marque-strip preview) was published as an artifact during
> planning. This file is the durable source-of-truth copy that lives with the
> project.

---

## 00. Brief & brand thesis

**The instinct to work from:** *light ≠ empty.* Dark, moody, chrome-on-black is
the default cliché for performance-car marketing — it reads as aftermarket
tuner culture, not curation. A gallery reads as premium because the lighting
is even, the walls are quiet, and the object is trusted to hold attention on
its own. That's the register to build in.

**Positioning statement:** Mr. Autosalon is a curated house for German
performance and luxury automobiles — BMW, Mercedes‑Benz, Audi, Porsche, and
their peers — presented the way a gallery presents sculpture: one vehicle,
fully lit, fully documented, at a time.

**Brand pillars:**
- **Provenance over inventory.** Every vehicle is introduced by its history —
  ownership, service record, inspection — not just a spec sheet and a price.
- **Engineering as the subject.** The car is framed as a design and mechanical
  achievement. Copy talks about the work, not the deal.
- **Quiet confidence.** No countdown timers, no "won't last long," no red sale
  badges. Trust is built through restraint.
- **White-glove access.** Appointment-led and concierge-supported. The page's
  job is to earn a conversation, not close a transaction.

**Voice — say this / not this:**

| Say | Not this |
|---|---|
| "Delivered with full service history and a documented inspection." | "HUGE SAVINGS — won't last!" |
| "Available for private viewing, by appointment." | "Click below to unlock our best price!" |
| "One of 4 finished in this specification." | "★★★★★ Rated #1 Dealer!" |
| "A specialist will call within one business day." | "Chat now for an INSTANT quote!!" |

---

## 01. Audience

| Persona | Job on this page |
|---|---|
| **The collector** — already owns 2–3 performance cars, knows the model they want | Get to specs, provenance, and condition fast, then book a private viewing |
| **The upgrading buyer** — moving up from a mass-market/entry-luxury car | Education, reassurance, a low-pressure way to start a conversation |
| **The existing client** — returning for service, detailing, storage, or their next car | Reach a person fast, bypass the marketing narrative |

---

## 02. Content research

Cross-referencing flagship marque sites (Porsche, Audi, Bentley), curated
marketplaces built on trust rather than volume (Bring a Trailer, DuPont
Registry), and independent specialist dealers, the content that consistently
earns trust for a high-consideration purchase:

| Content type | Why it's there | Priority |
|---|---|---|
| Curated collection | Marque, model, year, trim, key specs, condition summary, one CTA per vehicle | V1 |
| Provenance sheet per vehicle | Ownership history, service records, inspection report, factory options | V1 |
| Marque statements | Short editorial paragraph per brand explaining why it's carried here | V1 |
| Philosophy / craft story | The "why us" narrative — sourcing standard, inspection process | V1 |
| Services | Sourcing & acquisition, consignment, financing, detailing, storage, delivery | V1 |
| Concierge / appointment booking | Private viewing scheduler, direct contact, showroom hours & location | V1 |
| Team & expertise | Specialist bios, marque credentials | V1 |
| Press & testimonials | Understated client quotes, media mentions — no star-rating widgets | V1 |
| Journal / editorial | Long-form pieces on specific models or the market — SEO/authority | V2 |
| Legal & trust | Dealer license, financing disclosures, privacy policy | V1 |

---

## 03. Information architecture

**Site map:**

| Page | Contains | Phase |
|---|---|---|
| Home (landing page) | Hero, marque strip, featured 3D vehicle, philosophy, collection preview, services, trust, testimonial, appointment CTA | V1 |
| Collection | Full inventory grid, filter by marque / body style / status | V1 |
| Vehicle detail | 3D or gallery viewer, full spec sheet, provenance, inquire CTA | V1 |
| Marque hubs (BMW / Mercedes‑Benz / Audi / Porsche) | Brand statement + filtered collection | V2 |
| Services | Acquisition, consignment, financing, detailing, storage, delivery | V1 |
| The Salon | Philosophy, team, facility, credentials | V1 |
| Journal | Editorial long-form content | V2 |
| Appointments / contact | Booking form, location, hours | V1 |
| Legal | Privacy, terms, financing disclosures | V1 |

**Landing page scope** — a guided walkthrough, not a directory:

```
Hero → Marque strip → Featured vehicle (3D) → Philosophy → Collection preview
→ Process & services → Provenance & trust → Testimonial → Appointment CTA → Footer
```

---

## 04. Product requirements

**Goals**
1. Establish premium credibility in the first viewport.
2. Let the 3D vehicle carry the emotional weight of the page — touchable, not decorative.
3. Convert qualified visitors into booked private viewings or concierge inquiries.
4. Be honest about current inventory depth.
5. Perform. The 3D payload must not cost mobile visitors the first impression.

**Non-goals (V1)**
- No checkout, deposit, or financing calculator.
- No live inventory CMS — hand-authored content for a small curated set.
- No marque hub pages — validate the flagship page and one vehicle-detail template first.

**Success metrics**

| Metric | Type | Target |
|---|---|---|
| Appointment / inquiry submissions | Primary | 3–6% of sessions |
| 3D model interaction rate (hero) | Secondary | > 35% of hero viewers |
| Scroll depth to Collection section | Secondary | > 50% of sessions |
| Largest Contentful Paint | Technical | < 2.5s |
| Interaction to Next Paint | Technical | < 200ms |
| Cumulative Layout Shift | Technical | < 0.1 |

**Functional requirements**

| ID | Requirement |
|---|---|
| FR-01 | Hero presents one featured vehicle with an interactive 3D viewer: drag-to-orbit, scroll-tied camera sweep, static poster fallback |
| FR-02 | 3D canvas exposes an accessible text alternative for screen readers and non-WebGL fallback |
| FR-03 | Marque strip displays served brands; each mark links to a filtered collection anchor or marque statement |
| FR-04 | Collection preview mixes 3D-ready and photography-based cards without visual inconsistency |
| FR-05 | Appointment form validates client- and server-side; spam-protected without a visible CAPTCHA |
| FR-06 | Every vehicle card/detail view has a static rendered OG/share image — 3D can't be the only representation for link previews or crawlers |
| FR-07 | Marketing copy is content-managed or cleanly separated from code |
| FR-08 | Analytics events: hero 3D interaction, collection card click, appointment form submit, marque strip click |
| FR-09 | Responsive nav collapses to a minimal top bar under 900px |

**Non-functional requirements**
- **Accessibility:** WCAG 2.1 AA. Keyboard-operable 3D controls with a non-3D fallback path. `prefers-reduced-motion` disables scroll-scrub and parallax. Text contrast on the light palette must hold 4.5:1.
- **Browser support:** evergreen desktop + mobile; graceful poster-image fallback where WebGL is unavailable.
- **SEO:** server-rendered text content; `Vehicle`/`Product` structured data where applicable.
- **Privacy:** plain-language lead-form data disclosure, consistent with the trust pillar.

> ⚠️ **Launch blocker:** the BMW/Audi/Mercedes marks currently in `/assets`
> are sourced from a third-party logo repository, not official manufacturer
> press kits. Using OEM trademarks in commercial marketing — especially as an
> independent, non-franchised specialist — is real legal exposure. Confirm
> dealer status with each marque before shipping, and either source logos
> from official brand press/media pages under their usage guidelines, or use
> neutral typographic marque names instead.

---

## 05. Section-by-section spec

### Hero
Eyebrow: `MR. AUTOSALON — PRIVATE SHOWROOM FOR GERMAN PERFORMANCE`
Headline: **"Engineering, exhibited."**
Sub: "A private collection of BMW, Mercedes‑Benz, Audi, and Porsche — each
vehicle inspected, documented, and shown by appointment."
CTAs: `View the Collection` (solid) / `Request a Private Viewing` (ghost)
Alt headline directions: *"Every vehicle here has already proven itself."*
(leans provenance) or *"Not a lot. A collection."* (leans curation vs.
marketplace contrast).

### Featured vehicle — interactive 3D showcase
Currently featured: **Porsche Cayenne Turbo GT · 2022**
Spec strip (verify against real documentation before shipping): 631 hp ·
3.1s 0–60 · 189 mph top speed · AWD
Microcopy: "Drag to rotate — scroll to explore" (disappears on first interaction)

### Philosophy
Pull-quote: *"Every vehicle in this room earned its place through history,
not just horsepower."*

### Collection preview
3–4 cards. Be explicit where a vehicle isn't 3D-ready yet — "By appointment,
full documentation on request" is honest and still premium.

### Process & services
Five entries, one line each: Sourcing & Acquisition · Consignment ·
Certified Inspection · White-Glove Delivery · Concierge Storage.

### Provenance & trust band
Three stat callouts in mono numerals (years curating / vehicles placed /
documented history). **Do not ship placeholder numbers** — get real figures.

### Testimonial
One understated client quote, italic serif, attributed by first name + car
owned. No star widgets.

### Visit / appointment
"By appointment only." Fields: name, phone, email, vehicle of interest,
preferred date/time, message. One line on discretion/privacy near submit.

---

## 06. User flow

1. **Arrive on hero** — tone set in one screen, no modal/popup competing for attention.
2. **Engage the 3D model** — scroll-tied rotation invites interaction passively; drag confirms it.
3. **Read the philosophy statement** — reframes "browsing cars" as "considering a curated collection."
4. **Scan the collection preview** — collector clicks a specific vehicle; upgrading buyer keeps scrolling.
5. **Absorb trust signals** — services, provenance stats, testimonial.
6. **Submit an inquiry** — low-friction form, clear next step on confirmation.

Secondary flow — existing client: footer service links reach contact/service
in one click, bypassing the narrative.

---

## 07. Motion & interaction

**Do:** scroll-scrubbed camera orbit on the featured vehicle with free-drag
override; 8–12px upward fade reveals (400–600ms ease-out, fire once);
collection cards lift 2–4px on hover with soft shadow bloom; marque logos
shift monochrome → full tone on hover; thin mono-type loading state for the
3D asset, not a spinner; generous section padding (120–180px) doing the work
of a transition.

**Don't:** scroll-jack or alter native scroll speed; parallax for its own
sake; autoplay video with sound; countdown timers / urgency banners / exit
popups; particle backgrounds or anything competing with the vehicle for
attention.

Respect `prefers-reduced-motion`: disable scroll-scrub camera movement and
parallax, keep only opacity fades.

> **Implementation note:** avoid `scroll-behavior: smooth` on `html` when a
> scroll-tied 3D rotation is present — it decouples visual scroll from actual
> wheel input and fights the 1:1 feel the rotation depends on. Learned the
> hard way in the first prototype; removed.

---

## 08. 3D integration

### Asset inventory (as it sits in the repo)

```
assets/
├── porsche.blend        ← Blender source (editable)
├── porsche.blend1       ← autosave
└── model.mp4            ← turntable clip — NOT the Cayenne, see flag below

design/
├── FINAL_MODEL.fbx      ← exported mesh (superseded by re-export from .blend)
├── Global_Texture_Coloured_Diffuse.png
├── badges.png, mask.png, common_carbon05_*.png
├── Porsche_CayenneTurboGT_2022_*.png   (52 PBR maps: Badge, Calliper, Engine,
│    Grille ×9, Interior, InteriorTilling, LicensePlate, Light,
│    ManufacturerPlate, Textured, Wheel)
└── web/
    └── cayenne.glb      ← pipeline output, lives beside the source
```

### Pipeline (as actually run, not just planned)

1. Export glTF/GLB natively from `assets/porsche.blend` via headless Blender
   (`blender --background porsche.blend --python export_glb.py`), not by
   converting the FBX — cleaner PBR channel mapping.
2. **Strip scene debris before export.** The source file carries a leftover
   default "Cube" object (scale 1.0, ~50× the size of the actual car) and
   full **duplicate copies of the body/badge/interior meshes stacked at the
   identical transform** (e.g. `body_1:Paint_Geo_lodABody_lodA.001` sitting
   exactly on top of the original). Left in, the stray cube occludes the
   camera entirely, and the duplicate paint shells z-fight into a blotchy
   noise pattern that looks like a broken texture. Fixed by removing the
   stray cube and any object whose name matches `<base>.NNN` where an
   un-suffixed object of the same base name also exists.
3. Enable Draco mesh compression at export (`export_draco_mesh_compression_enable`).
4. Run the result through `gltf-transform optimize` (`@gltf-transform/cli`):
   WebP texture recompression, 2048px texture cap, Meshopt re-encoding.
5. Force `alphaMode: OPAQUE` on every material except genuine glass/lens
   surfaces (see "Material fix" below) — the Blender export left 19 of 23
   materials on `BLEND` (interior, badges, callipers, wheels, grille...),
   which is what caused the see-through/ghosting look.
6. Copy into `design/web/cayenne.glb` (source-adjacent) and mirror into the
   app's `public/models/` at build time.

**Real numbers from this pipeline** (not projections):

| Stage | Size |
|---|---|
| Source FBX + loose textures | 19 MB |
| Fresh GLB export, Draco-compressed, debris removed | 5.2 MB |
| After `gltf-transform optimize` (WebP + Meshopt) | 2.3 MB |
| After forcing correct `alphaMode` on 18 materials | **2.5 MB** |

Comfortably inside the 4–8 MB hero budget originally planned — removing the
duplicate geometry alone cut the optimized output nearly in half versus the
first pass that still contained the z-fighting duplicates (4.0 MB → 2.3 MB).

### Scale note
There is no universal scale constant — every source model has its own
native export scale, and each needs its own calibration against the shared
camera/lighting rig. This lives in `heroModels` (`Home.jsx`), not baked into
either asset:
- **Cayenne:** authored at roughly 0.05 scene-units across (a Blender
  unit-scale/export quirk) → `scale: 58`.
- **S 500:** authored at real-world-ish scale, ~20 units long (a completely
  unrelated Sketchfab/3ds Max pipeline) → `scale: 0.1375`. Applying the
  Cayenne's 58× to this model made it enormous — tens of units across,
  large enough that the camera rig ended up *inside* the car's bounding
  box, rendering nothing.

### Material fix — see-through / phantom transparency (both models)
Both source assets ship with `alphaMode: BLEND` on the large majority of
their materials — interior trim, badges, tyres, carpet, leather, chrome,
grille — regardless of whether the surface is actually meant to be
transparent. Rendered as-is, this produces a ghostly, see-through look
across the whole car, not just the glass. Confirmed on both models via
`gltf-transform inspect`:

| Model | Materials | Originally BLEND |
|---|---|---|
| Cayenne | 23 | 19 (83%) |
| S 500 | 62 (pre-merge) | 58 (94%) |

Fixed with a small Node script against the `@gltf-transform/core` API
(`NodeIO`, registering `ALL_EXTENSIONS` + the Meshopt decoder/encoder so it
round-trips already-compressed `.glb` files): force `alphaMode: OPAQUE` on
every material, except names matching a glass/lens allowlist per model
(Cayenne: `LightA_Material`; S 500: names containing `glass`, `steklo`
["glass" in the original Russian-language 3ds Max material names],
`indicator`, `reflector`, `lightsglow`, `shaderdisplay`/`shaderrear`, or
`moodlighting`). Not a CLI flag — this was a one-off script, not part of
the standard `gltf-transform optimize` invocation; re-run it if either
model is re-exported from source.

S 500 also shipped every material on the legacy
`KHR_materials_pbrSpecularGlossiness` extension, which `THREE.GLTFLoader`
doesn't support — it was silently ignoring all texture/color data and
rendering flat white. Fixed with `gltf-transform metalrough` (converts
spec/gloss → the standard metallic-roughness workflow) before the alpha fix
and final optimize pass.

### Rendering approach
- **Framework:** react-three-fiber + drei — scroll-tied camera control the
  hero needs. `useGLTF` in drei already wires up both Draco and Meshopt
  decoding; only the decoder path needs pointing at a local copy
  (`useGLTF.setDecoderPath('/draco/')`) instead of the default gstatic CDN.
- **Lighting:** neutral, soft studio HDRI — even and slightly cool, not
  moody automotive lighting. The biggest lever for "light ≠ empty" at the
  3D layer specifically.
- **Ground:** matte, pale plane with a soft contact shadow — no reflective
  infinite-mirror floor.
- **Camera:** constrained orbit (limited polar angle), scroll-tied
  auto-sweep within the featured section, free-drag override on interaction.
- **Loading:** show a static render or the turntable clip immediately, swap
  to the interactive GLB once loaded in the background.
- **Fallback:** static high-res render for no-WebGL browsers and crawlers,
  plus descriptive alt/aria text on the canvas.

> ⚠️ **Content flag:** `assets/model.mp4` — assumed during planning to be a
> Cayenne turntable — is actually footage of a different, unrelated vehicle
> (a vintage roadster). It is currently *not* used as the source of truth
> anywhere finalized; before it ships anywhere labeled "Cayenne Turbo GT,"
> either swap in real footage or render a turntable directly from the
> (now-corrected) `cayenne.glb`.

### S 500 (Mercedes-Benz) — second hero model, toggle

The hero now carries a "Porsche / S 500" toggle (`Home.jsx`) that swaps
which vehicle loads into the 3D stage. This was a small change because
`VehicleModel.jsx` (renamed from the Cayenne-specific `CayenneModel.jsx`)
takes any `modelPath` — adding a second car is a state change, not a
rewrite. A `HeroSceneBoundary` error boundary wraps the 3D stage so a failed
model load shows a "Model unavailable" message in place of the canvas
instead of crashing the page — kept in place as a safety net for any future
model swap, even though the S 500 asset itself is now resolved (below).

**Status: resolved.** The complete Sketchfab export (`scene.gltf` +
`scene.bin` + 112 textures) was added to `assets/Porsche3DHero/`. Unlike the
Cayenne, this needed a four-step pipeline before the final `optimize` pass —
a straight `gltf-transform optimize` on the raw export rendered as an
invisible, all-white, badly-scaled mess:

1. `gltf-transform center <in> <out> --pivot below` — **the source geometry
   was offset ~840–970 units from the origin** (world-space coordinates
   baked in from the original Sketchfab scene), nowhere near the camera.
   This alone was why nothing rendered at all before this fix.
2. `gltf-transform metalrough <in> <out>` — converts the legacy
   `KHR_materials_pbrSpecularGlossiness` workflow (100% of this model's
   materials) to standard metallic-roughness, which `THREE.GLTFLoader`
   actually supports. Without this, every material rendered flat white —
   the loader was silently discarding all texture/color data.
3. Custom alpha-mode fix script — see "Material fix" above. Fixed the
   see-through/ghosting look (94% of materials were `BLEND`).
4. `gltf-transform optimize <in> "public/models/s500.glb"` — same Meshopt +
   WebP + 2048px-cap settings as the Cayenne, CLI defaults.

| Stage | Size |
|---|---|
| Source (`.gltf` + `.bin` + textures) | 19.6 MB |
| After center + metalrough + alpha-fix + optimize | **10.7 MB** |

Noticeably heavier than the Cayenne's 2.5 MB — this model includes a fully
modeled interior (71 meshes, 62 source materials before palette merging).
10.7 MB is above the 4–8 MB hero budget from §08's original plan; worth a
follow-up pass (more aggressive `--simplify-ratio`, or stripping interior
detail not visible from the default camera angle) before this ships
broadly, though it's clearly acceptable for one desktop-vs-desktop
comparison.

The loader also emitted `Skipping TEXCOORD_0; out of [0,1] range` warnings
during quantization — worth a look if any texture appears misaligned, but
didn't block the optimize pass.

### X6 (BMW) and G-Class (Mercedes-Benz) — third and fourth hero models

The hero toggle (`Home.jsx`) now has four options: Porsche, S 500, X6,
G-Class. Both new assets arrived as complete Sketchfab exports (`.gltf` +
`.bin` + `textures/`) in `assets/Porsche3DHero/` — `x6.gltf`/`x6.bin`/
`x-6textures/` and `g-class_.gltf`/`g-class_scene.bin`/`g-class_textures/`.

**Filename collision note:** both gltf files internally reference their
buffer and textures as `scene.bin` / `textures/` (generic Sketchfab
defaults) rather than their actual on-disk filenames, which would otherwise
collide with the S 500's own `scene.bin`/`textures/` already sitting in the
same folder. Each was processed in an isolated temp copy with the buffer
and texture folder renamed to match what the `.gltf` expects, before
running through the pipeline — a repeatable gotcha if `Porsche3DHero/`
gains a fifth model.

Unlike the Cayenne and S 500, these two arrived **already correctly
authored** — no legacy `KHR_materials_pbrSpecularGlossiness` (0 materials
on either), and `alphaMode: BLEND` used sparingly and correctly (X6: 4/18
materials, mostly named `..._trans`; G-Class: 1/28, the headlight glass) —
no material fixes needed, unlike the Cayenne/S 500 phantom-transparency bug
above. Verified visually: both render with correct paint/materials, no
ghosting.

The real difference: **much heavier source geometry** — 2.2–2.7M vertices
each, versus ~340K for the Cayenne/S 500. Pipeline:

1. `gltf-transform center <in> <out> --pivot below` — X6's geometry was
   offset ~98–221 units from the origin (same class of bug as the S 500);
   G-Class was already close to centered but run through the same step for
   consistency.
2. `gltf-transform optimize <in> <out>` — CLI defaults (Meshopt, WebP,
   2048px cap) already reduced both to a shippable size without needing
   extra `--simplify-ratio` tuning.

| Model | Source | Optimized |
|---|---|---|
| X6 | 27.4 MB | **7.1 MB** |
| G-Class | 70.7 MB | **13.5 MB** |

X6 lands comfortably inside the 4–8 MB budget. G-Class is the heaviest
asset on the page — above budget for the same reason as the S 500 (fully
modeled interior/underbody detail from a very high-poly source), and the
best candidate of the four for a future simplification pass if page-weight
becomes a concern.

**Scale calibration** (§08 "Scale note" convention — every model gets its
own factor targeting the Cayenne's ~2.86-unit rendered length):
- X6: native length ~441 units → `scale: 0.0065`
- G-Class: native length ~2.69 units → `scale: 1.0641`

**Still open:** all four hero models carry Sketchfab CC-BY-4.0 licenses
requiring author attribution — Ddiaz Design (Cayenne), Cxyber (S 500), GT
Cars: Hyperspeed (X6), Burak Ozkan (G-Class). None of this is credited
anywhere on the site yet; add credits somewhere before any of this ships
publicly.

---

## 09. Visual references

| Reference | Borrow | Don't copy literally |
|---|---|---|
| Porsche.com | Product-first homepage rhythm; lifestyle imagery used sparingly | Their density of navigation — keep this page simpler |
| Bugatti.com | Extreme restraint; huge whitespace; lets the object do the talking | Near-total absence of content depth — this page needs more provenance/trust content |
| Bentley / Rolls‑Royce flagship sites | Heritage storytelling tone, unhurried pacing | Heavier ornamental typography — keep the type system leaner |
| Contemporary art/design museum digital experiences | One object per screen, curatorial wall-text tone, negative space as meaning | Overly academic voice — keep it warm, not clinical |

For live, current examples: Awwwards' "Automotive" and "Luxury" categories
move fast — check close to build time rather than relying on a fixed list.

---

## 10. Recommended tech stack

| Layer | Recommendation | Why |
|---|---|---|
| Framework | Next.js (App Router) *(prototype uses Vite — see note)* | SSR/SSG keeps marketing copy crawlable with a heavy 3D client layer |
| 3D rendering | three.js via react-three-fiber + drei | Scroll-tied camera control; large ecosystem for loaders/LOD |
| Asset pipeline | Blender export → `gltf-transform` / `gltfpack` | Draco/Meshopt + WebP, proven path from source files to web-ready GLB |
| Scroll / motion | Framer Motion (prototype) or GSAP + ScrollTrigger | Either works; pick one motion engine, not two |
| Styling | Tailwind CSS v4 + design tokens | Utility velocity with a disciplined type scale |
| Content / CMS | Hardcoded data for V1; Sanity.io once inventory grows | 1–2 vehicles doesn't justify CMS overhead yet |
| Forms | React Hook Form + Zod → serverless function → email/CRM | Honeypot + rate limiting over a visible CAPTCHA |
| Hosting | Vercel | Edge caching and image CDN matter given asset weight |
| Analytics | Plausible or Vercel Analytics | Privacy-respecting, consistent with the trust pillar |

> **Prototype note:** the first functional build used **Vite** rather than
> Next.js (per the build brief) for speed of iteration. Vite's newest major
> (v8, Rolldown-based) failed to resolve its native binding on this machine's
> Node version — pinned to stable Vite 6 (Rollup-based). Revisit Next.js for
> the SSR/SEO win before this goes further than a prototype.

---

## 11. Performance & accessibility budget

| Target | Value |
|---|---|
| Largest Contentful Paint | < 2.5s |
| Interaction to Next Paint | < 200ms |
| Cumulative Layout Shift | < 0.1 |
| Lighthouse Performance, mobile, 3D loaded | ≥ 85 |
| Text contrast (light theme) | ≥ 4.5:1 |

- Keyboard-operable throughout, including a non-3D path to every vehicle's specs and imagery.
- `prefers-reduced-motion` disables camera scrubbing and parallax.
- Descriptive alt text / ARIA live region for the 3D canvas.

---

## 12. Phasing

| Phase | Scope |
|---|---|
| **V1** | Hero + 3D Cayenne, marque strip, philosophy, collection preview (3D + photography mix), services, trust band, testimonial, appointment form, footer, one vehicle-detail template |
| **V2** | Additional 3D vehicles, marque hub pages, journal/editorial, live inventory CMS, saved vehicles for returning clients |
| **V3** | Configurator-style material variants (paint/wheel swap) on the hero vehicle, if it earns its complexity against real engagement data |

---

## 13. Open questions / needed from you

- Final business name — proceeding with **Mr. Autosalon**, which turned out
  not to be a placeholder: real inventory photography in `assets/images/`
  carries an authentic "MR Autosallon" watermark and phone number, confirming
  this is the actual business name.
- Real trust figures for the provenance band (years operating, vehicles placed).
- Verified specs for the Cayenne Turbo GT listing (631 hp / 3.1s are unverified placeholders).
- Dealer status (franchised vs. independent specialist) — determines legal use of OEM marque logos (§04 blocker).
- Showroom location, hours, financing-partner disclosure needs.
- Real Cayenne turntable footage or a rendered replacement for the mismatched `model.mp4`.
- **New:** `assets/images/cars/png/gclass.png` is a third-party dealer's photo
  (visible "BRAMLEY" plate, another property in the reflections) that ended
  up in the assets folder — confirm whether it was meant as inspiration only
  before it's used anywhere public. The other five photos in that folder
  (Cayenne Coupe, BMW 7 Series, Audi Q8, S‑Class, BMW X6) carry your own
  "MR Autosallon" watermark and are safe to use as real inventory content.
