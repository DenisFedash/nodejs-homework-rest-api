const { User } = require('../../models/user')

const logout = async (req, res) => {
  const { _id } = req.user
  await User.findByIdAndUpdate(_id, {
    token: '',
  })
  if (!_id) {
    res.status(401).json({
      status: 'error',
      code: 401,
      message: 'Not authorized',
    })
  }
  res.status(204).json()
}

module.exports = logout
