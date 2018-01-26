let gulp = require( 'gulp' );

module.exports = tasks => {

  // for each js file, register task
  tasks.forEach( name => {

    gulp.task( name, require( './tasks/' + name ) );

  } );

  return gulp;
};
