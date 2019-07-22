define([
    'base/klass',
    'base/element',
    'base/event',
    'util/template/tpl',
    'util/template/jst',
    '{pro}module/module.js',
    'text!./system.css'
], function (_k, _e, _v, _t0, _t1, _m, _css, _p) {
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
        this.__body = _e._$html2node(
            _t0._$getTextTemplate('tpl-layout-system')
        );

        this.__export = {
            parent: this.__body
        };
    };

    // notify dispatcher
    _m._$regist('layout-system', _p._$$ModuleLayoutSystem);

    return _p._$$ModuleLayoutSystem;
});
