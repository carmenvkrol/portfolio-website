// Generated on 2014-07-14 using generator-angular 0.9.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    //yeoman: appConfig,

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
          'styles/main.css': 'styles/main.less'
        }
      }
    },

    recess: {
      options: {
            compile: true
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'styles',
                src: '{,*/}*.less',
                dest: '.tmp/styles/',
                ext: '.css'
           }]
        }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      styles: {
        files: ['styles/{,*/}*.css'],
        tasks: ['newer:less', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      recess: {
        files: ['styles/{,*/}*.less'],
        tasks: ['recess:dist']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'index.html',
          'scripts/{,*/}*.js',
          '.tmp/styles/{,*/}*.css',
          'styles/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: 'dist/'
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
      },
      server: '.tmp'
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
              js: ['concat', 'uglifyjs'], //TODO add concat back when have multiple files
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
          cwd: '.tmp/images',
          dest: 'dist/images',
          src: ['generated/*']
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


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'less',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('heroku:production', ['clean:server', 'less']);

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
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
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
