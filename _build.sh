#!/usr/bin/env bash
set -e
echo ""
echo " * Executing webpack..."
# Compile all javascript files and minify them together with Fancytree
webpack -p --progress

echo ""
echo " * Copying required vendor files to public directory..."

# grapesjs plugins
if [ ! -d "./src/Resources/public/vendor/grapesjs" ]; then
    mkdir ./src/Resources/public/vendor/grapesjs
    mkdir ./src/Resources/public/vendor/grapesjs/js
    mkdir ./src/Resources/public/vendor/grapesjs/css
fi
cp ./node_modules/grapesjs/dist/css/grapes.min.css ./src/Resources/public/vendor/grapesjs/css/grapesjs.min.css
cp ./node_modules/grapesjs/dist/grapes.js ./src/Resources/public/vendor/grapesjs/js/grapes.js
cp -R ./node_modules/grapesjs/dist/fonts/ ./src/Resources/public/vendor/grapesjs/fonts/
cp ./node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js ./src/Resources/public/vendor/grapesjs/js/grapesjs-preset-webpage.min.js
cp ./node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css ./src/Resources/public/vendor/grapesjs/css/grapesjs-preset-webpage.min.css
