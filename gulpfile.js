var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp.task('sass', function(){
//   return gulp.src('/public/assets/scss/global.scss')
//     .pipe(sass()) // Using gulp-sass
//     .pipe(gulp.dest('/public/assets/css/'))
// });

gulp.task('sass', async function () {
	 gulp.src('/public/assets/scss/globalCustom.scss',{ allowEmpty: true })
	 .pipe(sass().on('error', sass.logError))
	 .pipe(gulp.dest('/public/assets/css'));
	//gulp.watch('/public/assets/scss/globalCustom.scss', ['sass']);
 });
