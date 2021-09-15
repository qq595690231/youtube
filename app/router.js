/*
 * @Author: aze
 * @Date: 2021-09-15 09:09:08
 * @LastEditors: aze
 * @LastEditTime: 2021-09-15 09:15:59
 * @Description: 
 * @FilePath: \o\app\router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.prefix('/api/v1')
  router.post('/api/v1/users', controller.user.create)
};
