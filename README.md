# karma-processenv-preprocessor

A Karma preprocessor to access process.env inside your tests

## Usage

```js
// karma.conf.js
module.exports = function (config) {
  config.set({
    preprocessors: {
      '**/*.js': ['processenv']
    },

    plugins: [
      'karma-processenv-preprocessor'
    ]
  })
}
```
