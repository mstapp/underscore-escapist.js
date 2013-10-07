
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
    meta: {
      version: '1.0.0',
      banner: '/*!\n  Underscore-escapist.js, v<%= meta.version %>\n' +
        '  Copyright (c) <%= grunt.template.today("yyyy") %> Michael Stapp\n' +
        '  MIT License\n' +
        '  https://github.com/mstapp/underscore-escapistjs\n\n' +
        '  Includes escapist.js library\n*/\n\n'
    },

    concat: {
        options: {
            banner: '<%= meta.banner %>',
            process: function(src, filepath) {

                // not license file? just use src
                if (filepath.indexOf('LICENSE.txt') !== 0) {
                    return src;
                }

                // wrap license file in block comment
                return '/*!\n' + src + '*/\n';
            },
        },
        dist: {
            // the underscore-escapist-plugin.js file must come after escapist.js, so escapist loads first
            src: ['LICENSE.txt','libs/escapist.js','src/underscore-escapist-plugin.js'],
            dest: 'dist/underscore-escapist.js',
        },
    },

    clean: ['dist'],
  });


  grunt.registerTask('build', ['concat']);

  grunt.registerTask('default', 'build');
};

