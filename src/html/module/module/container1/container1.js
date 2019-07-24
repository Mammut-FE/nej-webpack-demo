import _k from "nejm/base/klass";
import _u from "nejm/base/util";
import _t from "nejm/util/template/tpl";
import _m from "nejm/util/dispatcher/regularModule";
import _tpl from "./container1.html";
import _css from "./container1.css";
var _helper = {};
var _childComponent = {};

var _p = function () {};

_t._$parseUITemplate('<textarea name="css" id="css-box">' + _css + '</textarea>');

_p._$$ModuleContainer1 = Regular.extend({
  name: 'container1',
  template: _tpl,
  config: function () {
    this.data = {
      navItems: [{
        title: '导航1'
      }, {
        title: '导航2'
      }]
    };
  },
  init: function () {}
}); // notify dispatcher

export default _m._$regist('module-container-1', _p._$$ModuleContainer1);