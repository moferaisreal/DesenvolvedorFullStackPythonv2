const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

// Your existing styles task
function styles() {
  return gulp
    .src("./src/styles/**/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("./dist/css"));
}

// Simplified but effective image optimization
function images() {
  console.log("Starting image optimization...");

  return gulp
    .src("./src/images/**/*.{jpg,jpeg,png,gif,svg}")
    .pipe(
      imagemin([
        // Built-in optimizers that come with gulp-imagemin
        imagemin.mozjpeg({ quality: 85, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            { name: "removeViewBox", active: false },
            { name: "cleanupIDs", active: false },
          ],
        }),
        imagemin.gifsicle({ interlaced: true }),
      ])
    )
    .pipe(gulp.dest("./dist/images"))
    .on("end", () => console.log("Image optimization completed!"));
}

// Watch function for development
function watchFiles() {
  gulp.watch("./src/styles/**/*.scss", styles);
  gulp.watch("./src/images/**/*.{jpg,jpeg,png,gif,svg}", images);
  console.log("Watching for changes...");
}

// Export tasks
exports.styles = styles;
exports.images = images;
exports.watch = watchFiles;

// Define build tasks
gulp.task("build", gulp.parallel(styles, images));
gulp.task("default", gulp.series("build"));
gulp.task("dev", gulp.series("build", watchFiles));
