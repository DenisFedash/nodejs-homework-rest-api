const { createError } = require('../../helpers')
const { User } = require('../../models/user')

const verifyEmail = async (req, res) => {
  const { verficationToken } = req.params
  const user = await User.findOne({ verficationToken })
  if (!user) {
    throw createError(404)
  }
  await User.findByIdAndUpdate(user._id, { verficationToken: '', verify: true })
  res.json({
    message: 'Verification successful',
  })
}

module.exports = verifyEmail
