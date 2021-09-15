/*
 * @Author: aze
 * @Date: 2021-09-10 09:13:22
 * @LastEditors: aze
 * @LastEditTime: 2021-09-10 09:14:42
 * @Description: 
 * @FilePath: \youtube-back\app\model\subscription.js
 */
// app/model/subscription.js
module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const subscriptionSchema = new Schema({
    user: { // 订阅用户
      type: mongoose.ObjectId,
      ref: 'User',
      required: true
    },
    channel: { // 订阅频道
      type: mongoose.ObjectId,
      ref: 'User',
      required: true
    },
    createdAt: { // 创建时间
      type: Date,
      default: Date.now
    },
    updatedAt: { // 更新时间
      type: Date,
      default: Date.now
    }
  })

  return mongoose.model('Subscription', subscriptionSchema)
}