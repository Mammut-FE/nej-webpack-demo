import _k from "nejm/base/klass";
import _u from "nejm/base/util";
import _t from "nejm/util/template/tpl";
import _m from "nejm/util/dispatcher/regularModule";
import _tpl from "./container.html";
import _css from "./container.css";
import _helper from "./container.helper";
import _childComponent from "./childComponent/childComponent";
var _p = {};

_t._$parseUITemplate('<textarea name="css" id="css-box">' + _css + '</textarea>');

_p._$$ModuleContainer = Regular.extend({
  name: 'container',
  template: _tpl,
  config: function () {
    this.data = {
      result: ''
    };
  },
  init: function () {},
  onAdd: function (num1, num2) {
    this.data.result = _helper.add(num1, num2);
  }
});

_p._$$ModuleContainer.component('Child', _childComponent); // notify dispatcher


export default _m._$regist('module-container', _p._$$ModuleContainer);