# Webpack 4 Examples

## What is webpack? https://webpack.js.org

Webpack is a module bundler.  It turns source files into deployable web application artifacts.

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
- `mode` argument
- `dist` output directory

### 02 - Basic With Config

- Webpack with a simple configuration file.
- Uses default configuration file name/location

### 03 - Custom config

- A mildly customized configuration file, demonstrating some basic settings.
- Example of how dev/prod configs start to differ

### 04 - Environment configs

- Basic example of having environment-specific (dev, prod) configurations.
- Common configuration entry point which branches on NODE_ENV.

### 05 - Common configuration extraction

- Extracting common configuration elements into a separate file, merged into environment configs.

### 06 - Webpack Dev Server

- Usage with webpack-dev-server (very common).
- Note generated HTML file.

### 07 - Express

- Running webpack-dev-middleware and webpack-hot-middleware with express
- Note how hot reloading becomes difficult.
- Needs a "real" HTML file.

### 08 - Loaders

- Using some common loaders for other file types.

### 09 - Plugins

- Using some common plugins for more exciting output.

### 10 - Babel

- Using babel-loader for JavaScript transpilation.

### 11 - Plugin Authoring

- Example of authoring a plugin.

### 12 - Split Chunks

- Having multiple entry points and common code extraction.

### 13 - DLLs

- Using DLL plugins to extract third party code for faster builds / caching.
- Note: Example 13 (DLLs) is currently a bit broken.  It doesn't properly exclude jquery from the main application bundle. 

### 14 - Code splitting

- Code splitting with dynamic imports. `import()`


