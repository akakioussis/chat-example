const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("build", async function () {
  gulp.src("./src/css/*").pipe(gulp.dest("./dist/css"));

  gulp.src("./src/assets/**").pipe(gulp.dest("./dist/assets/"));

  gulp.src("./*.html").pipe(gulp.dest("./dist"));

  gulp.src("./*.js").pipe(gulp.dest("./dist"));
});
