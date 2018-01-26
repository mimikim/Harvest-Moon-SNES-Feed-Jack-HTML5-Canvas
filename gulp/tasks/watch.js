let gulp = require('gulp');

module.exports = () => {
  gulp.watch( 'src/assets/js/**', [ 'js' ] );
  gulp.watch( 'src/assets/scss/**', [ 'css' ] );
  gulp.watch( 'src/*.pug', [ 'html' ] );
};
