const signup = require('./signup')
const login = require('./login')
const getCurrent = require('./getCurrent')
const logout = require('./logout')
const updSubscription = require('./updSubscription')
const updAvatar = require('./updAvatar')
const verifyEmail = require('./verifyEmail')
const resendVerifyEmail = require('./resendVerifyEmail')

module.exports = {
  signup,
  login,
  getCurrent,
  logout,
  updSubscription,
  updAvatar,
  verifyEmail,
  resendVerifyEmail,
}
