module.exports = {
  plugins: {
    'autoprefixer': {},
    'css-mqpacker': {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      browser: 'last 2 versions',
      features: {
        'nesting-rules': true
      },
      stage: 1
    },
    'cssnano': {}
  }
};
