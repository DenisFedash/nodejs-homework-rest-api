const express = require('express')
const router = express.Router()
const { ctrlWrapper } = require('../../helpers')
const ctrl = require('../../controllers/auth')
const { validation, authenticate, upload } = require('../../middlewares')
const { schemas } = require('../../models/user')

router.post(
  '/users/signup',
  validation(schemas.signup),
  ctrlWrapper(ctrl.signup),
)

router.get('/users/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail))

router.post(
  '/users/verify',
  validation(schemas.email),
  ctrlWrapper(ctrl.resendVerifyEmail),
)

router.post('/users/login', validation(schemas.signup), ctrlWrapper(ctrl.login))

router.get('/users/current', authenticate, ctrlWrapper(ctrl.getCurrent))

router.get('/users/logout', authenticate, ctrlWrapper(ctrl.logout))

router.patch(
  '/users/subscriprion',
  authenticate,
  ctrlWrapper(ctrl.updSubscription),
)

router.patch(
  '/users/avatars',
  authenticate,
  upload.single('avatar'),
  ctrlWrapper(ctrl.updAvatar),
)

module.exports = router
