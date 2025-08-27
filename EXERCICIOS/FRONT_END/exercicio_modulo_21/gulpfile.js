const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

// Fixed styles task - sourcemaps should be initialized first
function styles() {
  return gulp
    .src("./src/styles/**/*.scss")
    .pipe(sourcemaps.init()) // Move this before sass
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(sourcemaps.write("./maps")) // This should be before dest
    .pipe(gulp.dest("./dist/css"));
}

function scripts() {
  return gulp.src("./src/scripts/**/*.js").pipe(gulp.dest("./dist/js"));
}

// Renamed function to avoid conflict with require("gulp-uglify")
function uglifyJS() {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      uglify({
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        mangle: true,
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist/js"));
}

function bundleJS() {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("bundle.min.js")) // Combine all JS files
    .pipe(
      uglify({
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        mangle: true,
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist/js"));
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

// Fixed watch function - should watch for JS changes and run uglify
function watchFiles() {
  gulp.watch("./src/styles/**/*.scss", styles);
  gulp.watch("./src/images/**/*.{jpg,jpeg,png,gif,svg}", images);
  gulp.watch("./src/js/**/*.js", uglifyJS); // Changed from scripts to uglifyJS
  console.log("Watching for changes...");
}

// Export tasks - fixed uglify reference
exports.uglify = uglifyJS; // Fixed: now references the renamed function
exports.bundle = bundleJS;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.watch = watchFiles;

// Fixed build tasks - use uglifyJS instead of both scripts and uglify
gulp.task("build", gulp.parallel(styles, images, uglifyJS)); // Removed scripts, using only uglifyJS
gulp.task("build-bundle", gulp.parallel(styles, images, bundleJS));
gulp.task("build-dev", gulp.parallel(styles, images, scripts)); // New: development build without uglify
gulp.task("default", gulp.series("build"));
gulp.task("dev", gulp.series("build-dev", watchFiles)); // Use build-dev for development
