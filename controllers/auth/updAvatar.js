const path = require('path')
const fs = require('fs/promises')
const Jimp = require('jimp')

const { User } = require('../../models/user')

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')

const updAvatar = async (req, res) => {
  const { path: tempDir, originalname } = req.file
  const { _id } = req.user
  const [extention] = originalname.split('.').reverse()
  const newAvatar = `${_id}.${extention}`
  const resultDir = path.join(avatarsDir, newAvatar)
  await fs.rename(tempDir, resultDir)
  const avatar = await Jimp.read(resultDir)
  const resizeAvatart = await avatar.resize(250, 250)
  await resizeAvatart.write(resultDir)
  const awatarURL = path.join('avatars', newAvatar)
  await User.findByIdAndUpdate(_id, { awatarURL })
  res.json({ awatarURL })
}

module.exports = updAvatar
