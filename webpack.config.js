module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: __dirname + './node_modules',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};