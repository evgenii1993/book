var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify        = require('gulp-uglify');
var concat        = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

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

gulp.task('watch', ['build', 'less'], function () {
    gulp.watch([
        'site/**/*.jsx',
        'routes/clientRoutes.jsx',
        'routes/history.jsx'
    ], ['min']);

    gulp.watch([
        'less/**/*.less'
    ], ['less']);
});


gulp.task('less', function () {
    gulp.src([
        'less/styles.less'
    ])
        .pipe(less())
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions'],
        //     cascade: false
        // }))
        .pipe(minifyCSS())
        .pipe(concat('src/css/style.css'))
        .pipe(gulp.dest('.'));
});



gulp.task('default', ['watch']);
