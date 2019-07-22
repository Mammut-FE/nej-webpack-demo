define([
    'base/klass',
    'base/util',
    'util/template/tpl',
    'util/dispatcher/regularModule',
    'regular!./container.html',
    'text!./container.css',
    './container.helper.js',
    './childComponent/childComponent.js'
], function (
    _k,
    _u,
    _t,
    _m,
    _tpl,
    _css,
    _helper,
    _childComponent,
    _p
) {
    _t._$parseUITemplate('<textarea name="css" id="css-box">' + _css + '</textarea>');

    _p._$$ModuleContainer = Regular.extend({
        name: 'container',
        template: _tpl,
        config: function () {
            this.data = {
                result: ''
            };
        },
        init: function () {
        },
        onAdd: function (num1, num2) {
            this.data.result = _helper.add(num1, num2);
        }
    });

    _p._$$ModuleContainer.component('Child', _childComponent);

    // notify dispatcher
    return _m._$regist('module-container', _p._$$ModuleContainer);
});
