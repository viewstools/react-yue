/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
// src https://github.com/iamdustan/react-hardware/blob/master/src/devtools/setupDevtoolsFiber.js

const defineProperty = Object.defineProperty
defineProperty(global, 'WebSocket', {
  value: require('ws'),
})
defineProperty(global, 'window', {
  value: global,
})

const { connectToDevTools } = require('react-devtools-core')

connectToDevTools({
  isAppActive() {
    // Don't steal the DevTools from currently active app.
    return true
  },
  host: 'localhost',
  // default port? port: ,
  resolveRNStyle: null, // TODO maybe: require('flattenStyle')
})
