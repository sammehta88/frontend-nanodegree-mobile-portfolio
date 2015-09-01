module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //css minifier, not configured to combine files, change if needed https://github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['css/*.css'],
          dest: 'release',
          ext: '.min.css'
        }]
      }
    },
    //JS minifier  (https://github.com/gruntjs/grunt-contrib-uglify)
    uglify: {
      target: {
        files: {
          'release/js/perfmatters.min.js': ['js/perfmatters.js'],
        }
      }
    },
    //https://github.com/gruntjs/grunt-contrib-imagemin
    imagemin: {
      main: {
        //only for png?
        options: {
          optimizationLevel: 3,
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg}'],
          dest: 'release/img'
        }]
      },
      pizza: {
        options: {
          optimizationLevel: 5,
        },
        files: {
          'views/release/images/pizzeria-large.jpg': 'views/resized/images/pizzeria-large.jpg',
          'views/release/images/pizzeria-med.jpg': 'views/resized/images/pizzeria-med.jpg',
          'views/release/images/pizzeria-small.jpg': 'views/resized/images/pizzeria-small.jpg',
          'views/release/images/pizza.png': 'views/images/pizza.png'
        }
      }
    },
    //https://github.com/andismith/grunt-responsive-images
    responsive_images: {
      target: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: 100,
            quality: 20
          },{
            name: 'large',
            width: 720,
            quality: 20
          },{
            name: 'med',
            width: 293,
            quality: 20
          }]
        },
        files: [{
          expand: true,
          cwd: 'views/',
          src: ['images/*.jpg'],
          dest: 'views/resized'
        }]
      }
    },
    //TODO: update JSHint and watch configurations
    //below code from example at http://gruntjs.com/configuring-tasks
    //has not been modified to work with this project yet
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['jshint', 'cssmin', 'imagemin', 'uglify']);

};