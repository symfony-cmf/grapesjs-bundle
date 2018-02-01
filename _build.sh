#!/usr/bin/env bash
set -e
echo ""
echo " * Executing webpack..."
# Compile all javascript files and minify them together with Fancytree
webpack -p --progress

echo ""
echo " * Copying required vendor files to public directory..."