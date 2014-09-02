module.exports = function(grunt) {
  'use strict';

  // Grunticon
  grunt.registerTask(
    'images',
    'Serves svg styles and backup pngs.',
    ['grunticon']
  );

  // Development
  grunt.registerTask(
    'serve',
    'Build a development (_dev) site with watch the comand running.',
    ['sass:develop', 'concat:develop', 'copy:js', 'copy:images', 'watch' ]
  );

};
