'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var config = {
  sassInput: './sass/**/*.scss',
  sassOutput: './public/css',
  indexFile: './index.html',
  scriptsInput: './src/**/*.ts', //same files as refered in tsconfig.json but can be used in gulp.watch
  scriptsOutputFolder: './public/js',
  scriptsOutputFile: 'main.js',
};

///////////////////////////////////
// The default task. Obviously :)
///////////////////////////////////
gulp.task('default', ['sass', 'typescript', 'sass:watch', 'serve']);

gulp.task('sass', function(){
    // Find all .scss files in the input directory
    // run sass() on them
    // and move the output to the output folder
    return gulp
        .src(config.sassInput)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.sassOutput));
});

gulp.task('typescript', function() {
        var tsResult = gulp.src(config.scriptsInput)
                       .pipe(sourcemaps.init()) // This means sourcemaps will be generated
                       .pipe(ts({
                           sortOutput: true,
                           noImplicitAny: true,
                           module: 'commonjs',
                           out: config.scriptsOutputFile
                       }));

    return tsResult.js
                .pipe(concat(config.scriptsOutputFile)) // You can use other plugins that also support gulp-sourcemaps
                .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
                .pipe(gulp.dest(config.scriptsOutputFolder));
});


// Serve static files via gulp-server
gulp.task('serve', [], function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true
        }))    
});

// watch sass files for changes
// then trigger livereload
gulp.task('sass:watch', function(){
   gulp.watch(config.sassInput, ['sass']); 
   gulp.watch(config.scriptsInput, ['typescript']);
});