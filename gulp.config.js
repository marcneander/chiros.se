module.exports = function() {
    var config = {
        root: './',
        styles: {
            allLess: './src/less/**/*.less',
            appLess: './src/less/style.less',
            allOutputCss: './build/css/**/*.css'
        },
        indexHtml: './src/index.html',
        bowerComponents: './bower_components/',
        temp: './build',
        cname: './src/CNAME',
        img: './src/img/**/*'
    }

    return config;
}
