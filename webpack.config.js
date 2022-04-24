const path = require('path');

module.exports = {
    entry: './frontend/slack_chat.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: ['babel-loader', 'file-loader'],
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    resolve: {
        extensions: [".js", '.jsx', '*']
    }
};