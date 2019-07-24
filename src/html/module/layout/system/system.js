import _k from "nejm/base/klass";
import _e from "nejm/base/element";
import _v from "nejm/base/event";
import _t0 from "nejm/util/template/tpl";
import _t1 from "nejm/util/template/jst";
import _m from "../../../../javascript/module/module";
import _css from "./system.css";
var _p = {};

// variable declaration
_t0._$parseUITemplate('<textarea name="css" id="css-box">' + _css + '</textarea>');

var _pro;
/**
 * 项目模块基类对象
 * @class   {_$$ModuleLayoutSystem}
 * @extends {_$$Module}
 * @param   {Object}  可选配置参数，已处理参数列表如下所示
 */


_p._$$ModuleLayoutSystem = _k._$klass();
_pro = _p._$$ModuleLayoutSystem._$extend(_m._$$Module);
/**
 * 解析模块所在容器节点
 * @param  {Object} 配置信息
 * @return {Node}   模块所在容器节点
 */

_pro.__doParseParent = function (_options) {
  return _e._$get('module-box');
};
/**
 * 构建模块
 * @return {Void}
 */


_pro.__doBuild = function () {
  this.__body = _e._$html2node(_t0._$getTextTemplate('tpl-layout-system'));
  this.__export = {
    parent: this.__body
  };
}; // notify dispatcher


_m._$regist('layout-system', _p._$$ModuleLayoutSystem);

export default _p._$$ModuleLayoutSystem;