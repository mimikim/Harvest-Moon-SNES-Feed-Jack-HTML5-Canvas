Feed Jack! Application
======

## Demo
[Demo Link](https://mimikim.github.io/Harvest-Moon-SNES-Feed-Jack-HTML5-Canvas/)

## Description
This interactive application creates animations using sprites from the SNES game, Harvest Moon.

Version 3 takes what was created in v2 and transforms it into a React application. It utilizes React, JSX, and ES6. 

Dependencies are managed through webpack. 

The application queries a Node.js back-end API to render the `<option>` html markup for the Food items selection. Browser-side, it queries another custom-written API to generate the user's selection.

Features es6 class syntax, HTML5 Canvas, and and Pug. This application creates animations using sprites from the SNES game Harvest Moon.

All food sprite data is assembled from a local JSON file and outputs into HTML for cleaner markup.

Assets are within `/src`, and public-facing files are compiled into `/docs`. 

## Credits
- [Harvest Moon, video game for SNES](https://en.wikipedia.org/wiki/Harvest_Moon_(video_game))
- [npm](https://www.npmjs.com/)
- [Babel](https://babeljs.io/)
- [Gulp](https://gulpjs.com/)
- [Pug](https://github.com/pugjs/pug)

## Previous Releases
Version 1 - original version!
Version 2 - es6 classes, html5 canvas, and pug. gulp for dev automation