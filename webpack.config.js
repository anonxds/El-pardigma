var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
  

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
             test:/\.css$/,
             loader: "style-loader!css-loader"
         },
         {
             test: /\.scss$/,
             loader: "style-loader!sass-loader"
         }
      ]
   }
}

module.exports = config;
