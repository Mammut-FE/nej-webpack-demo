define([
    'base/klass',
    'base/util',
    'util/template/tpl',
    'util/dispatcher/regularModule',
    'regular!./leftBar.html',
    'text!./leftBar.css'
], function (
    _k,
    _u,
    _t,
    _m,
    _tpl,
    _css
) {
    _t._$parseUITemplate('<textarea name="css" id="css-box">' + _css + '</textarea>');

    var _p = {},
        dom = Regular.dom;

    _p._$$ModuleLeftBar = Regular.extend({
        name: 'leftbar',
        template: _tpl,
        config: function () {
            this.data = {
                navItems: [{title: '导航1', url: '#/m/module/container'}, {title: '导航2', url: '#/m/module/container1'}]
            };
        },
        init: function () {
        },
        onClick: function (item) {
            location.href = item.url;
        }
    });

    // notify dispatcher
    return _m._$regist('module-leftbar', _p._$$ModuleLeftBar);
});
