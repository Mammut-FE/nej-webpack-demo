const gulp = require('gulp');
const babel = require('gulp-babel');
const path = require('path');

gulp.task('transform', () => {
    return gulp.src([
        'src/**/*.js'
    ]).pipe(babel({
        plugins: [['babel-plugin-transform-nej-modules-es2015', {
            root: path.join(__dirname),
            alias: {
                pro: 'src/javascript',
                mod: 'src/html/module'
            }
        }]]
    })).pipe(gulp.dest('src'));
});
