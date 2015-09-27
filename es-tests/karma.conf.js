module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['jspm', 'jasmine'],

        files: [],

        exclude: [
        ],

        jspm: {
            loadFiles: [
                'src/**/*.js',
                'test/**/*.js'
            ],
            useBundles: true
        }

        // define reporters, port, logLevel, browsers etc.
    });
};
