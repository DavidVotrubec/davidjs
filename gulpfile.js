var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

var config = {
  sassInput: './sass/**/*.scss',
  sassOutput: './public/css',
  indexFile: './index.html'
};

// The default task. Obviously :)
gulp.task('default', ['sass', 'serve']);

gulp.task('sass', function(){
    // Find all .scss files in the input directory
    // run sass() on them
    // and move the output to the output folder
    return gulp
        .src(config.sassInput)
        .pipe(sass())
        .pipe(gulp.dest(config.sassOutput));
});

// Serve static files via gulp-server
gulp.task('serve', [], function(){
    //gulp.src(config.sassOutput)
    gulp.src('./')
        .pipe(webserver({
            livereload: true
        }))    
});