/*
 * @Author: aze
 * @Date: 2021-09-10 15:44:29
 * @LastEditors: aze
 * @LastEditTime: 2021-09-10 17:52:33
 * @Description:
 * @FilePath: \youtube-clone-eggjs\app\service\user.js
 */
const Service = require('egg').Service
const jwt = require('jsonwebtoken')
class UserService extends Service {
  get User () {
    return this.app.model.User
  }
  findByUsername (username) {
    return this.app.model.User.findOne({ username })
  }
  findByEmail (email) {
    return this.app.model.User.findOne({ email }).select('+password')

  }
  async createUser (data) {
    data.password = this.ctx.helper.md5(data.password)
    const user = new this.User(data)
    await user.save()//保存到数据库
    return user
  }
  createToken (data) {
    jwt.sign(data, this.app.config.jwt.secret, {
      expiresIn: this.app.config.jwt.expiresIn
    })
  }
}
module.exports = UserService