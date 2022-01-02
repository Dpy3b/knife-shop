import svgSprite from "gulp-svg-sprite";
import replace from "gulp-replace";
import cheerio from "gulp-cheerio";
import svgmin from "gulp-svgmin";





export const svgsprite = () => {
	return app.gulp.src(`${app.path.src.svgsprites}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true},
		}))
		.pipe(replace('&gt', '>'))
		.pipe(svgSprite({
			mode: {
				stack: { //было symbol
					sprite: "../sprite.svg", //было без ../
				}
			}
		}))
		.pipe(app.gulp.dest(`${app.path.src.svgUniformSpriteDev}`));
}


export const svgspriteprod = () =>{
	//return app.gulp.src(`${app.path.src}`, {})
	return app.gulp.src("src/img/sprite.svg") // вот тут очень скользкая дорожка
		.pipe(app.gulp.dest(`${app.path.build.svgUniformSpriteProd}`));
}