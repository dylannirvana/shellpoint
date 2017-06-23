var themename = 'development';

var gulp = require('gulp'),
	// Prepare and optimize code etc
	autoprefixer = require('autoprefixer'),
	browserSync = require('browser-sync').create(),
	image = require('gulp-image'),
	jshint = require('gulp-jshint'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),

	// Only work with new or updated files
	newer = require('gulp-newer'),

	// Name of working theme folder
	root = '../' + themename + '/',
	components = '../../components/', // my mod
	scss = root + 'sass/',
	cssdir = root + 'css/', // I added dest for non WP build
	js = root + 'js/',
	img = root + 'images/',
	languages = root + 'languages/';


// CSS via Sass and Autoprefixer
gulp.task('css', function() {
	// return gulp.src(scss + '{style.scss,rtl.scss}')
	return gulp.src(components + 'sass/' + '{style.scss}')
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}).on('error', sass.logError))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
	]))
	.pipe(sourcemaps.write(scss + 'maps'))
	// .pipe(gulp.dest(root));
	.pipe(gulp.dest(cssdir));
});

// Optimize images through gulp-image
gulp.task('images', function() {
	return gulp.src(img + 'RAW/**/*.{jpg,JPG,png}')
	.pipe(newer(img))
	.pipe(image())
	.pipe(gulp.dest(img));
});

// JavaScript
gulp.task('javascript', function() {
	// return gulp.src([js + '*.js'])
	return gulp.src([components + 'js/' + '*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(gulp.dest(js));
});


// Watch everything
gulp.task('watch', function() {
	browserSync.init({
		open: 'external',
		proxy: 'http://localhost:8888/shellpoint/builds/development/index.php',
		port: 8080
	});
	gulp.watch([root + '**/*.css', root + '**/*.scss' ], ['css']);
	gulp.watch([components + 'sass' + '**/*.scss' ], ['css']); // my mod
	gulp.watch(js + '**/*.js', ['javascript']);
	gulp.watch(js + 'js' + '**/*.js', ['javascript']);
	gulp.watch(img + 'RAW/**/*.{jpg,JPG,png}', ['images']);
	gulp.watch(root + '**/*').on('change', browserSync.reload);
});


// Default task (runs at initiation: gulp --verbose)
gulp.task('default', ['watch']);
