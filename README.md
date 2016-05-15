# gulp-jsnice
A Gulp plugin for http://jsnice.org

# Installation

`npm install https://github.com/heroandtn3/gulp-jsnice.git --save-dev`

# Usage

`jsnice(options)`

Check available options here: https://github.com/brettlangdon/jsnice

# Example

```JavaScript
var jsnice      = require('gulp-jsnice');

gulp.task('jsnice', function() {
  return gulp.src('src/core.js')
    .pipe(jsnice({
      suggest: false,
      types: false
    }))
    .pipe(rename('core.pretty.js'))
    .pipe(gulp.dest('src/'));
});
```

# License

MIT
