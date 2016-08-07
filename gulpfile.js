var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('assets/css/'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('scss/*.scss', ['sass']);
});