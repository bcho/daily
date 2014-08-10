module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        srcDir: './backend',
        bowerComponentDir: './bower_components',

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: ['<%= srcDir %>', '<%= bowerComponentDir %>'],
                    useAvailablePort: true
                }
            }
        },

        watch: {
            pages: {
                files: ['<%= srcDir %>/**/*.html'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            assets: {
                files: ['<%= srcDir %>/**/*.css'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'connect:server',
        'watch'
    ]);
};
