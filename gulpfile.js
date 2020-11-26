const { series, parallel } = require('gulp')
const compress_images = require('compress-images');
const rm = require('gulp-rm')
const gulp = require('gulp') 

async function compress() {
    await compress_images('./src/PreBuildImg/*.{jpg,JPG,jpeg,JPEG,gif,png,svg}', './src/img/', {compress_force: false, statistic: true, autoupdate: true}, false,
        {jpg: {engine: 'webp', command: ['-q', '20']}},
        {png: {engine: 'pngquant', command: ['--quality=20-50', '-o']}},
        {svg: {engine: 'svgo', command: '--multipass'}},
        {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
    })
}

async function deleteUnecesari() {
    return gulp.src('./src/PreBuildImg/*', { read: false })
        .pipe(rm())
}

exports.default = series(compress)

exports.delete = series(deleteUnecesari)