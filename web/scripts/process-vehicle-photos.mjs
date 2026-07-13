import sharp from 'sharp'
import path from 'node:path'

const SRC = 'd:/Code/RelapseGFX/Mr. autosallon/assets/images/cars'
const OUT = 'd:/Code/RelapseGFX/Mr. autosallon/web/public/vehicles'

// [slug, srcDir, { bento, splitA, splitB }]
const jobs = [
  [
    'cayenne-turbo-gt',
    'porsche',
    {
      bento: '464757725_17874265542195794_2752318058905458947_n.jpg',
      splitA: '464980349_17874265569195794_4207411171570991669_n.jpg',
      splitB: '464765496_17874265581195794_6358659851467094657_n.jpg',
    },
  ],
  [
    's500',
    's500',
    {
      bento: '713583647_17945206902195794_467155824325360989_n.jpg',
      splitA: '713264621_17945206884195794_3527972253297595530_n.jpg',
      splitB: '714144276_17945207052195794_3073960831839563538_n.jpg',
    },
  ],
  [
    'x6',
    'x6',
    {
      bento: '599841089_17922386784195794_852696560812214487_n.jpg',
      splitA: '598808029_17922386850195794_6385809832749237767_n.jpg',
      splitB: '598633118_17922386862195794_2076197921653133888_n.jpg',
    },
  ],
  [
    'gclass',
    'gclass',
    {
      bento: '494991532_17897331198195794_4692276216700215153_n.jpg',
      splitA: '495272338_17897331177195794_5272102903887773624_n.jpg',
      splitB: '495053371_17897331276195794_3500479690637499135_n.jpg',
    },
  ],
]

for (const [slug, dir, files] of jobs) {
  for (const [key, filename] of Object.entries(files)) {
    const src = path.join(SRC, dir, filename)
    const isBento = key === 'bento'
    const outPath = path.join(OUT, slug, `${key}.webp`)
    await sharp(src)
      .rotate()
      .resize({
        width: isBento ? 1000 : 1100,
        height: isBento ? 1000 : 1350,
        fit: 'cover',
        position: 'attention',
      })
      .webp({ quality: 82 })
      .toFile(outPath)
    console.log('wrote', outPath)
  }
}
