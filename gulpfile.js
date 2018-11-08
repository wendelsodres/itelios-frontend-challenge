//Importando modulos
var gulp = require('gulp'),
    liveReload = require('browser-sync');

//Browser Sync live reload no navegador

gulp.task('server', function () {

    liveReload.init({

        //Inicia um servidor na pasta
        server: {
            baseDir: './'
        }

    });

    gulp.watch('css/*.css').on('change', liveReload.reload);
    gulp.watch('js/*.js').on('change', liveReload.reload);
    
});