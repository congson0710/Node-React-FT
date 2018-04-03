// figure out what what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // return prod set of credentials
  module.exports = require('./prod');
} else {
  // return dev set of credentials
  module.exports = require('./dev');
}
