var gulp = require('gulp');
var server = require('gulp-webserver');
var fs = require('fs');
var path = require('path');
var url = require('url');
var data = require('./data/data');

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            host: 'localhost',
            port: 8087,
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return;
                }
                var pathname = url.parse(req.url).pathname;
                pathname = pathname == '/' ? '/index.html' : pathname;
                if (pathname == '/index.html') {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                } else if (pathname == '/liu') {
                    res.end(JSON.stringify(data));
                }
                next();
            }
        }));
});