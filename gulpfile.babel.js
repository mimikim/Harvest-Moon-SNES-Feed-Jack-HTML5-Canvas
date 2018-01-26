// js written in es6, using babel to compile gulpfile

let gulp = require( './gulp' )( [
  'js',
  'css',
  'html',
  'watch'
] );

gulp.task( 'default', [ 'js', 'css', 'html', 'watch' ] );
