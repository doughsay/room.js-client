#!/bin/sh

# copy index.html
mkdir -p dist
cp src/index.html dist/index.html

# copy css
mkdir -p dist/css
cp src/css/main.css dist/css/
cp src/css/tango-dark.css dist/css/

# copy bower deps
mkdir -p dist/js
cp bower_components/knockout/dist/knockout.js dist/js/
cp bower_components/codemirror/lib/codemirror.js dist/js/
mkdir -p dist/js/codemirror/modes
cp bower_components/codemirror/mode/javascript/javascript.js dist/js/codemirror/modes/
mkdir -p dist/css
cp bower_components/codemirror/lib/codemirror.css dist/css/
mkdir -p dist/css/codemirror/themes
cp bower_components/codemirror/theme/tomorrow-night-bright.css dist/css/codemirror/themes/
cp bower_components/linkifyjs/linkify.js dist/js/
cp bower_components/linkifyjs/linkify-html.js dist/js/

# copy favicons
cp src/favicons/* dist/

# build bundle
./node_modules/.bin/rollup -c
