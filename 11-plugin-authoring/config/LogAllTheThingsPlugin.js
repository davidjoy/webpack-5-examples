function LogAllTheThingsPlugin() {}

LogAllTheThingsPlugin.prototype.apply = function(compiler) {
  // now you have access to all the compiler instance methods

  compiler.plugin('done', function() {
    console.log('Compiler done!');
  });

  compiler.plugin('compilation', function(compilation) {
    // Now setup callbacks for accessing compilation steps:
    compilation.plugin('optimize', function() {
      console.log('Assets are being optimized.');
    });
  });

  compiler.plugin('emit', function(compilation, callback) {
    // Create a header string for the generated file:
    var filelist = 'In this build:\n\n';

    // Loop through all compiled assets,
    // adding a new line item for each filename.
    for (var filename in compilation.assets) {
      filelist += '- ' + filename + '\n';
    }

    // Insert this list into the Webpack build as a new file asset:
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};
module.exports = LogAllTheThingsPlugin;
