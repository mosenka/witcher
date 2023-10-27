import uglify from "gulp-uglify";
import fileinclude from "gulp-file-include";
import rename from "gulp-rename";
import webpack from "webpack-stream";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			mode: app.isDev ? 'development' :'production',
			output: {
				filename: `app.min.js`
			},
		}))
		// без webpack
		// .pipe(fileinclude())
		// .pipe(app.gulp.dest(app.path.build.js))
		// .pipe(app.plugins.if(
		// 		app.isBuild,
		// 		uglify()
		// 	)
		// )
		// .pipe(rename({suffix: '.min'}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream())
}
