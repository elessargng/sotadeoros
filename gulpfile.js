var gulp = require('gulp'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	minifyCss = require('gulp-clean-css'),
	embedTemplates = require('gulp-angular-embed-templates'),
	uglify = require('gulp-uglify'),
	del = require('del');

//Borra temporales y dist
function clean() {
	return del([ 'dist', 'tmp' ]);
}

//Incluye los templateUrl dentro de los .js
function embedTmpl() {
	return gulp.src('app/**/*.js')
        .pipe(embedTemplates({basePath: './'}))
        .pipe(gulp.dest('tmp'));
}

//Sustituye los bloques por su equivalente empaquetado
//Se sigue el mismo orden de inclusión
function index() {
	return gulp.src('*.html')
		.pipe(useref({
            transformPath: function(filePath) {
                return filePath.replace('/app', '/tmp')
            }
        }))
        .pipe(gulpif('scripts/scripts.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
}

function copyPartials() {
	return gulp.src('app/**/partials/*.html')
		.pipe(gulp.dest('dist/app'));
}

function copyFonts() {
	return gulp.src('node_modules/open-iconic/font/fonts/*.*')
		.pipe(gulp.dest('dist/fonts'));
}

function copyShared(){
	return gulp.src("app/shared/**/*.html")
		.pipe(gulp.dest('dist/app/shared'));
}

function copyAssets() {
	return gulp.src('assets/img/*.png')
		.pipe(gulp.dest('dist/assets/img'));
}

var build = gulp.series(clean, embedTmpl, index, copyPartials, copyFonts, copyAssets, copyShared);

gulp.task('build', build);

gulp.task('clean', clean);
