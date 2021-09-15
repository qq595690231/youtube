/*
 * @Author: aze
 * @Date: 2021-09-10 16:13:18
 * @LastEditors: aze
 * @LastEditTime: 2021-09-10 16:20:12
 * @Description:
 * @FilePath: \youtube-clone-eggjs\app\extend\helper.js
 */

const crypto = require('crypto')
exports.md5 = str => {
  return crypto.createHash('md5').update(str).digest('hex')//digest认证
}