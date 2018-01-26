let gulp = require( 'gulp' );

const sass = require( 'gulp-sass' ),
  rename = require( 'gulp-rename' ),
  autoprefixer = require( 'gulp-autoprefixer' ),
  postcss = require( 'gulp-postcss' ),
  svg = require( 'postcss-svg' )();

module.exports = () => {
  return gulp.src( 'src/assets/scss/*.scss' )
    .pipe( sass( {
      outputStyle: 'compressed'
    } ).on( 'error', sass.logError ) )
    .pipe( autoprefixer( {
      browsers: [ 'last 2 versions', 'ie >= 9', 'and_chr >= 2.3' ],
      cascade: false
    } ) )
    .pipe( postcss( [ svg ] ) )
    .pipe( rename( 'style.min.css' ) )
    .pipe( gulp.dest( 'docs/assets/css' ) );
};

