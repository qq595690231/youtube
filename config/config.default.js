/*
 * @Author: aze
 * @Date: 2021-09-09 17:01:44
 * @LastEditors: aze
 * @LastEditTime: 2021-09-15 13:46:04
 * @Description: 
 * @FilePath: \o\config\config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1631178091151_7190';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/back-test',
      options: {
        useUnifiedTopology: true
      },
      plugins: []
    }
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
