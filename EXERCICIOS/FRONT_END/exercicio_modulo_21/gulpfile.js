// Import the tools we need
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const path = require("path");

function styles() {
  console.log("Diretório trabalhado:", process.cwd());
  console.log(
    "Procurando o arquivo .scss:",
    path.resolve("./src/styles/**/*.scss")
  );
  console.log(
    "Sass includepath vão ser:",
    ["node_modules"].map((p) => path.resolve(p))
  );

  return gulp
    .src("./src/styles/**/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
        includePaths: ["node_modules"],
        verbose: true,
      }).on("error", function (error) {
        console.log("Detailed Sass error information:");
        console.log("Error message:", error.message);
        console.log("File:", error.file);
        console.log("Line:", error.line);
        console.log("Column:", error.column);
        sass.logError.call(this, error);
      })
    )
    .pipe(gulp.dest("./dist/css"));
}

function watchFiles() {
  gulp.watch("./src/styles/**/*.scss", styles);
}

exports.styles = styles;
exports.watch = watchFiles;

gulp.task("default", gulp.parallel(styles));

gulp.task("watch", gulp.series(styles, watchFiles));
