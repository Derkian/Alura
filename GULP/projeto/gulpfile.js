var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
// var concat = require('gulp-concat');
// var htmlReplace = require('gulp-html-replace');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var cssmin = require('gulp-cssmin');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');
var jshintStylelish = require('jshint-stylish');
var csslint = require('gulp-csslint');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');

gulp.task('default', ['copy'],function(){
    gulp.start('build-img','usemin');
});

gulp.task('copy', ['clean'], function () {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
   return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', function () {
    gulp.src("dist/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));    
});

gulp.task('usemin',function(){
    gulp.src('dist/**/*.html')
    .pipe(usemin({
        'js' : [uglify],
        'css': [autoprefixer, cssmin]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);

    gulp.watch('src/js/**/*.js').on('change',function(event){
        console.log("Linting: " + event.path);
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylelish));  
    });

    gulp.watch('src/less/**/*.less').on('change', function(event) {
        var stream = gulp.src(event.path)
             .pipe(less().on('error', function(erro) {
               console.log('LESS, erro compilação: ' + erro.filename);
               console.log(erro.message);
             }))
             .pipe(gulp.dest('src/css'));
     });

    gulp.watch('src/css/**/*.css').on('change',function(event){
        console.log("Linting: " + event.path);

        gulp.src(event.path)
        .pipe(csslint())
        .pipe(csslint.reporter());        
    });
});