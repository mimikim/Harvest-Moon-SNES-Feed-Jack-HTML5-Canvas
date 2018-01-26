let gulp = require( 'gulp' );

const pug = require( 'gulp-pug' );

module.exports = () => {
  return gulp.src( 'src/*.pug' )
    .pipe( pug( {
      pretty: true
    } ) )
    .pipe( gulp.dest( 'docs/' ) );
};
