'use strict'

const createEnvPreprocessor = function () {
  return (content, file, done) => {
    done('process.env = ' + JSON.stringify(process.env) + '; /* Added by processenv plugin */ ' + content)
  }
}

module.exports = {
  'preprocessor:processenv': ['factory', createEnvPreprocessor]
}
