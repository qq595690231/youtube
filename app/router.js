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
