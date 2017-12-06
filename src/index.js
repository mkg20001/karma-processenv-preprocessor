'use strict'

const createEnvPreprocessor = () => {
  return (content, file, done) => {
    done('if (!process) process = {}; process.env = window.env = ' + JSON.stringify(process.env) + '; /* Added by processenv plugin */ ' + content)
  }
}

module.exports = {
  'preprocessor:processenv': ['factory', createEnvPreprocessor]
}
