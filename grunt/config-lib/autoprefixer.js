module.exports = {
  options: {
    browsers: ['last 2 versions'],
    map: true
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: '<%= paths.dist %>/css/*.css',
    dest: '<%= paths.dist %>/css/'
  }
};
