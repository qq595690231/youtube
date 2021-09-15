'use strict';

/** @type Egg.EggPlugin */
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
// exports.mongoose = {
//   enable: true,
//   package: 'egg-mongoose',
// };
exports.validate = {
  enable: true,
  package: 'egg-validate',
};