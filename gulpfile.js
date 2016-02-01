var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
  sassInput: './sass/**/*.scss',
  sassOutput: './public/css'  
};

gulp.task('sass', function(){
    // Find all .scss files in the input directory
    // run sass() on them
    // and move the output to the output folder
    return gulp
        .src(config.sassInput)
        .pipe(sass())
        .pipe(gulp.dest(config.sassOutput));
});