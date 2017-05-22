'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _entity = require('./entity');

var _entity2 = _interopRequireDefault(_entity);

var _authentication = require('./authentication');

var _authentication2 = _interopRequireDefault(_authentication);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idm = function idm(base, token) {
  base = '' + base;
  return {
    /**
    * @namespace group
    * @memberof agile.idm
    **/
    group: (0, _group2.default)(base, token),
    /**
    * @namespace user
    * @memberof agile.idm
    **/
    user: (0, _user2.default)(base, token),
    /**
    * @namespace entity
    * @memberof agile.idm
    **/
    entity: (0, _entity2.default)(base, token),
    /**
    * @namespace authentication
    * @memberof agile.idm
    **/
    authentication: (0, _authentication2.default)(base, token)

  };
};

exports.default = idm;