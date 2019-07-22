define([
    'text!./childComponent.html'
], function (_tpl) {
    return Regular.extend({
        template: _tpl
    });
});
