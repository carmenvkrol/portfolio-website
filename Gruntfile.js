// Heavily edited version of generated on 2014-07-14 using generator-angular 0.9.2
'use strict';

module.exports = function (grunt) {

  var files_to_bump = [
    'dist/index.html'
  ];

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Less settings
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          //target.css file: source.less file
          'styles/main.css': 'styles/less/main.less'
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist/{,*/}*',
            '!dist/.git*'
          ]
        }]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      options: {
        cwd: '/'
      },
      app: {
        src: ['dist/index.html'],
        ignorePath:  /\.\.\//
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          'dist/scripts/{,*/}*.js',
          'dist/styles/{,*/}*.css'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: 'dist/index.html',
      options: {
        dest: 'dist',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['dist/index.html'],
      css: ['dist/styles/main.css'],
      options: {
        assetsDirs: ['dist/','styles/images']
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'styles/',
          src: ['main.css', 'main.css'],
          dest: 'dist/styles',
          ext: '.css'
        }]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: 'dist/styles/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles/images',
          src: '{,*/}*.svg',
          dest: 'dist/styles/images'
        }]
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/scripts/scripts.js': [
            'scripts/custom.js'
          ],
          'dist/scripts/vendor.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js'
          ]
        }
      }
    },
    concat: {
      dist: {}
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['index.html'],
          dest: 'dist'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          dest: 'dist/',
          src: [
            'index.html',
            'styles/images/{,*/}*.{webp}',
            'styles/fonts/*',
            'styles/pictonic/*',
            'styles/pictonic/*/*'
          ]
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist/css/',
          src: 'bootstrap.css',
          dest: 'dist/styles/'
        }]
      },
      styles: {
        expand: true,
        cwd: 'styles/',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },
  });

  grunt.registerTask('addVers', 'add version to files to override caching', function(){
    var re = /\?version_tag=.*(?=\")/gi;
    grunt.file.expand(files_to_bump).forEach( function(file, idx) {
      var content = grunt.file.read(file).replace(re, function(match, p1){
        var results = Date.now();
        var replaceSection = match.match(/version_tag=(.*)/)[1];
        return match.replace(replaceSection, results);
      });
      grunt.file.write(file, content);
    });
  });

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'less',
    'autoprefixer',
    'concat', 
    'copy:dist',
    'cssmin',
    'uglify',
    'usemin',
    'addVers',
    'htmlmin',
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
