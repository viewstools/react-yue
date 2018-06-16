// TODO: have to force "production" env or the react-reconciler will
// swallow errors in non-browser environments

if (process.env.NODE_ENV !== 'production') {
  require('./devtools.js')
}

const { render } = require('./renderer')

module.exports = {
  render,
}
