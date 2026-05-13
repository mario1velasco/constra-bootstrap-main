#!/bin/bash

# install gulp
echo "Installing gulp..."
npm -g install gulp-cli

# install dependencies
echo "Installing dependencies..."
npm install

# generate demo
echo "Generating demo site..."
npm run deploy

# optimize CSS with PurgeCSS
echo "Optimizing CSS with PurgeCSS..."
npm run purge