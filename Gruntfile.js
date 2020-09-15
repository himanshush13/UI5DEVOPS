module.exports = function(grunt) { 
var sUser = grunt.option('username');
var sPwd = grunt.option('password');
var sServer = grunt.option('server');
var sPT = grunt.option('request');
var sPkg = grunt.option('pkg');

grunt.initConfig({
	 eslint: {
            target: [
                'Gruntfile.js',
                'webapp/**/*.js',
            ],
            options: {
                configFile: '.eslintrc'
            }
        },
  nwabap_ui5uploader: {
    options: {
      conn: {
        server: sServer,
      },
      auth: {
        user: sUser,
        pwd: sPwd
      }
    },
    upload_build: {
      options: {
        ui5: {
           package: sPkg,
           bspcontainer: sPkg,
           bspcontainer_text: 'UI5 upload',
           transportno: sPT
        },
        resources: {
          cwd: 'webapp',
          src: '**/*.*'
        }
      }
    }
  }
});
	//grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-nwabap-ui5uploader');

    // register tasks
    grunt.registerTask('default', [/*'eslint', */'nwabap_ui5uploader:upload_build']);
};

    