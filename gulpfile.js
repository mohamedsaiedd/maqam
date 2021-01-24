var gulp = require('gulp');
var concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
const zip = require('gulp-zip');
const imagemin = require('gulp-imagemin');
 

//styles task

gulp.task('styles', function() {
    return gulp.src(['project/css/style.css', 'project/css/chairman.css' ])
      .pipe(autoprefixer())
      .pipe(concat('main.css'))
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('production/css'))
  });
  

//scripts task

gulp.task('scripts', function() {
    return gulp.src('project/js/custom.js' )
      .pipe(uglify())
      .pipe(gulp.dest('production/js'))
  });
  

//zipped task 

gulp.task('compress' ,function() {
    return gulp.src('production/**/*.*')
          .pipe(zip('production-showmedia.zip'))
          .pipe(gulp.dest('.'))
})
     
//images resize task


gulp.task('imageresize' , function() {
    gulp.src(['project/images/*/*.*', 'project/images/*.*'  ])
        .pipe(imagemin())
        .pipe(gulp.dest('production/images'))
});


// html task

gulp.task('html' ,function () {
  return gulp.src('project/*.html')
     
        .pipe(gulp.dest('production/'))
})
 
