let gulp = require( 'gulp' );

const eslint = require( 'gulp-eslint' ),
  concat = require( 'gulp-concat' ),
  uglify = require( 'gulp-uglify' ),
  rename = require( 'gulp-rename' ),
  babel = require( 'gulp-babel' ),
  order = require( 'gulp-order' );

module.exports = () => {
  return gulp.src( 'src/assets/js/**' )
    .pipe( eslint() )
    .pipe( babel() )
    .pipe( order( [
      'src/assets/js/classes/View.js',
      'src/assets/js/classes/Food.js',
      'src/assets/js/classes/Jack.js',
      'src/assets/js/classes/App.js',
      'src/assets/js/script.js',
    ] ) )
    .pipe( concat( 'scripts.js' ) )
    .pipe( uglify() )
    .pipe( rename( 'scripts.min.js' ) )
    .pipe( gulp.dest( 'docs/assets/js' ) );
};
