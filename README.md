# Webpack 4 Examples

## What is webpack? https://webpack.js.org

Webpack is a module bundler.  It turns source files into deployable web application artifacts.

- Processes JavaScript and JSON by default.
- Can be extended to process other file types.
- Creates a `compiler` instance which crawls import tree from entry points.
- Compiler populates a `compilation` object as it traverses.
- Provides hooks to give loaders and plugins access to the compiler and compilation object to perform additional, custom operations.
- Outputs bundles.

## Usage of this repo

Examples of various webpack configs, generally increasing in complexity.

For each subdirectory:

- `npm install`

For 01-03:

- `./node_modules/.bin/webpack`

For 04-14: 

- `npm start`

## The Examples

### 01 - Basic

- Webpack without a configuration file.
- `mode` argument (`development` or `production`)
- `dist` output directory
- Take a look at the output bundle!
- Run `node dist/main.js` for kicks.

### 02 - Basic With Config

- Webpack with a simple configuration file.
- Uses default configuration file name/location

### 03 - Custom config

- A mildly customized configuration file, demonstrating some basic settings.
- Example of how dev/prod configs start to differ
- Fingerprinting

### 04 - Environment configs

- Basic example of having environment-specific (dev, prod) configurations.
- Common configuration entry point which branches on NODE_ENV.

### 05 - Common configuration extraction

- Extracting common configuration elements into a separate file, merged into environment configs.

### 06 - Webpack Dev Server

- Usage with webpack-dev-server (very common).
- Note generated HTML file.
- Note that bundle is not written to filesystem.  It's stored in memory.

### 07 - Express

- Running webpack-dev-middleware and webpack-hot-middleware with express
- Note how hot reloading becomes difficult.
- Needs a "real" HTML file.

### 08 - Loaders 

- Using some common loaders for other file types.
- There are lots of loaders: https://webpack.js.org/loaders/
- If you didn't realize my love for my cat earlier, you will now.

### 09 - Plugins

- Using some common plugins for more exciting output.
- There are lots of plugins: https://webpack.js.org/plugins/

### 10 - Babel

- Using babel-loader for JavaScript transpilation.
- Example of babel preset-env.  
- Note how output changes (`const`, for instance) if the output target is changed to `"ie": "11"`

### 11 - Plugin Authoring

- Basic example of authoring a plugin.
- Many more hooks are available: 
  - https://webpack.js.org/api/compiler-hooks/
  - https://webpack.js.org/api/compilation-hooks/

### 12 - Split Chunks

- Having multiple entry points and common code extraction.

### 13 - DLLs

- Using DLL plugins to extract third party code for faster builds / caching.
- Note: Example 13 (DLLs) is currently a bit broken.  It doesn't properly exclude jquery from the main application bundle. 

### 14 - Code splitting

- Code splitting with dynamic imports. `import()`


