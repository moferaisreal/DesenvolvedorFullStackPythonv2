const gulp = require("gulp"); // Certifique-se de instalar o Gulp antes de usar este arquivo
const sass = require("gulp-sass")(require("sass")); // Certifique-se de instalar o plugin gulp-sass para compilar arquivos Sass
const sourceMaps = require("gulp-sourcemaps"); // Certifique-se de instalar o plugin gulp-sourcemaps para gerar mapas de origem
const uglify = require("gulp-uglify"); // Certifique-se de instalar o plugin gulp-uglify para minificar arquivos JavaScript
const obfuscate = require("gulp-obfuscate"); // Certifique-se de instalar o plugin gulp-obfuscate tornar o arquivo JavaScript ilegível
const imageMin = require("gulp-imagemin"); // Certifique-se de instalar o plugin gulp-imagemin para otimizar imagens

function comprimirImagens() {
  return gulp
    .src("./source/images/**/*") // Seleciona todas as imagens na pasta source/images
    .pipe(imageMin())
    .pipe(gulp.dest("./build/images")); // Aplica a otimização de imagens}
}

function comprimirJs() {
  return gulp
    .src("./source/scripts/**/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(sourceMaps.init()) // Inicia o mapeamento de origem
    .pipe(gulp.dest("./build/scripts"));
} // Função para comprimir e ofuscar arquivos JavaScript

function compilaSass() {
  return gulp
    .src("./source/styles/style.scss")
    .pipe(sourceMaps.init()) // Inicia o mapeamento de origem
    .pipe(
      sass({
        /* importante para compilar com menos recursos */ outputStyle:
          "compressed",
      }).on("error", sass.logError)
    )
    .pipe(sourceMaps.write("./maps")) // Escreve os mapas de origem no mesmo diretório
    .pipe(gulp.dest("./build/styles"));
} // Função para compilar arquivos Sass e gerar mapas de origem

exports.default = function () {
  gulp.watch(
    "./source/styles/**/*.scss",
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
  gulp.watch(
    "./source/images/**/*",
    { ignoreInitial: false },
    gulp.series(comprimirImagens)
  );
  gulp.watch(
    "./source/scripts/**/*.js",
    { ignoreInitial: false },
    gulp.series(comprimirJs)
  );
}; /* execução em paralelo =>*/ // Função padrão que observa alterações nos arquivos Sass, imagens e JavaScript

/* function funcaoTeste(callback) {
  setTimeout(() => {
    console.log("Teste executado");
    callback();
  }, 3000);
} // Função de teste que simula uma tarefa assíncrona
 */
/* function falaOi(callback) {
  console.log("Oi!");
  falaXau(); // Chama a função privada
  callback();
} */
/* tarefa privada voce não pode chamar diretamente */
/* function falaXau() {
  console.log("Xau!");
} */
/* tarefas públicas são exportadas */

/* execução em série =>*/
/* exports.default = gulp.series(funcaoTeste, falaOi);
 */
/* exports.default = gulp.parallel(funcaoTeste, falaOi); */
/* exports.falaOi = falaOi;
exports.sass = compilaSass;
exports.javascript = comprimirJs;
exports.imagens = comprimirImagens; */
