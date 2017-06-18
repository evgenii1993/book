const gulp          = require('gulp');
const concat        = require('gulp-concat');
const less          = require('gulp-less');
const minifyCSS     = require('gulp-minify-css');

gulp.task('build', function () {
    gulp.start([
        'less'
    ]);

});

gulp.task('watch',function(){
    gulp.watch([
        'less/**/*.*'     // Следим за изменением любых файлов в самой папке LESS и её подпапках
    ], ['less']);            // Запускаем задачу или ряд задач, если что-то из перечисленных файлов изменилось
});

// Задачи запускаемые по умолчанию
gulp.task('default', function () {
    gulp.start([
        'less',
        'watch'
    ]);
});


// Сборка CSS
gulp.task('less', function () {
    gulp.src([
        'less/styles.less'
    ])
        .pipe(less())
        .pipe(minifyCSS())                      // Минифицируем CSS
        .pipe(concat(
            'styles.css',                       // Файл после конкатинации
            {
                newLine: ''                     // Задаём стиль новой строки
            }
        ))
        .pipe(gulp.dest('.'))
        .pipe(gulp.dest('./'))                  // Сохраняем изменения в файл

});