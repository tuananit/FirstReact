var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

// define gulp task named build that could be run by typing gulp build
gulp.task('build', function(){
    // start to describe what our build task will do
    // tell gulp to use babelify for app.jsx
    // turn on debug mode which is beneficial for development
    return browserify({entries: './app.jsx', extensions: ['.jsx'], debug: true})
        // apply babelify transform to our code
        // this allows us to convert code written in ECMAScript6 to ECMAScript5
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js')) // output the result to dist/bunble.js
        .pipe(gulp.dest('dist'));
});

// define gulp task named watch that could be run by typing gulp watch
// this task will run build task whenever any of jsx file changes
gulp.task('watch',['build'], function(){
    gulp.watch('*.jsx', ['build']);
});

// define default gulp task that could be run by typing gulp
// this task simply executes watch task which is declared above
gulp.task('default', ['watch']);