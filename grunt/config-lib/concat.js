module.exports = {
  options: {
    separator: ';',
    stripBanners: true
  },
  develop: {
    src: ['<%= pkg.config.src %>/js/libs/**/*', '!<%= pkg.config.src %>/js/libs/modernizr-dev.js'],
    dest: '<%= pkg.config.dev %>/js/compiled.js'
  }
};
