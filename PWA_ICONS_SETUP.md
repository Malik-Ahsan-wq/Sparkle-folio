# PWA Icons Setup Instructions

## Required Icons:
You need to create two PNG icons from your favicon.svg:

1. **icon-192x192.png** - 192x192 pixels
2. **icon-512x512.png** - 512x512 pixels

## How to Generate Icons:

### Option 1: Using Online Tool (Easiest)
1. Visit: https://www.pwabuilder.com/imageGenerator
2. Upload your `/public/favicon.svg`
3. Download the generated icons
4. Place them in `/public/` folder

### Option 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first
# Then run:
convert favicon.svg -resize 192x192 icon-192x192.png
convert favicon.svg -resize 512x512 icon-512x512.png
```

### Option 3: Using Photoshop/Figma
1. Open your favicon.svg
2. Export as PNG with dimensions 192x192
3. Export as PNG with dimensions 512x512
4. Save both in `/public/` folder

## After Creating Icons:
Place both PNG files in the `/public/` directory:
- `/public/icon-192x192.png`
- `/public/icon-512x512.png`

Then rebuild your app with `npm run build`
