Portfolio Website
=============

Responsive website built with [jQuery](https://jquery.com/), [LESS](http://lesscss.org/), and [Node.js](http://nodejs.org/).

This repo holds the files for my portfolio website, which you can view at [www.carmenvkrol.com](http://www.carmenvkrol). *Note that this website is deployed from the Github repo: [carmenvkrol.github.io](https://github.com/carmenvkrol/carmenvkrol.github.io).


Configuration
------------
Configuring this project should be consistent across Mac (local) and Vagrant.  You should already have [Node.js](http://nodejs.org) installed before cloning.

Start by cloning the repository
```
$ git clone https://github.com/carmenvkrol/portfolio-website.git.
```

This app uses [Grunt](http://gruntjs.com/) to run tasks.  Install the Grunt Command Line Interface (`grunt-cli`) locally on your machine.
```
$ npm install -g grunt-cli
```

Once that's complete, install the remaining dependencies, except Bower, by running
```
$ npm install
```

Then install bower packages by running:
```
$ bower install
```


Running the Application
------------
To see the site locally, open [index.html](https://github.com/carmenvkrol/portfolio-website/blob/master/index.html) in your browser.


Preparing to Deploy
------------
In order to prepare for deployment, including minifying files, run:
```
$ grunt
``` 

Directory Structure and Grunt
------------
```
portfolio-website/
 |__dist/ #client-side production files
 |__scripts/ #client-side custom jQuery file
 |__styles/ #client-side style files, both CSS and LESS
 Gruntfile.js
 index.html

```


LESS
------------
This app uses the CSS pre-processor [LESS](http://lesscss.org/) in order to facilitate styling with [Bootstrap](http://getbootstrap.com/css/), which is included.  LESS files can be found in the styles direcotry. In order for these files to be converted into CSS, and modify styling in the views, save LESS files within the less folder.

To compile LESS into CSS, run:
```
$ grunt less
```


Grunt Plugins
------------
A list of the plugins used by Grunt and what they're used for:

**[Grunt](http://gruntjs.com/getting-started)** - installs grunt, which automates many JavaScript tasks

**[Grunt-Autoprefixer](https://github.com/postcss/autoprefixer)** - parses CSS and adds vendor-prefixed CSS properties

**[Grunt-Concurrent](https://github.com/sindresorhus/grunt-concurrent)** - runs grunt tasks concurrently

**[Grunt-Contrib](https://github.com/gruntjs/grunt-contrib)** - collection of common grunt tasks

**[Grunt-Contrib-Clean](https://github.com/gruntjs/grunt-contrib-clean)** - cleans files and folders

**[Grunt-Contrib-Concat](https://github.com/gruntjs/grunt-contrib-clean)** - concatenates files for production mode

**[Grunt-Contrib-Connect](https://github.com/gruntjs/grunt-contrib-connect)** - starts a static web server

**[Grunt-Contrib-Copy](https://github.com/gruntjs/grunt-contrib-copy)** - copies files and folders for production mode

**[Grunt-Contrib-CSSmin](https://github.com/gruntjs/grunt-contrib-cssmin)** - minifies CSS files for production

**[Grunt-Contrib-HTMLmin](https://github.com/gruntjs/grunt-contrib-htmlmin)** - minifies HTML files for production

**[Grunt-Contrib-Imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)** - minifies image files for production

**[Grunt-Contrib-Less](https://github.com/gruntjs/grunt-contrib-less)** - compiles LESS files into CSS.  See LESS section below for more details about styles in this application.

**[Grunt-Contrib-Uglify](https://github.com/gruntjs/grunt-contrib-uglify)** - compresses and minifies JavaScript files

**[Grunt-Filerev](https://github.com/yeoman/grunt-filerev)** - static asset revisioning through file content hash

**[Grunt-Google-CDN](https://github.com/btford/grunt-google-cdn)** - replaces refs on the Google CDN

**[Grunt-Karma](https://github.com/karma-runner/grunt-karma)** - for running Karma, a test runner for JavaScript. 

**[Grunt-Newer](https://github.com/tschaub/grunt-newer)** - configures grunt tasks to run with newer files only

**[Grunt-SVGmin](https://github.com/sindresorhus/grunt-svgmin)** - minifies SVG files

**[Grunt-Usemin](https://github.com/yeoman/grunt-usemin)** - replaces references to non-optimized scripts or stylesheets into a set of HTML files

**[Grunt-Wiredep](https://github.com/stephenplusplus/grunt-wiredep)** - injects Bower packages into source code

**[Load-Grunt-Tasks](https://github.com/sindresorhus/load-grunt-tasks)** - loads grunt tasks simulataneously instead of individually

**[Time-Grunt](https://github.com/sindresorhus/time-grunt)** - displays elapsed execution time of grunt tasks


Other Packages
------------
A list of other plugins used in this application and their purpose:

**[JSHint-Stylish](https://github.com/sindresorhus/jshint-stylish)** - stylish reporter for JSHint

**[LESS](https://www.npmjs.com/package/less)** - CSS pre-processor [LESS](http://lesscss.org/)


Screenshots
------------
![](https://github.com/carmenvkrol/portfolio-website/blob/master/portfolio-website-screenshot1.png)

------------

![](https://github.com/carmenvkrol/portfolio-website/blob/master/portfolio-website-screenshot2.png)

------------

![](https://github.com/carmenvkrol/portfolio-website/blob/master/portfolio-website-screenshot3.png)