define([
    'base/klass',
    'base/util',
    'util/template/tpl',
    'util/dispatcher/regularModule',
    'regular!./container1.html',
    'text!./container1.css',
], function (
    _k,
    _u,
    _t,
    _m,
    _tpl,
    _css,
    _helper,
    _childComponent,
    _p,
) {
    _t._$parseUITemplate('<textarea name="css" id="css-box">' + _css + '</textarea>');

    _p._$$ModuleContainer1 = Regular.extend({
        name: 'container1',
        template: _tpl,
        config: function () {
            this.data = {
                navItems: [{title: '导航1'}, {title: '导航2'}]
            };
        },
        init: function () {
        }
    });

    // notify dispatcher
    return _m._$regist('module-container-1', _p._$$ModuleContainer1);
});
