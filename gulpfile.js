var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    flipper     = require('gulp-css-flipper'),
    rename      = require('gulp-rename'),
    browserSync = require('browser-sync'),
    useref      = require('gulp-useref'),
    uglify      = require('gulp-uglify'),
    gulpIf      = require('gulp-if'),
    cssnano     = require('gulp-cssnano'),
    imagemin    = require('gulp-imagemin'),
    cache       = require('gulp-cache'),
    del         = require('del'),
    runSequence = require('run-sequence');

var path = {
  sass:   'app/scss/**/*.scss',
  html:   'app/*.html',
  js:     'app/js/**/*.js',
  fonts:  'app/fonts/**/*',
  images: 'app/images/**/*.+(png|jpg|jpeg|gif|svg|ico)'
}


// Development Tasks 

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
});


// Sass
gulp.task('sass', function() {
  return gulp.src(path.sass) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass()) // Passes it through a gulp-sass
    .pipe(gulp.dest('app/css/')) // Outputs it in the css folder
});


// Watching
gulp.task('watch', function() {
  gulp.watch(path.sass, ['sass', browserSync.reload]);
  gulp.watch(path.html, browserSync.reload);
  gulp.watch(path.js, browserSync.reload);
});



// Optimizing 

// Optimizing CSS and JavaScript 
gulp.task('useref', function() {
  return gulp.src(path.html)
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});


// Optimizing Images 
gulp.task('images', function() {
  return gulp.src(path.images)
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/images'))
});


// Copying fonts 
gulp.task('fonts', function() {
  return gulp.src(path.fonts)
    .pipe(gulp.dest('dist/fonts'))
});


// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
});

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});



// Build Sequences

gulp.task('default', function (callback) {
  runSequence(['sass', 'watch', 'browserSync'],
    callback
  )
});


gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images', 'fonts'],
    callback
  )
});