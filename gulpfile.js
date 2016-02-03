'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var browserify = require('browserify');
var tsify = require('tsify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

var config = {
  sassInput: './sass/**/*.scss',
  sassOutput: './public/css',
  indexFile: './index.html',
  scriptsInput: './src/**/*.ts', //same files as refered in tsconfig.json but can be used in gulp.watch
  scriptsOutputFolder: './public/js',
  scriptsOutputFile: 'main.js'
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
                           noImplicitAny: false,
                           module: 'commonjs',
                           out: config.scriptsOutputFile
                       }));

    return tsResult.js
                .pipe(concat(config.scriptsOutputFile)) // You can use other plugins that also support gulp-sourcemaps
                .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
                .pipe(gulp.dest(config.scriptsOutputFolder));
});
// 
// gulp.task('javascript', function () {
//   // set up the browserify instance on a task basis
//   var b = browserify({
//     entries: './public/js/main.js',
//     debug: true
//   });
// 
//   return b.bundle()
//     .pipe(source('app.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//         // Add transformation tasks to the pipeline here.
//         .pipe(uglify())
//         .on('error', gutil.log)
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./dist/js/'));
// });

gulp.task('test', function(){
    return browserify()
        .add('public/js/' + config.scriptsOutputFile)
        .plugin(tsify, { noImplicitAny: true })
        .bundle()
        .on('error', function (error) { console.error(error.toString()); })
        .pipe(gulp.dest('./build/'));
        ;
        //.pipe(process.stdout);
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