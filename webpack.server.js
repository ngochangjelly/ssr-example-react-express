const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  // Note the use of target: 'node' and externals: [nodeExternals()] form webpack-node-externals, which will omit the files from node_modules in the bundle; the server can access these files directly
  // Because JavaScript can be written for both server and browser, webpack offers multiple deployment targets that you can set in your webpack configuration.
  // In the example above, using node webpack will compile for usage in a Node.js-like environment (uses Node.js require to load chunks and not touch any built in modules like fs or path).
  target: 'node',
  //   When writing a node library, for instance, you may want to split your code to several files, and use Webpack to bundle them. However - you wouldn't want to bundle your code with its entire node_modules dependencies, for two reasons:

  // It will bloat your library on npm.
  // It goes against the entire npm dependencies management. If you're using Lodash, and the consumer of your library also has the same Lodash dependency, npm makes sure that it will be added only once. But bundling Lodash in your library will actually make it included twice, since npm is no longer managing this dependency.
  // As a consumer of a library, I want the library code to include only its logic, and just state its dependencies so they could me merged/resolved with the rest of the dependencies in my project. Bundling your code with your dependencies makes it virtually impossible.
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 8081
  }
};
