import _k from "nejm/base/klass";
import _u from "nejm/base/util";
import _t from "nejm/util/template/tpl";
import _m from "nejm/util/dispatcher/regularModule";
import _tpl from "./leftBar.html";
import _css from "./leftBar.css";

_t._$parseUITemplate('<textarea name="css" id="css-box">' + _css + '</textarea>');

var _p = {},
    dom = Regular.dom;
_p._$$ModuleLeftBar = Regular.extend({
  name: 'leftbar',
  template: _tpl,
  config: function () {
    this.data = {
      navItems: [{
        title: '导航1',
        url: '#/m/module/container'
      }, {
        title: '导航2',
        url: '#/m/module/container1'
      }]
    };
  },
  init: function () {},
  onClick: function (item) {
    location.href = item.url;
  }
}); // notify dispatcher

export default _m._$regist('module-leftbar', _p._$$ModuleLeftBar);