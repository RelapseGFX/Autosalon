// Placeholder spec data — verify against real documentation before this ships.
// See the landing page PRD, §05 "Section-by-section spec".
//
// heroTagline: the editorial H1 for each vehicle's video hero (distinct from
// the `identity` caption on the collection cards) — `tone` picks the light
// color it renders in over the dark video overlay.
export const vehicles = {
  'cayenne-turbo-gt': {
    slug: 'cayenne-turbo-gt',
    marque: 'Porsche',
    model: 'Cayenne Turbo GT',
    year: 2022,
    watermark: 'TURBO GT',
    modelPath: '/models/cayenne.glb',
    videoPath: '/video/cayenne-turntable.mp4',
    heroTagline: { text: 'Mass, Disciplined.', tone: 'white' },
    specs: [
      { label: 'Power', value: '631 hp' },
      { label: '0–60', value: '3.1s' },
      { label: 'Top Speed', value: '189 mph' },
      { label: 'Drivetrain', value: 'AWD' },
    ],
    performance: {
      engine: '4.0L Twin-Turbocharged V8',
      horsepower: '631',
      acceleration: '3.1s',
      topSpeed: '189 mph',
      torque: '626 lb-ft',
      transmission: '8-speed Tiptronic S',
    },
    summary:
      'Delivered with full service history and a documented inspection. Available for private viewing, by appointment.',
    editorial: {
      bentoImage: '/vehicles/cayenne-turbo-gt/bento.webp',
      splitA: {
        image: '/vehicles/cayenne-turbo-gt/splitA.webp',
        eyebrow: 'Presence',
        title: 'Weight, Redirected.',
        body: '631 horsepower doesn’t announce itself in the silhouette — it’s carried low, wide, and disciplined, an SUV that unlearns its own mass through a chassis tuned for something closer to a coupe.',
      },
      splitB: {
        image: '/vehicles/cayenne-turbo-gt/splitB.webp',
        eyebrow: 'Engineering',
        title: 'Turbo, Twice Over.',
        body: 'Twin-turbocharged V8 architecture pushed to its limit, paired with active anti-roll control and rear-axle steering — the Cayenne Turbo GT treats physics as a negotiation, not a constraint.',
      },
    },
  },
  s500: {
    slug: 's500',
    marque: 'Mercedes-Benz',
    model: 'S 500',
    year: 2024,
    watermark: 'S 500',
    modelPath: '/models/s500.glb',
    // Shared placeholder — no dedicated turntable footage yet, see PRD §08.
    videoPath: '/video/cayenne-turntable.mp4',
    heroTagline: { text: 'Silence, Perfected.', tone: 'cream' },
    specs: [
      { label: 'Power', value: '429 hp' },
      { label: '0–60', value: '4.9s' },
      { label: 'Top Speed', value: '130 mph' },
      { label: 'Drivetrain', value: 'AWD' },
    ],
    performance: {
      engine: '3.0L Turbocharged Inline-6 + EQ Boost',
      horsepower: '429',
      acceleration: '4.9s',
      topSpeed: '130 mph',
      torque: '384 lb-ft',
      transmission: '9-speed 9G-Tronic',
    },
    summary:
      'Delivered with full service history and a documented inspection. Available for private viewing, by appointment.',
    editorial: {
      bentoImage: '/vehicles/s500/bento.webp',
      splitA: {
        image: '/vehicles/s500/splitA.webp',
        eyebrow: 'Presence',
        title: 'The Room, Reconsidered.',
        body: 'The S-Class has always been Mercedes-Benz’s statement on what a cabin should feel like — here, that statement is quieter, longer, and more considered than anything else in its class.',
      },
      splitB: {
        image: '/vehicles/s500/splitB.webp',
        eyebrow: 'Engineering',
        title: 'Isolation as Craft.',
        body: 'Active road-noise cancellation, adaptive air suspension, and a twin-turbo V6 tuned for effortless delivery — every system exists to remove friction between driver and road.',
      },
    },
  },
  x6: {
    slug: 'x6',
    marque: 'BMW',
    model: 'X6 M',
    year: 2023,
    watermark: 'X6 M',
    modelPath: '/models/x6.glb',
    videoPath: '/video/cayenne-turntable.mp4',
    heroTagline: { text: 'Form Follows Force.', tone: 'white' },
    specs: [
      { label: 'Power', value: '617 hp' },
      { label: '0–60', value: '3.8s' },
      { label: 'Top Speed', value: '155 mph' },
      { label: 'Drivetrain', value: 'AWD' },
    ],
    performance: {
      engine: '4.4L Twin-Turbocharged V8',
      horsepower: '617',
      acceleration: '3.8s',
      topSpeed: '155 mph',
      torque: '553 lb-ft',
      transmission: '8-speed M Steptronic',
    },
    summary:
      'Delivered with full service history and a documented inspection. Available for private viewing, by appointment.',
    editorial: {
      bentoImage: '/vehicles/x6/bento.webp',
      splitA: {
        image: '/vehicles/x6/splitA.webp',
        eyebrow: 'Presence',
        title: 'A Coupe That Forgot Its Limits.',
        body: 'The falling roofline reads as a design decision until you notice what it’s hiding — 617 horsepower and a chassis built for a car half its size.',
      },
      splitB: {
        image: '/vehicles/x6/splitB.webp',
        eyebrow: 'Engineering',
        title: 'M Division, Unfiltered.',
        body: 'Twin-turbo V8, M xDrive all-wheel drive, and an electronically controlled M differential — the X6 M is BMW’s answer to a question nobody else was brave enough to ask.',
      },
    },
  },
  gclass: {
    slug: 'gclass',
    marque: 'Mercedes-Benz',
    model: 'G-Class',
    year: 2018,
    watermark: 'G-CLASS',
    modelPath: '/models/gclass.glb',
    videoPath: '/video/cayenne-turntable.mp4',
    heroTagline: { text: 'Unchanged By Design.', tone: 'white' },
    specs: [
      { label: 'Power', value: '416 hp' },
      { label: '0–60', value: '5.6s' },
      { label: 'Top Speed', value: '130 mph' },
      { label: 'Drivetrain', value: 'AWD' },
    ],
    performance: {
      engine: '4.0L Twin-Turbocharged V8',
      horsepower: '416',
      acceleration: '5.6s',
      topSpeed: '130 mph',
      torque: '450 lb-ft',
      transmission: '9-speed 9G-Tronic',
    },
    summary:
      'Delivered with full service history and a documented inspection. Available for private viewing, by appointment.',
    editorial: {
      bentoImage: '/vehicles/gclass/bento.webp',
      splitA: {
        image: '/vehicles/gclass/splitA.webp',
        eyebrow: 'Presence',
        title: 'The Shape That Refused to Change.',
        body: 'Four decades of automotive fashion have come and gone. The G-Class’s silhouette — upright, honest, uncompromising — has outlasted all of them.',
      },
      splitB: {
        image: '/vehicles/gclass/splitB.webp',
        eyebrow: 'Engineering',
        title: 'Built Like It Means It.',
        body: 'A ladder-frame chassis, three locking differentials, and portal axles — the G-Class is engineered for terrain that most SUVs only see in marketing photos.',
      },
    },
  },
}

// Collection preview cards. Photography is real inventory (carries the
// MR Autosalon watermark). Trimmed to only the vehicles with real
// on-location photography; Audi SQ8 and BMW 7 Series dropped until matching
// real photos exist for them.
export const collectionPreview = [
  {
    marque: 'Porsche',
    model: 'Cayenne Coupe',
    image: '/collection/porsche-cayenne-coupe.webp',
    slug: 'cayenne-turbo-gt',
    note: 'Interactive 3D',
    identity: 'Poised. Relentless.',
  },
  {
    marque: 'Mercedes-Benz',
    model: 'S-Class',
    image: '/collection/mercedes-s-class.webp',
    slug: 's500',
    note: 'Interactive 3D',
    identity: 'Pure. Unfiltered.',
  },
  {
    marque: 'BMW',
    model: 'X6',
    image: '/collection/bmw-x6.webp',
    slug: 'x6',
    note: 'Interactive 3D',
    identity: 'Bold. Unapologetic.',
  },
]
