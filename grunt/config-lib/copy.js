module.exports = {
  images: {
    files: [
      { expand: true, flatten: true, cwd: '/images', src: '**', dest: '/images' }
    ]
  },
  js: {
    files: [
      { expand: true, flatten: true, cwd: '/js', src: 'modernizr.js', dest: '/js' }
    ]
  }
};
