'use strict'
var gulp = require('gulp')
  , source = require('vinyl-source-stream')
  , streamify = require('gulp-streamify')
  , browserify = require('browserify')
  , sass = require('gulp-sass')
  , jade = require('gulp-jade')
  , uglify = require('gulp-uglify')
  , livereload = require('gulp-livereload')
  , gutil = require('gulp-util')
  , jshint = require('gulp-jshint')

var PORT = 7777
  , SRC  = './src'
  , DEST = './public'

// wrap a stream in an error catcher
function catchErrors(stream) {
  stream.on('error', function(err) {
    gutil.log(gutil.colors.red('Error'), err.message)
    stream.end()
  })
  return stream
}

// compile jade file
gulp.task('jade', function() {
  gulp.src('./src/index.jade')
    .pipe(catchErrors(jade()))
    .pipe(gulp.dest(DEST))
})

// compile js as a browserify bundle
gulp.task('js', function() {
  catchErrors(browserify(SRC + '/js/index.js').bundle())
    .pipe(source('bundle.js'))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest(DEST + '/js'))
})

gulp.task('lint', function() {
  return gulp.src(SRC + '/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
})

// compile sass
gulp.task('sass', function () {
  gulp.src(SRC + '/css/main.scss')
    .pipe(catchErrors(sass({outputStyle: 'compressed'})))
    .pipe(gulp.dest(DEST + '/css'));
})

// build all assets
gulp.task('build', ['jade', 'sass', 'js'])

// start a simple static asset server
gulp.task('server', function(next) {
  var connect = require('connect')
    , serveStatic = require('serve-static')
    , server = connect()
  server.use(serveStatic(DEST)).listen(PORT, next)
})

// rebuild on changes + livereload
gulp.task('watch', ['build', 'server'], function() {
  var server = livereload()

  gulp.watch(SRC + '/css/**', ['sass'])
  gulp.watch(SRC + '/js/**', ['js'])
  gulp.watch(SRC + '/index.jade', ['jade'])

  gulp.watch(DEST + '/**').on('change', function(file) {
    server.changed(file.path)
  })
})

// rebuild on changes without livereload
gulp.task('watch-light', ['build', 'server'], function() {
  gulp.watch(SRC + '/css/**', ['sass'])
  gulp.watch(SRC + '/js/**', ['js'])
  gulp.watch(SRC + '/index.jade', ['jade'])
})
