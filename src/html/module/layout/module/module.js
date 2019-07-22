define([
    'base/klass',
    'base/element',
    'base/event',
    'util/template/tpl',
    '{pro}module/module.js',
    'text!./module.css'
], function (_k, _e, _v, _t0, _m, _css, _p) {
    // variable declaration
    _t0._$parseUITemplate('<textarea name="css" id="css-box">' + _css + '</textarea>');

    var _pro;
    /**
     * 项目模块基类对象
     * @class   {_$$ModuleLayoutModule}
     * @extends {_$$Module}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$ModuleLayoutModule = _k._$klass();
    _pro = _p._$$ModuleLayoutModule._$extend(_m._$$Module);

    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function () {
        this.__body = _e._$html2node(
            _t0._$getTextTemplate('tpl-layout-module')
        );
        var _flag = _e._$getByClassName(this.__body, 'j-flag');
        this.__export = {
            leftbar: _flag[0],
            parent: _flag[1]
        };
    };

    // notify dispatcher
    _m._$regist('layout-module', _p._$$ModuleLayoutModule);

    return _p._$$ModuleLayoutModule;
});
