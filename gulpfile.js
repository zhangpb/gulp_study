var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

gulp.task('default', function() {
		runSequence(
			[
				'clean',
				'minify',
			],
			function () {
				console.log('项目编译成功！');
			}
		);
	});

gulp.task('clean',function(){
    return gulp.src([
        './build/*'
    ]).pipe(clean());
});

gulp.task('minify', function () {
  gulp.src('./index.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/app.js'))
});

 