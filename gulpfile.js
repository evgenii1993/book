var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify        = require('gulp-uglify');
var concat        = require('gulp-concat');


gulp.task('build', function () {
    return browserify({
    	entries: './site/app.jsx',
    	extensions: ['.jsx'],
    	debug: true
    })
    .transform('babelify', {
    	presets: ["es2015", "react", "stage-0"]
    })
    .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('src/js/'));
});

gulp.task('min', ['build'], function () {

    gulp.src([
        "src/js/bundle.js"
    ])
        .pipe(concat('src/js/scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./site/**/*.jsx', ['min']);
});




gulp.task('default', ['watch']);
