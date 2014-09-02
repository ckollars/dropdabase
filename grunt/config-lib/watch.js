module.exports = {
  options: {
    livereload: true
  },
  sass: {
    files: ['/scss/**/*.scss'],
    tasks: ['sass:develop']
  },
  js: {
    files: ['/js/*.js','/js/lib/*.js'],
    tasks: ['concat:wp', 'copy:js']
  },
  assets: {
    files: ['/images/**'],
    tasks: ['copy:images']
  },
  svg: {
    files: ['/svg/**'],
    tasks: ['grunticon:icons', 'copy:grunticon']
  }
};
