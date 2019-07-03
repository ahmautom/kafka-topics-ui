module.exports = {
    mode: 'development',
    entry: './dist/combined',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['required-loader']
            },
            {
                test: /\.html$/,
                use: ['raw-loader', 'ng-cache-loader?prefix=']
            }
        ]
    }
};