define([
    'json!./title.json',
    'json!./alias.json',
    'util/dispatcher/dispatcher',
    '{mod}layout/system/system.js',
    '{mod}layout/module/module.js',
    '{mod}module/leftbar/leftbar.js',
    '{mod}module/container/container.js',
    '{mod}module/container1/container1.js',
], function (_title, _alias, _dsp, _system, _module, _leftbar, _container, _container1) {
    _dsp._$startup({
        rules: {
            /**
             * 设置路有对应的title
             */
            title: _title,
            /**
             * 设置注册过的组件对应的路由
             */
            alias: _alias
        },
        modules: {
            '/m': {
                module: _system
            },
            //activity
            '/m/module': {
                module: _module,
                composite: {
                    leftbar: '/?/module/leftbar/'
                }
            },
            '/m/module/container': _container,
            '/m/module/container1': _container1,
        }
    });
});
