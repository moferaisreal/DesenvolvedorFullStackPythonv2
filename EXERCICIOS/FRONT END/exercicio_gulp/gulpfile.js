/* constantes e importações necessárias */
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const sourceMaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");

/* funções de tarefa do Gulp */
function comprimirImagens() {
  return gulp
    .src("source/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

function compilarSass() {
  return gulp
    .src("source/styles/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourceMaps.write("./maps"))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./build/styles"));
}

function minificarJS() {
  return gulp
    .src("source/scripts/**/*.js")
    .pipe(uglify())
    .pipe(sourceMaps.init())
    .pipe(gulp.dest("./build/scripts"));
}
/* inicializar tarefas de observação */
exports.default = function () {
  gulp.watch("source/images/*", { ignoreInitial: false }, comprimirImagens);
  gulp.watch("source/styles/*.scss", { ignoreInitial: false }, compilarSass);
  gulp.watch("source/scripts/*.js", { ignoreInitial: false }, minificarJS);
};
