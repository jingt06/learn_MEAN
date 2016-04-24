var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsFiles = ['*.js','src/**/*.js'];
var jscs = require('gulp-jscs');

gulp.task('style',function(){
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish',{
			verbose: true
		}))
		.pipe(jscs());
});

gulp.task('inject', function(){
	var wiredep = require('wiredep').stream;
	var inject = require('gulp-inject');
	var options = {
		bowerJson: require('./bower.json'),
		directory: './public/lib',
		ignorePath: '../../pubilc'
	}

	var injectSrc = gulp.src(['./public/css/*.css',
							  './public/js/*.js'], {read: false});
	var injectOptions = {
		ignorePath: '/public'
	};

	return gulp.src('./src/views/*.html')
		.pipe(wiredep(options))
		.pipe(inject(injectSrc, injectOptions))
		.pipe(gulp.dest('./src/views'));
})