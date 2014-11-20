module.exports = {
  develop: {
    allFiles: [
      '<%= pkg.config.src %>/scss/*.scss',
    ],
    options: {
      reporterOutput: '<%= pkg.config.src %>/scss-lint-report.xml',
      colorizeOutput: true
    },
  }
};
