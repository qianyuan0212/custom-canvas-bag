#!/bin/bash

# Create a temporary SVG with a purple background and white bag icon
cat > temp-icon.svg << EOF
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="128" fill="#6b46c1"/>
  <path d="M128 192C128 174.327 142.327 160 160 160H352C369.673 160 384 174.327 384 192V352C384 369.673 369.673 384 352 384H160C142.327 384 128 369.673 128 352V192Z" fill="white"/>
  <path d="M192 160V128C192 110.327 206.327 96 224 96H288C305.673 96 320 110.327 320 128V160" stroke="white" stroke-width="32"/>
</svg>
EOF

# Generate PNG files
for size in 16 32 192 512; do
  convert -background none -size ${size}x${size} temp-icon.svg public/favicon-${size}x${size}.png
done

# Rename files to match the required names
mv public/favicon-16x16.png public/favicon-16x16.png
mv public/favicon-32x32.png public/favicon-32x32.png
mv public/favicon-192x192.png public/android-chrome-192x192.png
mv public/favicon-512x512.png public/android-chrome-512x512.png
cp public/android-chrome-192x192.png public/apple-touch-icon.png

# Generate social media images
convert -background none -size 1200x630 public/og-image.svg public/og-image.jpg
convert -background none -size 1200x630 public/twitter-image.svg public/twitter-image.jpg

# Clean up
rm temp-icon.svg 