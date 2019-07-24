import _title from "./title.json";
import _alias from "./alias.json";
import _dsp from "nejm/util/dispatcher/dispatcher";
import _system from "../../html/module/layout/system/system";
import _module from "../../html/module/layout/module/module";
import _leftbar from "../../html/module/module/leftbar/leftbar";
import _container from "../../html/module/module/container/container";
import _container1 from "../../html/module/module/container1/container1";

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
    '/m/module/container1': _container1
  }
});