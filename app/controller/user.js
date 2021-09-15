const Controller = require('egg').Controller

class UserController extends Controller {
  async create () {
    this.ctx.body = 'user create'
    // const body = this.ctx.request.body
    // this.ctx.validate({
    //   email: { type: 'email' },
    //   username: { type: 'string' },
    //   password: { type: 'string' }
    // })
    // if (await userService.findByUsername(body.username)) {
    //   this.ctx.throw(422, '用户已存在')
    // }
    // if (await userService.findByUserEmail(body.email)) {
    //   this.ctx.throw(422, 'yx已存在')
    // }
    // // 保存用户
    // const user = await userService.createUser(body)

    // const token = userService.createToken({
    //   userId: user._id
    // })
    // // 发送响应
    // this.ctx.body = {
    //   user: {
    //     token,
    //     eamil: user.email,
    //     username: user.username,
    //     channelDescription: user.channelDescription,
    //     avatar: user.avatar
    //   }
    // }
  }

  // async login () {
  //   const body = this.ctx.request.body
  //   this.ctx.validate({
  //     email: { type: 'email' },
  //     password: { type: 'string' }
  //   }, body)
  //   const UserService = this.service.user
  //   const user = await userService.findByEmail(body.email)
  //   if (!user) {
  //     this.ctx.throw(422, '用户不存在')
  //   }

  //   if (this.ctx.helper.md5(body.password) !== user.password) {
  //     this.ctx.throw(422, '密码不正确')
  //   }

  //   const token = userService.createToken({
  //     userId: user._id
  //   })
  //   // 发送响应数据
  //   this.ctx.body = {
  //     user: {
  //       email: user.email,
  //       token,
  //       username: user.username,
  //       channelDescription: user.channelDescription,
  //       avatar: user.avatar
  //     }
  //   }
  // }
}

module.exports = UserController;
