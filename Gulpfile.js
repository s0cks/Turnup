var gulp = require("gulp"),
    less = require("gulp-less"),
    minify = require("gulp-minify-css"),
    bower = require("main-bower-files"),
    filter = require("gulp-filter");

gulp.task("styles", function(){
    gulp.src(["app/styles/style.less"])
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest("dist/styles"));
});

gulp.task("html", function(){
    gulp.src("app/**/*.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task("javascript", function(){
    gulp.src("app/js/**/*.js")
        .pipe(gulp.dest("dist/js"));
});

gulp.task("bower_components", function(){
    gulp.src(bower())
        .pipe(filter("*.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", function(){
    gulp.run("bower_components", "javascript", "styles", "html");
});