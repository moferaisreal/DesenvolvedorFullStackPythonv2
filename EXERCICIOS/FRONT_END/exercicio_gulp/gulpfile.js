/* constantes e importações necessárias */
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

/* funções de tarefa do Gulp */
function comprimirImagens() {
  console.log("🖼️  Iniciando compressão de imagens...");

  return gulp
    .src("source/images/**/*.{jpg,jpeg,png,gif,svg}")
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 75, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo(),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(gulp.dest("./build/images"))
    .on("end", () => {
      console.log("✅ Compressão de imagens concluída!");
    });
}

function compilarSass() {
  console.log("🎨 Compilando SASS...");

  return gulp
    .src("source/styles/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./build/styles"))
    .on("end", () => {
      console.log("✅ Compilação SASS concluída!");
    });
}

function minificarJS() {
  console.log("⚡ Minificando JavaScript...");

  return gulp
    .src("source/scripts/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"))
    .on("end", () => {
      console.log("✅ Minificação JavaScript concluída!");
    });
}

/* inicializar tarefas de observação */
exports.default = function () {
  console.log("👀 Iniciando modo de observação...");

  gulp.watch("source/images/**/*", { ignoreInitial: false }, comprimirImagens);
  gulp.watch("source/styles/**/*.scss", { ignoreInitial: false }, compilarSass);
  gulp.watch("source/scripts/**/*.js", { ignoreInitial: false }, minificarJS);

  console.log("🚀 Gulp está observando suas alterações!");
};

// Tarefa para executar apenas compressão de imagens
exports.imagens = comprimirImagens;

// Tarefa para build completo
exports.build = gulp.parallel(comprimirImagens, compilarSass, minificarJS);
